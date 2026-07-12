'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InteractiveMemory } from './InteractiveMemory';
import { Flag, FileText, Play, Lock, CheckCircle2, RefreshCw, Eye } from 'lucide-react';

interface QuestionDisplayProps {
  question: Question;
  sectionId: string;
  selectedOption?: string;
  flagged?: boolean;
  onSelectOption: (option: string) => void;
  onToggleFlag: () => void;
}

interface ParsedMemoryQuestion {
  duration: number;
  intro: string;
  targetText: string;
  recallQuestion: string;
}

// Helper to parse working memory questions
function parseMemoryQuestion(text: string): ParsedMemoryQuestion {
  const durationMatch = text.match(/selama\s+(\d+)\s+detik/i);
  const duration = durationMatch ? parseInt(durationMatch[1], 10) : 5;

  const colonIndex = text.indexOf(':');
  if (colonIndex === -1) {
    return { duration, intro: 'Hafalkan data berikut:', targetText: '', recallQuestion: text };
  }

  const intro = text.substring(0, colonIndex).trim() + ':';
  const rest = text.substring(colonIndex + 1).trim();

  // Look for dot separator if not a "lalu jawab:" visual prompt
  const dotIndex = rest.indexOf('.');
  if (dotIndex !== -1 && !text.includes('lalu jawab:')) {
    const targetText = rest.substring(0, dotIndex).trim();
    const recallQuestion = rest.substring(dotIndex + 1).trim();
    return { duration, intro, targetText, recallQuestion };
  } else {
    return { duration, intro, targetText: '', recallQuestion: rest };
  }
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  sectionId,
  selectedOption,
  flagged = false,
  onSelectOption,
  onToggleFlag
}) => {
  const [memorizeState, setMemorizeState] = useState<'idle' | 'memorizing' | 'recalled'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize memory game state when question changes
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (selectedOption) {
      setMemorizeState('recalled');
    } else {
      setMemorizeState('idle');
    }
  }, [question.id, selectedOption]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startMemorizing = (duration: number) => {
    setMemorizeState('memorizing');
    setTimeLeft(duration);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          timerRef.current = null;
          setMemorizeState('recalled');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 1. Working Memory (Interactive Simon Game for Packet 1 & 2)
  if (sectionId === 'working-memory') {
    return (
      <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            {question.question}
          </p>
        </div>
        <InteractiveMemory
          sectionId={sectionId}
          questionId={question.id}
          onComplete={onSelectOption}
          savedAnswer={selectedOption}
        />
      </div>
    );
  }

  // 1b. Working Memory (Timed Memorize-then-Recall for Packet 3)
  if (sectionId === 'memori-kerja' || question.id.startsWith('WM')) {
    const { duration, intro, targetText, recallQuestion } = parseMemoryQuestion(question.question);

    return (
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
            Asesmen Memori Kerja
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant={flagged ? 'default' : 'outline'}
              size="sm"
              onClick={onToggleFlag}
              className="flex items-center gap-1.5 text-xs h-8"
            >
              <Flag className={`h-3.5 w-3.5 ${flagged ? 'fill-current' : ''}`} />
              {flagged ? 'Flagged' : 'Flag'}
            </Button>
          </div>
        </div>

        {/* --- STATE: IDLE (Start Memorization Button) --- */}
        {memorizeState === 'idle' && (
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 text-center shadow-md">
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                <Play className="h-6 w-6 ml-0.5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Siap Hafalkan Target?</h4>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                  Anda memiliki waktu <span className="font-semibold text-zinc-800 dark:text-zinc-200">{duration} detik</span> untuk menghafal data. Soal dan pilihan jawaban disembunyikan sampai waktu habis.
                </p>
              </div>
              <Button onClick={() => startMemorizing(duration)} className="mt-2 cursor-pointer flex items-center gap-2 h-9 px-4 text-xs font-medium">
                <Eye className="h-3.5 w-3.5" /> Tampilkan & Mulai
              </Button>
            </CardContent>
          </Card>
        )}

        {/* --- STATE: MEMORIZING (Timer counting down + show target) --- */}
        {memorizeState === 'memorizing' && (
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 shadow-md">
            <CardContent className="flex flex-col gap-6 p-0">
              <div className="flex justify-between items-center text-xs font-medium text-zinc-500">
                <span>{intro}</span>
                <span className="font-mono text-zinc-800 dark:text-zinc-200 font-bold bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded">
                  {timeLeft}s Tersisa
                </span>
              </div>

              {/* Display Target (Text or SVG Figure) */}
              {targetText ? (
                <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-850 rounded-lg text-center font-mono text-xl md:text-2xl font-bold tracking-wider text-zinc-900 dark:text-zinc-50 shadow-inner">
                  {targetText}
                </div>
              ) : (
                question.figure && (
                  <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-6 flex justify-center items-center rounded-lg shadow-inner">
                    <div
                      className="w-full flex justify-center"
                      dangerouslySetInnerHTML={{ __html: question.figure }}
                    />
                  </div>
                )
              )}

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-1000 ease-linear"
                  style={{ width: `${(timeLeft / duration) * 100}%` }}
                />
              </div>
              
              <p className="text-xxs text-zinc-400 text-center uppercase tracking-wider font-semibold">
                Jangan mencatat, andalkan memori Anda!
              </p>
            </CardContent>
          </Card>
        )}

        {/* --- STATE: RECALLED (Show Question and Options) --- */}
        {memorizeState === 'recalled' && (
          <div className="flex flex-col gap-6">
            {/* Target Hidden Badge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-150 dark:border-zinc-800 rounded-lg text-xxs font-semibold uppercase tracking-wider text-zinc-500">
              <Lock className="h-3.5 w-3.5 text-zinc-400" />
              <span>Target Telah Disembunyikan</span>
            </div>

            {/* Question Text */}
            <h4 className="text-base md:text-lg font-medium text-zinc-800 dark:text-zinc-100 leading-relaxed">
              {recallQuestion}
            </h4>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {question.options?.map((option, index) => {
                const isSelected = selectedOption === option;
                const letter = String.fromCharCode(65 + index);

                return (
                  <button
                    key={option}
                    onClick={() => onSelectOption(option)}
                    className={`w-full flex items-center gap-4 text-left p-3 md:p-4 rounded-lg border text-sm transition-all duration-150 focus:outline-none cursor-pointer ${
                      isSelected
                        ? 'border-zinc-900 bg-zinc-50 text-zinc-950 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-50 font-medium'
                        : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs border transition-colors ${
                        isSelected
                          ? 'bg-zinc-900 border-zinc-950 text-white dark:bg-zinc-50 dark:border-zinc-100 dark:text-zinc-900 font-semibold'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800'
                      }`}
                    >
                      {letter}
                    </div>
                    <span className="leading-snug">{option}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Retry Button to re-memorize (only allowed before answering) */}
            {!selectedOption && (
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => startMemorizing(duration)}
                  className="text-xxs text-zinc-400 hover:text-zinc-600 flex items-center gap-1 h-7"
                >
                  <RefreshCw className="h-3 w-3" /> Ulangi Hafalan
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // 2. Personality Likert-Scale Layout
  if (sectionId === 'personality') {
    const likertOptions = question.options || [
      'Strongly Disagree',
      'Disagree',
      'Neutral',
      'Agree',
      'Strongly Agree'
    ];

    return (
      <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto py-8">
        <div className="text-center">
          <h4 className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-100">
            "{question.question}"
          </h4>
          <p className="text-xs text-zinc-400 mt-2">
            Select the rating that matches your reaction to this statement.
          </p>
        </div>

        {/* Likert Row */}
        <div className="grid grid-cols-5 gap-2 md:gap-4 mt-4">
          {likertOptions.map((option, idx) => {
            const isSelected = selectedOption === option;
            return (
              <button
                key={option}
                onClick={() => onSelectOption(option)}
                className={`flex flex-col items-center gap-3 p-4 rounded-lg border transition-all duration-200 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium'
                    : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {/* Node circle */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100'
                      : 'border-zinc-300 dark:border-zinc-700'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-zinc-900" />}
                </div>
                <span className="text-xxs md:text-xs text-center font-medium leading-tight">
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. Verbal Reasoning (Reading Comprehension Side-by-Side)
  if (sectionId === 'verbal' && question.passage) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full min-h-[400px]">
        {/* Left Side: Passage */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2 mb-3 text-zinc-500 font-semibold text-xs uppercase tracking-wider">
            <FileText className="h-4 w-4" /> Reading Passage
          </div>
          <Card className="flex-1 border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-y-auto max-h-[350px] lg:max-h-[500px]">
            <CardContent className="p-6 pt-6">
              <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line font-serif">
                {question.passage}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Question & Options */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                Question Statement
              </span>
              <Button
                variant={flagged ? 'default' : 'outline'}
                size="sm"
                onClick={onToggleFlag}
                className="flex items-center gap-1 text-xs"
              >
                <Flag className={`h-3 w.5 h-3.5 ${flagged ? 'fill-white stroke-white' : ''}`} />
                {flagged ? 'Flagged' : 'Flag'}
              </Button>
            </div>
            
            <h4 className="text-base md:text-lg font-medium text-zinc-800 dark:text-zinc-100 leading-relaxed mb-6">
              {question.question}
            </h4>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {question.options?.map((option) => {
                const isSelected = selectedOption === option;
                return (
                  <button
                    key={option}
                    onClick={() => onSelectOption(option)}
                    className={`w-full text-left p-4 rounded-lg border text-sm transition-all duration-150 focus:outline-none cursor-pointer ${
                      isSelected
                        ? 'border-zinc-900 bg-zinc-50 font-medium text-zinc-950 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-50'
                        : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Standard Multiple Choice + Inductive SVG Figure
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
          Problem Question
        </span>
        <Button
          variant={flagged ? 'default' : 'outline'}
          size="sm"
          onClick={onToggleFlag}
          className="flex items-center gap-1.5 text-xs"
        >
          <Flag className={`h-3.5 w-3.5 ${flagged ? 'fill-current' : ''}`} />
          {flagged ? 'Flagged' : 'Flag for Review'}
        </Button>
      </div>

      <h4 className="text-base md:text-lg font-medium text-zinc-800 dark:text-zinc-100 leading-relaxed">
        {question.question}
      </h4>

      {/* Optional SVG Figure Render */}
      {question.figure && (
        <Card className="border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-6 flex justify-center items-center rounded-lg">
          <div
            className="w-full flex justify-center"
            dangerouslySetInnerHTML={{ __html: question.figure }}
          />
        </Card>
      )}

      {/* Multiple Choice Options */}
      <div className="flex flex-col gap-3 mt-4">
        {question.options?.map((option, index) => {
          const isSelected = selectedOption === option;
          const letter = String.fromCharCode(65 + index); // A, B, C, D...
          const hasOptionSvg = question.optionFigures && question.optionFigures[index];

          return (
            <button
              key={option}
              onClick={() => onSelectOption(option)}
              className={`w-full flex items-center gap-4 text-left p-3 md:p-4 rounded-lg border text-sm transition-all duration-150 focus:outline-none cursor-pointer ${
                isSelected
                  ? 'border-zinc-900 bg-zinc-50 text-zinc-950 dark:border-zinc-100 dark:bg-zinc-900 dark:text-zinc-50 font-medium'
                  : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs border transition-colors ${
                  isSelected
                    ? 'bg-zinc-900 border-zinc-950 text-white dark:bg-zinc-50 dark:border-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800'
                }`}
              >
                {letter}
              </div>
              
              <div className="flex-1 flex items-center justify-between gap-4">
                {hasOptionSvg ? (
                  <div className="flex items-center gap-4">
                    <div 
                      className="bg-white dark:bg-zinc-950 p-1.5 rounded border border-zinc-100 dark:border-zinc-800 inline-block shadow-sm"
                      dangerouslySetInnerHTML={{ __html: question.optionFigures![index] }}
                    />
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 italic">({option})</span>
                  </div>
                ) : (
                  <span className="leading-snug">{option}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
