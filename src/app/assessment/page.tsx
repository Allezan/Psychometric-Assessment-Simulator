'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/features/assessment/store/useAssessmentStore';
import { SectionIntro } from '@/features/assessment/components/SectionIntro';
import { AssessmentLayout } from '@/features/assessment/components/AssessmentLayout';
import { useHasHydrated } from '@/features/assessment/hooks/useHasHydrated';

export default function AssessmentPage() {
  const router = useRouter();
  const hasHydrated = useHasHydrated();
  const status = useAssessmentStore(state => state.status);
  const startAssessment = useAssessmentStore(state => state.startAssessment);

  useEffect(() => {
    // If user lands directly on this route without starting, initialize it
    if (hasHydrated && status === 'landing') {
      startAssessment();
    }
  }, [status, startAssessment, hasHydrated]);

  useEffect(() => {
    // If exam is completed, route to the results dashboard
    if (status === 'finished') {
      router.push('/result');
    }
  }, [status, router]);

  // Prevent browser back button and tab close/refresh warnings during assessment
  useEffect(() => {
    if (status !== 'testing') return;

    // 1. Prevent back navigation (popstate)
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
      alert('Peringatan: Jangan menekan tombol "Back" browser selama pengerjaan tes! Gunakan panel indeks soal di sebelah kiri untuk navigasi.');
    };

    // 2. Warn on close/reload (beforeunload)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = 'Apakah Anda yakin ingin keluar dari tes? Progress Anda mungkin hilang jika halaman ditutup.';
      return e.returnValue;
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [status]);

  // Loading/hydration fallback
  if (!hasHydrated) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-50 dark:bg-black font-sans text-xs text-zinc-400">
        <div className="flex flex-col items-center gap-2">
          <span className="animate-spin h-4 w-4 border-2 border-zinc-300 border-t-zinc-800 rounded-full dark:border-zinc-800 dark:border-t-zinc-200"></span>
          <span>Loading Assessment Console...</span>
        </div>
      </div>
    );
  }

  // Dispatch layouts based on active stage
  if (status === 'instructions') {
    return <SectionIntro />;
  }

  if (status === 'testing') {
    return <AssessmentLayout />;
  }

  // Loading fallback
  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-50 dark:bg-black font-sans text-xs text-zinc-400">
      <div className="flex flex-col items-center gap-2">
        <span className="animate-spin h-4 w-4 border-2 border-zinc-300 border-t-zinc-800 rounded-full dark:border-zinc-800 dark:border-t-zinc-200"></span>
        <span>Initializing Assessment Console...</span>
      </div>
    </div>
  );
}
