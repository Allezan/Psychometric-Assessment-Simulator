export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  category: string;
  difficulty: Difficulty;
  question: string;
  options?: string[]; // Standard options for MCQ
  correctAnswer?: string; // Correct option (or specific key) - omitted for Personality
  explanation?: string; // Explanation of the answer
  estimatedTime?: number; // In seconds
  passage?: string; // Optional context passage (e.g., for Verbal Reasoning)
  figure?: string; // Optional SVG code or figure name (e.g., for Inductive/Visualization)
  optionFigures?: string[]; // Optional inline SVG codes for choices
  trait_measured?: string;
  behavior_dimension?: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  timeLimit: number; // In seconds
  questions: Question[];
}

export interface UserResponse {
  questionId: string;
  selectedOption?: string; // Standard option selected
  isCorrect?: boolean;
  timeSpent: number; // Time spent on this specific question in seconds
  flagged?: boolean; // If user flagged the question for review
}

export interface SectionResult {
  sectionId: string;
  sectionTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  accuracy: number; // 0 to 100
  timeSpent: number; // In seconds
  maxTime: number; // In seconds
  personalityScores?: Record<string, number>; // For personality section dimensions
}

export interface AssessmentState {
  status: 'landing' | 'instructions' | 'testing' | 'finished';
  selectedPacket: 'packet_1' | 'packet_2' | 'packet_3';
  sections: Section[];
  currentSectionIndex: number;
  currentQuestionIndex: number;
  responses: Record<string, UserResponse>; // Key format: `${sectionId}_${questionId}`
  sectionTimers: Record<string, number>; // Remaining time per section ID in seconds
  sectionTimeSpent: Record<string, number>; // Time spent per section in seconds
  overallTimeSpent: number; // Total time spent in seconds
  isTimerActive: boolean;

  // Actions
  startAssessment: (packetId?: 'packet_1' | 'packet_2' | 'packet_3') => void;
  confirmInstructions: () => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  selectOption: (sectionId: string, questionId: string, option: string) => void;
  toggleFlagQuestion: (sectionId: string, questionId: string) => void;
  tickTimer: () => void;
  submitSection: () => void;
  forceSubmitAssessment: () => void;
  resetAssessment: () => void;
}
