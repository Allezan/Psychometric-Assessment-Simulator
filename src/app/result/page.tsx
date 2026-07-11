'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/features/assessment/store/useAssessmentStore';
import { ResultsSummary } from '@/features/results/components/ResultsSummary';

export default function ResultPage() {
  const router = useRouter();
  const status = useAssessmentStore(state => state.status);

  useEffect(() => {
    // If someone lands here without finishing the exam, redirect them back to start
    if (status === 'landing' || status === 'instructions') {
      router.push('/');
    }
  }, [status, router]);

  // If testing is still active, prompt them or show loading/routing fallback
  if (status !== 'finished') {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-50 dark:bg-black font-sans text-xs text-zinc-400">
        <div className="flex flex-col items-center gap-2">
          <span className="animate-spin h-4 w-4 border-2 border-zinc-300 border-t-zinc-800 rounded-full dark:border-zinc-800 dark:border-t-zinc-200"></span>
          <span>Redirecting to Assessment Console...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <ResultsSummary />
    </div>
  );
}
