import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AssessmentState, UserResponse, Section } from '../types';
import { assessmentSections } from '@/data/questions';

const INITIAL_TIMERS = assessmentSections.reduce((acc, section) => {
  acc[section.id] = section.timeLimit;
  return acc;
}, {} as Record<string, number>);

const INITIAL_TIME_SPENT = assessmentSections.reduce((acc, section) => {
  acc[section.id] = 0;
  return acc;
}, {} as Record<string, number>);

export const useAssessmentStore = create<AssessmentState>()(
  persist(
    (set, get) => ({
      status: 'landing',
      sections: assessmentSections,
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      responses: {},
      sectionTimers: { ...INITIAL_TIMERS },
      sectionTimeSpent: { ...INITIAL_TIME_SPENT },
      overallTimeSpent: 0,
      isTimerActive: false,

  startAssessment: () => {
    set({
      status: 'instructions',
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      responses: {},
      sectionTimers: { ...INITIAL_TIMERS },
      sectionTimeSpent: { ...INITIAL_TIME_SPENT },
      overallTimeSpent: 0,
      isTimerActive: false,
    });
  },

  confirmInstructions: () => {
    set({
      status: 'testing',
      isTimerActive: true,
    });
  },

  nextQuestion: () => {
    const { currentSectionIndex, currentQuestionIndex, sections } = get();
    const currentSection = sections[currentSectionIndex];
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    }
  },

  prevQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  },

  goToQuestion: (index: number) => {
    const { currentSectionIndex, sections } = get();
    const currentSection = sections[currentSectionIndex];
    if (index >= 0 && index < currentSection.questions.length) {
      set({ currentQuestionIndex: index });
    }
  },

  selectOption: (sectionId: string, questionId: string, option: string) => {
    const key = `${sectionId}_${questionId}`;
    const question = assessmentSections
      .find(s => s.id === sectionId)
      ?.questions.find(q => q.id === questionId);

    const isCorrect = question?.correctAnswer ? question.correctAnswer === option : undefined;

    set(state => {
      const existing = state.responses[key] || { questionId, timeSpent: 0 };
      return {
        responses: {
          ...state.responses,
          [key]: {
            ...existing,
            selectedOption: option,
            isCorrect,
          },
        },
      };
    });
  },

  toggleFlagQuestion: (sectionId: string, questionId: string) => {
    const key = `${sectionId}_${questionId}`;
    set(state => {
      const existing = state.responses[key] || { questionId, timeSpent: 0 };
      return {
        responses: {
          ...state.responses,
          [key]: {
            ...existing,
            flagged: !existing.flagged,
          },
        },
      };
    });
  },

  tickTimer: () => {
    const { status, currentSectionIndex, sections, sectionTimers, sectionTimeSpent, overallTimeSpent, isTimerActive } = get();
    if (status !== 'testing' || !isTimerActive) return;

    const currentSection = sections[currentSectionIndex];
    const sectionId = currentSection.id;
    const remainingTime = sectionTimers[sectionId];

    if (remainingTime <= 1) {
      // Time is up for this section
      set(state => ({
        sectionTimers: { ...state.sectionTimers, [sectionId]: 0 },
        sectionTimeSpent: { ...state.sectionTimeSpent, [sectionId]: state.sectionTimeSpent[sectionId] + 1 },
        overallTimeSpent: state.overallTimeSpent + 1,
      }));
      get().submitSection();
    } else {
      // Tick down and add time spent
      set(state => {
        const nextTimers = { ...state.sectionTimers, [sectionId]: remainingTime - 1 };
        const nextTimeSpent = { ...state.sectionTimeSpent, [sectionId]: state.sectionTimeSpent[sectionId] + 1 };
        
        // Also update timeSpent on the current active question
        const currentQuestion = currentSection.questions[state.currentQuestionIndex];
        const questionKey = `${sectionId}_${currentQuestion.id}`;
        const existingResponse = state.responses[questionKey] || { questionId: currentQuestion.id, timeSpent: 0 };
        
        return {
          sectionTimers: nextTimers,
          sectionTimeSpent: nextTimeSpent,
          overallTimeSpent: overallTimeSpent + 1,
          responses: {
            ...state.responses,
            [questionKey]: {
              ...existingResponse,
              timeSpent: existingResponse.timeSpent + 1,
            },
          },
        };
      });
    }
  },

  submitSection: () => {
    const { currentSectionIndex, sections } = get();
    const isLastSection = currentSectionIndex === sections.length - 1;

    if (isLastSection) {
      set({
        status: 'finished',
        isTimerActive: false,
      });
    } else {
      set({
        currentSectionIndex: currentSectionIndex + 1,
        currentQuestionIndex: 0,
        status: 'instructions',
        isTimerActive: false,
      });
    }
  },

  forceSubmitAssessment: () => {
    set({
      status: 'finished',
      isTimerActive: false,
    });
  },

  resetAssessment: () => {
    set({
      status: 'landing',
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      responses: {},
      sectionTimers: { ...INITIAL_TIMERS },
      sectionTimeSpent: { ...INITIAL_TIME_SPENT },
      overallTimeSpent: 0,
      isTimerActive: false,
    });
  },
    }),
    {
      name: 'aegis-assessment-store',
    }
  )
);
