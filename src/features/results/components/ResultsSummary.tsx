'use client';

import React, { useState } from 'react';
import { useAssessmentStore } from '@/features/assessment/store/useAssessmentStore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  Award,
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Shield,
  FileText
} from 'lucide-react';

export const ResultsSummary: React.FC = () => {
  const sections = useAssessmentStore(state => state.sections);
  const responses = useAssessmentStore(state => state.responses);
  const sectionTimeSpent = useAssessmentStore(state => state.sectionTimeSpent);
  const overallTimeSpent = useAssessmentStore(state => state.overallTimeSpent);
  const resetAssessment = useAssessmentStore(state => state.resetAssessment);

  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  // 1. Calculations
  let totalCognitiveQuestions = 0;
  let correctCognitiveAnswers = 0;
  let wrongCognitiveAnswers = 0;
  let unansweredCognitiveQuestions = 0;

  const sectionBreakdowns = sections.map(sec => {
    const isPersonality = sec.id === 'personality';
    const isMemory = sec.id === 'working-memory';
    const timeSpent = sectionTimeSpent[sec.id] || 0;

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    if (isPersonality) {
      // Personality has no right/wrong
      sec.questions.forEach(q => {
        const resp = responses[`${sec.id}_${q.id}`];
        if (!resp?.selectedOption) unanswered++;
      });
    } else if (isMemory) {
      // Memory test scores are stored as strings in responses
      const resp = responses[`${sec.id}_mem_1`];
      const opt = resp?.selectedOption || '';
      // Parse Level from output: e.g., "Completed level 4/5" or "Failed at Level 3"
      if (opt) {
        if (opt.includes('Completed level 5')) {
          correct = 5;
          wrong = 0;
        } else {
          const match = opt.match(/Level (\d+)/i);
          const lvl = match ? parseInt(match[1]) : 0;
          correct = lvl;
          wrong = 5 - lvl;
        }
      } else {
        unanswered = 5;
      }

      totalCognitiveQuestions += 5;
      correctCognitiveAnswers += correct;
      wrongCognitiveAnswers += wrong;
      unansweredCognitiveQuestions += unanswered;
    } else {
      sec.questions.forEach(q => {
        const resp = responses[`${sec.id}_${q.id}`];
        totalCognitiveQuestions++;

        if (!resp?.selectedOption) {
          unanswered++;
          unansweredCognitiveQuestions++;
        } else if (resp.isCorrect) {
          correct++;
          correctCognitiveAnswers++;
        } else {
          wrong++;
          wrongCognitiveAnswers++;
        }
      });
    }

    const totalQuestions = isMemory ? 5 : sec.questions.length;
    const accuracy = totalQuestions - unanswered > 0 ? Math.round((correct / (totalQuestions - unanswered)) * 100) : 0;

    return {
      id: sec.id,
      title: sec.title,
      totalQuestions,
      correct,
      wrong,
      unanswered,
      accuracy,
      timeSpent,
      maxTime: sec.timeLimit,
      isPersonality
    };
  });

  const overallAccuracy =
    totalCognitiveQuestions - unansweredCognitiveQuestions > 0
      ? Math.round((correctCognitiveAnswers / (totalCognitiveQuestions - unansweredCognitiveQuestions)) * 100)
      : 0;

  // 2. Personality Trait Scoring Mappings
  // Likert Option to numeric score
  const likertToScore = (option?: string): number => {
    switch (option) {
      case 'Sangat Setuju':
      case 'Strongly Agree': return 5;
      case 'Setuju':
      case 'Agree': return 4;
      case 'Netral':
      case 'Neutral': return 3;
      case 'Tidak Setuju':
      case 'Disagree': return 2;
      case 'Sangat Tidak Setuju':
      case 'Strongly Disagree': return 1;
      default: return 3; // default neutral
    }
  };

  const personalitySection = sections.find(s => s.id === 'personality');
  const traitsList = ['Work Discipline', 'Leadership Potential', 'Adaptability', 'Teamwork', 'Integrity'];
  
  const traitDisplayNames: Record<string, string> = {
    'Work Discipline': 'Disiplin Kerja & Detail',
    'Leadership Potential': 'Potensi Kepemimpinan',
    'Adaptability': 'Adaptabilitas & Resiliensi',
    'Teamwork': 'Kerjasama Tim & Empati',
    'Integrity': 'Integritas & Etika Kerja'
  };

  const traitDescriptions: Record<string, string> = {
    'Work Discipline': 'Mengukur perencanaan tugas, keteraturan (checklist), perhatian pada detail, dan tanggung jawab hasil kerja.',
    'Leadership Potential': 'Mengukur inisiatif kepemimpinan, pengambilan keputusan bisnis, kepemilikan (ownership), dan pemecahan jalan buntu.',
    'Adaptability': 'Mengukur fleksibilitas jam kerja, ketahanan terhadap kritik keras, ketenangan di bawah tekanan, dan kemudahan beradaptasi.',
    'Teamwork': 'Mengukur kolaborasi dengan tim, toleransi perbedaan pendapat, resolusi konflik langsung, dan kehangatan komunikasi.',
    'Integrity': 'Mengukur penolakan manipulasi laporan, komitmen transparansi, kepatuhan kebijakan, dan penolakan gratifikasi.'
  };

  const traitArchetypes: Record<string, string> = {
    'Work Discipline': 'Disciplined Specialist',
    'Leadership Potential': 'Strategic Influencer',
    'Adaptability': 'Flexible Problem Solver',
    'Teamwork': 'Collaborative Catalyst',
    'Integrity': 'Ethical Guardian'
  };

  const personalityTraits = traitsList.map(trait => {
    const traitQuestions = personalitySection?.questions.filter(q => q.trait_measured === trait) || [];
    let totalScore = 0;
    let answeredCount = 0;

    traitQuestions.forEach(q => {
      const resp = responses[`personality_${q.id}`];
      if (resp?.selectedOption) {
        totalScore += likertToScore(resp.selectedOption);
        answeredCount++;
      }
    });

    const average = answeredCount > 0 ? totalScore / answeredCount : 3;
    const scorePercentage = Math.round((average / 5) * 100);

    return {
      name: traitDisplayNames[trait] || trait,
      score: scorePercentage,
      description: traitDescriptions[trait] || '',
      archetype: traitArchetypes[trait] || ''
    };
  });

  // Formatting Time
  const formatTimeSpent = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const toggleQuestion = (qId: string) => {
    setExpandedQuestion(expandedQuestion === qId ? null : qId);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6 font-sans">
      
      {/* Top Welcome Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="text-[10px] bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold px-2 py-0.5 rounded uppercase tracking-widest">
            Aegis Verified
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-3">
            Assessment Results
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Official candidate simulator report generated on {new Date().toLocaleDateString()}
          </p>
        </div>

        <Button onClick={resetAssessment} variant="outline" className="flex items-center gap-2 text-xs">
          <RotateCcw className="h-4 w-4" /> Restart Simulator
        </Button>
      </div>

      {/* Overview Score Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Cognitive Accuracy</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-0.5">{overallAccuracy}%</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Total Duration</p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-0.5">{formatTimeSpent(overallTimeSpent)}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-100 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Correct Answers</p>
              <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {correctCognitiveAnswers} / {totalCognitiveQuestions}
              </h3>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-100 dark:border-zinc-800 text-red-500 dark:text-red-400">
              <XCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Wrong / Omitted</p>
              <h3 className="text-2xl font-bold text-red-500 dark:text-red-400 mt-0.5">
                {wrongCognitiveAnswers + unansweredCognitiveQuestions}
              </h3>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Section-by-Section Scoreboard Table */}
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5 text-zinc-700 dark:text-zinc-300" /> Section Breakdown
      </h3>
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mb-8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                <th className="px-6 py-4">Assessment Section</th>
                <th className="px-6 py-4">Questions Score</th>
                <th className="px-6 py-4">Accuracy</th>
                <th className="px-6 py-4">Time Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-150 dark:divide-zinc-800 text-sm">
              {sectionBreakdowns.map(row => (
                <tr key={row.id} className="hover:bg-zinc-50/30 dark:hover:bg-zinc-900/10">
                  <td className="px-6 py-4.5 font-medium text-zinc-900 dark:text-zinc-100">{row.title}</td>
                  <td className="px-6 py-4.5 font-mono text-zinc-600 dark:text-zinc-400">
                    {row.isPersonality ? 'N/A' : `${row.correct} / ${row.totalQuestions}`}
                  </td>
                  <td className="px-6 py-4.5 font-semibold">
                    {row.isPersonality ? (
                      <span className="text-xs text-zinc-400">Qualitative Profile</span>
                    ) : (
                      <span className={row.accuracy >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-700 dark:text-zinc-300'}>
                        {row.accuracy}%
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4.5 text-zinc-500 dark:text-zinc-400 font-mono">
                    {formatTimeSpent(row.timeSpent)} / {formatTimeSpent(row.maxTime)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Personality Trait Profile Scorecard */}
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-zinc-700 dark:text-zinc-300" /> Work Personality Profile
      </h3>
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {personalityTraits.map(trait => (
              <div key={trait.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{trait.name}</span>
                  <span className="font-mono font-semibold text-zinc-500">{trait.score}%</span>
                </div>
                
                {/* Horizontal Progress Bar */}
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-500"
                    style={{ width: `${trait.score}%` }}
                  />
                </div>
                
                <p className="text-xxs text-zinc-400 leading-normal">{trait.description}</p>
              </div>
            ))}
          </div>

          {/* Qualitative Profile Match Details */}
          <div className="bg-zinc-50/50 dark:bg-zinc-900/30 rounded-lg border border-zinc-150 dark:border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Calculated Archetype</span>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
                Strategic Professional Profile
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-4">
                Your personality responses indicate a strong tendency toward balanced collaboration and initiative.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {personalityTraits.map(t => (
                  <span
                    key={t.name}
                    className="text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded"
                  >
                    {t.archetype}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-zinc-400 italic mt-6 border-t border-zinc-100 dark:border-zinc-800 pt-4">
              Personality profiles evaluate work preferences and have no right or wrong metrics.
            </p>
          </div>
        </div>
      </Card>

      {/* Answer & Explanation Review Section */}
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-zinc-700 dark:text-zinc-300" /> Assessment Review
      </h3>
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8">
        <div className="space-y-4">
          {sections
            .filter(s => s.id !== 'personality' && s.id !== 'working-memory')
            .map(sec => (
              <div key={sec.id} className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  {sec.title}
                </h4>

                <div className="space-y-3">
                  {sec.questions.map((q, idx) => {
                    const resp = responses[`${sec.id}_${q.id}`];
                    const isExpanded = expandedQuestion === q.id;
                    const isCorrect = resp?.isCorrect;

                    return (
                      <div
                        key={q.id}
                        className="border border-zinc-150 dark:border-zinc-800 rounded-lg overflow-hidden transition-all duration-150"
                      >
                        <button
                          onClick={() => toggleQuestion(q.id)}
                          className="w-full flex items-center justify-between p-4 bg-zinc-50/50 hover:bg-zinc-50 dark:bg-zinc-900/10 dark:hover:bg-zinc-900/35 transition-colors focus:outline-none"
                        >
                          <div className="flex items-center gap-3 text-left">
                            {resp?.selectedOption ? (
                              isCorrect ? (
                                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-500 dark:text-red-400 shrink-0" />
                              )
                            ) : (
                              <HelpCircle className="h-5 w-5 text-zinc-400 shrink-0" />
                            )}
                            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                              Question {idx + 1}
                            </span>
                            <span className="text-xs font-mono text-zinc-400 capitalize hidden sm:inline">
                              ({q.difficulty})
                            </span>
                          </div>
                          {isExpanded ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                        </button>

                        {isExpanded && (
                          <div className="p-5 border-t border-zinc-150 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-4">
                            <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                              {q.question}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-zinc-400">Your Answer: </span>
                                <span className={`font-semibold ${isCorrect ? 'text-emerald-600' : 'text-red-500'}`}>
                                  {resp?.selectedOption || 'Omitted'}
                                </span>
                              </div>
                              <div>
                                <span className="text-zinc-400">Correct Answer: </span>
                                <span className="font-semibold text-emerald-600">
                                  {q.correctAnswer}
                                </span>
                              </div>
                            </div>

                            {q.explanation && (
                              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 rounded border border-zinc-100 dark:border-zinc-800 text-xs">
                                <span className="font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-1">
                                  Explanation:
                                </span>
                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                  {q.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
};
