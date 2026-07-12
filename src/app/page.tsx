'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/features/assessment/store/useAssessmentStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Compass,
  ArrowRight,
  TrendingUp,
  Brain,
  ShieldAlert,
  Zap,
  Users2
} from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [packetId, setPacketId] = React.useState<'packet_1' | 'packet_2' | 'packet_3'>('packet_1');
  const startAssessment = useAssessmentStore(state => state.startAssessment);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      startAssessment(packetId);
      router.push('/assessment');
    }, 1000);
  };

  const featureHighlights = [
    {
      icon: TrendingUp,
      title: 'Quantitative Analysis',
      desc: 'Interpret charts, solve financial word problems, and analyze margins under timed constraints.'
    },
    {
      icon: Compass,
      title: 'Verbal & Deductive Logic',
      desc: 'Evaluate reading comprehension passages and deduce conclusions from complex premises.'
    },
    {
      icon: Zap,
      title: 'Inductive Patterns',
      desc: 'Identify transformations, rotations, and abstract logical sequences in visual puzzles.'
    },
    {
      icon: Brain,
      title: 'Working Memory Recall',
      desc: 'Interactive cognitive sequence challenges designed to measure retention capacity.'
    },
    {
      icon: Users2,
      title: 'Work Personality Profiling',
      desc: 'Explore your typical behavioral patterns and leadership dynamics in corporate environments.'
    },
    {
      icon: ShieldAlert,
      title: 'Section-by-Section Timers',
      desc: 'Real countdowns with automatic submission simulating professional Pearson VUE consoles.'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 flex flex-col justify-between font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      {/* Top Navigation */}
      <header className="max-w-5xl w-full mx-auto px-6 h-16 flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-tight bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-2 py-1 rounded">
            AEGIS
          </span>
          <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Simulator
          </span>
        </div>
        <div className="text-xxs font-mono text-zinc-400">
          v1.0.0
        </div>
      </header>

      {/* Main Hero Container */}
      <main className="max-w-4xl w-full mx-auto px-6 py-16 md:py-24 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Main Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800 dark:bg-zinc-100 animate-pulse"></span>
          <span className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 tracking-wide uppercase">
            Professional Practice Environment
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-2xl leading-tight">
          Aptitude & Cognitive Assessment Console
        </h1>
        
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-6 max-w-xl leading-relaxed">
          Prepare for modern corporate recruitment testing. Project Aegis simulates realistic numerical, verbal, spatial, memory, and personality assessments inside a clean, high-performance console.
        </p>

        {/* Packet Selector */}
        <div className="mt-10 max-w-3xl w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setPacketId('packet_1')}
            className={`flex flex-col items-start text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer focus:outline-none ${
              packetId === 'packet_1'
                ? 'border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900/50 text-zinc-950 dark:text-zinc-50 shadow-sm ring-1 ring-zinc-900 dark:ring-zinc-100'
                : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/50 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Paket Soal 1</span>
              {packetId === 'packet_1' && <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-50"></span>}
            </div>
            <h4 className="text-sm font-bold mt-2">ASTRA Cognitive & Personality (ID)</h4>
            <p className="text-xxs leading-relaxed mt-1 text-zinc-400 dark:text-zinc-500">
              6 Bagian ujian termasuk Deret Gambar, Memory Game, & 100 Soal Kepribadian Indonesia.
            </p>
          </button>

          <button
            onClick={() => setPacketId('packet_2')}
            className={`flex flex-col items-start text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer focus:outline-none ${
              packetId === 'packet_2'
                ? 'border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900/50 text-zinc-950 dark:text-zinc-50 shadow-sm ring-1 ring-zinc-900 dark:ring-zinc-100'
                : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/50 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Paket Soal 2</span>
              {packetId === 'packet_2' && <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-50"></span>}
            </div>
            <h4 className="text-sm font-bold mt-2">Corporate Psychometric (ID)</h4>
            <p className="text-xxs leading-relaxed mt-1 text-zinc-400 dark:text-zinc-500">
              5 Bagian ujian kognitif komprehensif & 100 Soal Evaluasi Perilaku Kerja (Bahasa Indonesia).
            </p>
          </button>

          <button
            onClick={() => setPacketId('packet_3')}
            className={`flex flex-col items-start text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer focus:outline-none ${
              packetId === 'packet_3'
                ? 'border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900/50 text-zinc-950 dark:text-zinc-50 shadow-sm ring-1 ring-zinc-900 dark:ring-zinc-100'
                : 'border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/50 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Paket Soal 3</span>
              {packetId === 'packet_3' && <span className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-zinc-50"></span>}
            </div>
            <h4 className="text-sm font-bold mt-2">Full Psychometric Suite V3 (ID)</h4>
            <p className="text-xxs leading-relaxed mt-1 text-zinc-400 dark:text-zinc-500">
              8 Seksi lengkap: Bacaan, Kuantitatif, Deduktif, Induktif, Visualisasi, Ketelitian, Memori & 70 Kepribadian.
            </p>
          </button>
        </div>

        {/* Start Button */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleStart}
            disabled={isLoading}
            size="lg"
            className="flex items-center gap-2 font-medium text-sm rounded-md px-8 shadow-sm hover:scale-[1.01] transition-transform"
          >
            {isLoading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full dark:border-zinc-900 dark:border-t-transparent mr-2"></span>
                Initializing Sandbox...
              </>
            ) : (
              <>
                Start Practice Assessment <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-20 text-left">
          {featureHighlights.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <Card
                key={idx}
                className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-md w-fit text-zinc-900 dark:text-zinc-100 mb-4">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                    {feat.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Clean Corporate Footer */}
      <footer className="max-w-5xl w-full mx-auto px-6 py-8 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xxs text-zinc-400">
        <div>
          © {new Date().getFullYear()} Project Aegis. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span>Apple HIG Compliant</span>
          <span>•</span>
          <span>Strict Offline Client Sandbox</span>
        </div>
      </footer>

    </div>
  );
}
