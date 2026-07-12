'use client';

import React from 'react';
import { useAssessmentStore } from '../store/useAssessmentStore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, Play, FileText, CheckCircle2 } from 'lucide-react';

export const SectionIntro: React.FC = () => {
  const sections = useAssessmentStore(state => state.sections);
  const currentSectionIndex = useAssessmentStore(state => state.currentSectionIndex);
  const confirmInstructions = useAssessmentStore(state => state.confirmInstructions);

  const section = sections[currentSectionIndex];

  // Helper to format seconds to minutes
  const formatMinutes = (seconds: number) => {
    const mins = seconds / 60;
    return `${mins} ${mins === 1 ? 'minute' : 'minutes'}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-6 font-sans">
      <Card className="w-full max-w-2xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md">
        
        <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 p-8">
          <div className="flex items-center justify-between">
            <span className="text-[10px] bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-semibold px-2 py-1 rounded uppercase tracking-wider">
              Section {currentSectionIndex + 1} of {sections.length}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold font-mono">
              <Clock className="h-4 w-4" /> {formatMinutes(section.timeLimit)}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold mt-4 text-zinc-900 dark:text-zinc-50">
            {section.title}
          </CardTitle>
          <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            {section.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8 pt-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <FileText className="h-4 w-4" /> Instructions & Guidelines
          </div>
          
          <div className="space-y-3.5">
            {section.instructions.map((inst, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-zinc-800 dark:text-zinc-200 mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {inst}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-150 dark:border-zinc-800">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
              <strong>Please Note:</strong> Once you click the "Begin Section" button, the timer for this section will start. If the timer expires before you click submit, your answers will be automatically submitted and you will be moved to the next section.
            </p>
          </div>
        </CardContent>

        <CardFooter className="bg-zinc-50/50 dark:bg-zinc-900/10 border-t border-zinc-100 dark:border-zinc-800 p-8 pt-8 flex justify-end">
          <Button
            onClick={confirmInstructions}
            className="flex items-center gap-2 font-medium text-sm px-6"
          >
            <Play className="h-4 w-4" /> Begin Section
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
};
