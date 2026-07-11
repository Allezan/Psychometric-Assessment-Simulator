'use client';

import React from 'react';
import { useAssessmentStore } from '../store/useAssessmentStore';
import { useAssessmentTimer } from '../hooks/useAssessmentTimer';
import { QuestionDisplay } from './QuestionDisplay';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Flag, Clock, CheckCircle2, Circle } from 'lucide-react';

export const AssessmentLayout: React.FC = () => {
  // Setup the background timer tick
  useAssessmentTimer();

  const sections = useAssessmentStore(state => state.sections);
  const currentSectionIndex = useAssessmentStore(state => state.currentSectionIndex);
  const currentQuestionIndex = useAssessmentStore(state => state.currentQuestionIndex);
  const responses = useAssessmentStore(state => state.responses);
  const sectionTimers = useAssessmentStore(state => state.sectionTimers);

  // Store actions
  const selectOption = useAssessmentStore(state => state.selectOption);
  const toggleFlagQuestion = useAssessmentStore(state => state.toggleFlagQuestion);
  const nextQuestion = useAssessmentStore(state => state.nextQuestion);
  const prevQuestion = useAssessmentStore(state => state.prevQuestion);
  const goToQuestion = useAssessmentStore(state => state.goToQuestion);
  const submitSection = useAssessmentStore(state => state.submitSection);
  const forceSubmitAssessment = useAssessmentStore(state => state.forceSubmitAssessment);

  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [transitionMessage, setTransitionMessage] = React.useState('');

  const handleTransitionSubmitSection = () => {
    setIsTransitioning(true);
    const isLastSection = currentSectionIndex === sections.length - 1;
    setTransitionMessage(
      isLastSection
        ? 'Finalizing responses & generating psychometric profile dashboard...'
        : `Saving responses & initializing next section: ${sections[currentSectionIndex + 1]?.title || ''}...`
    );

    setTimeout(() => {
      submitSection();
      setIsTransitioning(false);
    }, 1000);
  };

  const handleTransitionForceSubmit = () => {
    setIsTransitioning(true);
    setTransitionMessage('Compiling assessment results & finalizing score profiles...');

    setTimeout(() => {
      forceSubmitAssessment();
      setIsTransitioning(false);
    }, 1200);
  };

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const sectionTimer = sectionTimers[currentSection.id] || 0;

  // Helper to format remaining time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Helper to get response for a question
  const getResponse = (qId: string) => {
    const key = `${currentSection.id}_${qId}`;
    return responses[key];
  };

  const currentResponse = getResponse(currentQuestion.id);

  return (
    <div className="relative flex flex-col h-screen w-full bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 overflow-hidden font-sans">
      {isTransitioning && (
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center font-sans gap-3">
          <span className="animate-spin h-6 w-6 border-2 border-zinc-300 border-t-zinc-800 rounded-full dark:border-zinc-800 dark:border-t-zinc-200"></span>
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{transitionMessage}</span>
        </div>
      )}
      
      {/* Top Header Panel */}
      <header className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-950 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm tracking-tight bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-2 py-1 rounded">
            AEGIS
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
            Assessment Console
          </span>
        </div>

        {/* Current Section & Countdown Timer */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 px-3.5 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 font-mono text-sm font-semibold">
            <Clock className="h-4 w-4 text-zinc-500" />
            <span className={sectionTimer < 60 ? 'text-red-500 animate-pulse' : 'text-zinc-700 dark:text-zinc-300'}>
              {formatTime(sectionTimer)}
            </span>
          </div>

          <Button
            onClick={handleTransitionSubmitSection}
            variant="default"
            size="sm"
            className="font-medium text-xs tracking-wide uppercase px-4 h-9"
          >
            {currentSectionIndex === sections.length - 1 ? 'Finish Assessment' : 'Next Section'}
          </Button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex flex-1 w-full overflow-hidden">
        
        {/* Left Navigation Sidebar */}
        <aside className="w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-6 flex flex-col justify-between overflow-y-auto shrink-0">
          <div>
            {/* Sections Progress List */}
            <div className="mb-8">
              <h5 className="text-xxs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Assessment Path
              </h5>
              <div className="flex flex-col gap-2">
                {sections.map((sec, idx) => {
                  const isActive = idx === currentSectionIndex;
                  const isCompleted = idx < currentSectionIndex;

                  return (
                    <div
                      key={sec.id}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs transition-colors ${
                        isActive
                          ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 font-semibold'
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-4 w-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                      ) : isActive ? (
                        <div className="h-4 w-4 rounded-full border-2 border-zinc-800 dark:border-zinc-200 flex items-center justify-center shrink-0">
                          <div className="h-1.5 w-1.5 rounded-full bg-zinc-800 dark:bg-zinc-200" />
                        </div>
                      ) : (
                        <Circle className="h-4 w-4 text-zinc-300 dark:text-zinc-700 shrink-0" />
                      )}
                      <span className="truncate">{sec.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question Navigator Grid */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h5 className="text-xxs font-semibold uppercase tracking-wider text-zinc-400">
                  Question Index
                </h5>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {currentQuestionIndex + 1} of {currentSection.questions.length}
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {currentSection.questions.map((q, idx) => {
                  const resp = getResponse(q.id);
                  const isAnswered = !!resp?.selectedOption;
                  const isFlagged = !!resp?.flagged;
                  const isActive = idx === currentQuestionIndex;

                  let btnStyle = 'border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400';
                  if (isActive) {
                    btnStyle = 'border-zinc-900 text-zinc-900 bg-zinc-50 font-bold dark:border-zinc-100 dark:text-zinc-100 dark:bg-zinc-900';
                  } else if (isAnswered) {
                    btnStyle = 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(idx)}
                      className={`relative h-9 rounded-md border text-xs font-mono transition-all flex items-center justify-center cursor-pointer ${btnStyle}`}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className="absolute top-0.5 right-0.5 flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Submit Info */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <button
              onClick={handleTransitionForceSubmit}
              className="w-full text-left text-[11px] font-semibold text-red-500 hover:text-red-600 uppercase tracking-wider transition-colors cursor-pointer"
            >
              End assessment early
            </button>
            <p className="text-[10px] text-zinc-400 mt-1">
              Submits all answers and calculates scores.
            </p>
          </div>
        </aside>

        {/* Question Panel */}
        <main className="flex-1 overflow-y-auto bg-zinc-50 dark:bg-black p-8 md:p-12 flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
            
            {/* Header info for Section */}
            <div className="mb-6">
              <span className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                {currentSection.title}
              </span>
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mt-2">
                Question {currentQuestionIndex + 1}
              </h2>
            </div>

            {/* Render the active Question */}
            <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8 shadow-sm">
              <QuestionDisplay
                question={currentQuestion}
                sectionId={currentSection.id}
                selectedOption={currentResponse?.selectedOption}
                flagged={currentResponse?.flagged}
                onSelectOption={(opt) => selectOption(currentSection.id, currentQuestion.id, opt)}
                onToggleFlag={() => toggleFlagQuestion(currentSection.id, currentQuestion.id)}
              />
            </Card>
          </div>

          {/* Bottom Footer Controls */}
          <div className="mt-8 flex justify-between items-center max-w-4xl mx-auto w-full pt-4 border-t border-zinc-200 dark:border-zinc-800 shrink-0">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1.5 text-xs"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>

            <div className="flex items-center gap-1.5">
              {currentResponse?.flagged && (
                <span className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                  <Flag className="h-3.5 w-3.5 fill-current" /> Flagged for review
                </span>
              )}
            </div>

            <Button
              variant="outline"
              onClick={nextQuestion}
              disabled={currentQuestionIndex === currentSection.questions.length - 1}
              className="flex items-center gap-1.5 text-xs"
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
