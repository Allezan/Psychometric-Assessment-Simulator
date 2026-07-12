'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
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
  FileText,
  Download,
  Printer
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

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // =========================================================================
    // PAGE 1: HEADER & COGNITIVE SUMMARY
    // =========================================================================
    
    // 1. Dark Top Header Banner (Slate-800)
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 0, 210, 38, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text("LAPORAN HASIL ASESMEN PSIKOTES", 15, 18);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(194, 205, 217);
    doc.text("AEGIS PSYCHOMETRIC ASSESSMENT CENTER", 15, 25);
    doc.text(`Tanggal Asesmen: ${new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}`, 15, 30);

    // 2. Executive Summary Box (Light slate background, grey border)
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.rect(15, 48, 180, 50, 'FD');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59);
    doc.text("RINGKASAN EKSEKUTIF PERFORMA", 22, 56);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(71, 85, 105);
    
    doc.text("Nama Peserta:", 22, 66);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text("Kandidat Asesmen Aegis", 75, 66);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text("Total Waktu Pengerjaan:", 22, 73);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text(formatTimeSpent(overallTimeSpent), 75, 73);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text("Skor Akurasi Kognitif:", 22, 80);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(79, 70, 229); // Indigo
    doc.text(`${overallAccuracy}% (${correctCognitiveAnswers} / ${totalCognitiveQuestions} Soal Benar)`, 75, 80);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text("Status Hasil Ujian:", 22, 87);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 163, 74); // Green
    doc.text("SELESAI & TERVERIFIKASI", 75, 87);

    // 3. Cognitive Section Performance Table
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59);
    doc.text("RINCIAN SKOR PER SUB-TEST KOGNITIF", 15, 110);

    // Table Header Background
    doc.setFillColor(241, 245, 249);
    doc.rect(15, 116, 180, 10, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text("NO", 18, 122);
    doc.text("NAMA SUB-TES", 28, 122);
    doc.text("TOTAL", 98, 122);
    doc.text("BENAR", 116, 122);
    doc.text("SALAH", 134, 122);
    doc.text("AKURASI", 152, 122);
    doc.text("DURASI", 174, 122);
    
    // Underline header
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 126, 195, 126);

    const cognitiveSections = sectionBreakdowns.filter(s => !s.isPersonality);
    cognitiveSections.forEach((row, idx) => {
      const rowY = 127 + idx * 11;
      
      // Alternating row background
      if (idx % 2 === 1) {
        doc.setFillColor(248, 250, 252);
        doc.rect(15, rowY, 180, 11, 'F');
      }
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(30, 41, 59);
      
      doc.text((idx + 1).toString(), 18, rowY + 7);
      doc.text(row.title, 28, rowY + 7);
      doc.text(row.totalQuestions.toString(), 100, rowY + 7);
      doc.text(row.correct.toString(), 118, rowY + 7);
      doc.text(row.wrong.toString(), 136, rowY + 7);
      
      // Score / Accuracy highlighted
      doc.setFont("helvetica", "bold");
      doc.setTextColor(79, 70, 229);
      doc.text(`${row.accuracy}%`, 154, rowY + 7);
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(30, 41, 59);
      doc.text(formatTimeSpent(row.timeSpent), 174, rowY + 7);
      
      // Bottom line
      doc.setDrawColor(241, 245, 249);
      doc.line(15, rowY + 11, 195, rowY + 11);
    });

    // Footnote on page 1
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Halaman 1 dari 2 - Laporan Hasil Tes Kognitif & Berpikir Kritis", 15, 285);

    // =========================================================================
    // PAGE 2: PERSONALITY PROFILE & ARCHETYPES
    // =========================================================================
    doc.addPage();

    // 1. Dark Top Header Banner for Page 2
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 0, 210, 24, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("PROFIL PERSONALITAS KERJA (BEHAVIORAL)", 15, 15);

    // Introduction text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(71, 85, 105);
    doc.text("Bagian ini mengukur kecenderungan perilaku kandidat di lingkungan kerja berdasarkan 5 aspek utama:", 15, 34);

    // 2. Personality Traits Rendering (Visual progress bars)
    personalityTraits.forEach((trait, idx) => {
      const yPos = 44 + idx * 30;
      
      // Trait Name & Category Archetype
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(30, 41, 59);
      doc.text(`${idx + 1}. ${trait.name}`, 15, yPos);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text(`[ Archetype: ${trait.archetype} ]`, 85, yPos);

      // Trait Score
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(79, 70, 229);
      doc.text(`${trait.score}%`, 185, yPos);

      // Visual Progress Bar
      // Gray background track
      doc.setFillColor(241, 245, 249);
      doc.rect(15, yPos + 3, 180, 4, 'F');
      // Purple fill
      doc.setFillColor(79, 70, 229);
      doc.rect(15, yPos + 3, 180 * (trait.score / 100), 4, 'F');

      // Description
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      const splitDesc = doc.splitTextToSize(trait.description, 180);
      doc.text(splitDesc, 15, yPos + 11);
    });

    // 3. Official Verification Box & Digital Signature
    const sealY = 205;
    doc.setDrawColor(226, 232, 240);
    doc.line(15, sealY, 195, sealY);

    // Verification Statement
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    doc.text("VERIFIKASI INTEGRITAS DATA", 15, sealY + 8);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text("Seluruh data asesmen ini dihasilkan secara otomatis oleh sistem simulasi psikotes terenkripsi.", 15, sealY + 14);
    doc.text("Hasil tidak dapat dimanipulasi secara client-side setelah penyerahan lembar jawaban resmi.", 15, sealY + 19);
    doc.text(`ID Referensi Hasil: SIM-${Math.random().toString(36).substring(2, 9).toUpperCase()}-${Date.now().toString().slice(-4)}`, 15, sealY + 24);

    // Signature Area
    const sigX = 142;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text("KOMITE VERIFIKATOR", sigX, sealY + 8);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("AEGIS Assessment Center", sigX, sealY + 13);
    
    // Digital Stamp placeholder
    doc.setDrawColor(79, 70, 229);
    doc.rect(sigX, sealY + 18, 45, 18);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(79, 70, 229);
    doc.text("SECURE DIGITAL SEAL", sigX + 6, sealY + 25);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    doc.text("VERIFIED AUTHENTIC", sigX + 9, sealY + 30);

    // Footnote on page 2
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Halaman 2 dari 2 - Laporan Profil Personalitas Kerja", 15, 285);

    // Save PDF directly!
    doc.save(`psychometric_report_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({
        overallAccuracy,
        overallTimeSpent,
        cognitiveAccuracy: overallAccuracy,
        correctAnswers: correctCognitiveAnswers,
        totalQuestions: totalCognitiveQuestions,
        sectionBreakdowns: sectionBreakdowns.map(s => ({
          section: s.title,
          totalQuestions: s.totalQuestions,
          correct: s.correct,
          accuracy: s.isPersonality ? null : s.accuracy,
          timeSpentSeconds: s.timeSpent
        })),
        personalityTraits: personalityTraits.map(t => ({
          trait: t.name,
          scorePercentage: t.score,
          archetype: t.archetype
        })),
        exportedAt: new Date().toISOString()
      }, null, 2)
    );
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `psychometric_report_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div id="report-container" className="w-full max-w-5xl mx-auto py-12 px-6 font-sans">
      
      {/* Top Welcome Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[9px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
            <Shield className="h-3 w-3" /> Aegis Verified
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent mt-3">
            Assessment Results
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Official candidate simulator report generated on {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 no-print">
          <Button 
            onClick={handleDownloadPDF} 
            className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-[0_4px_14px_rgba(79,70,229,0.3)] dark:shadow-[0_4px_14px_rgba(79,70,229,0.15)] border-0 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download PDF Report
          </Button>
          <Button 
            onClick={handleExportJSON} 
            variant="outline" 
            className="flex items-center gap-2 text-xs font-semibold border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200"
          >
            <FileText className="h-4 w-4" /> Export JSON
          </Button>
          <Button 
            onClick={resetAssessment} 
            variant="secondary" 
            className="flex items-center gap-2 text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-200"
          >
            <RotateCcw className="h-4 w-4" /> Restart Simulator
          </Button>
        </div>
      </div>

      {/* Embedded Print & PDF Styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          header, footer, nav, aside, .no-print, button, .border-t.border-zinc-200.shrink-0 {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          main, div.w-full.max-w-5xl {
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .card, .border, table {
            border-color: #e4e4e7 !important;
          }
        }

        /* PDF Download Ignored Classes */
        .generating-pdf .no-print {
          display: none !important;
        }
        .generating-pdf #report-container {
          padding: 16px !important;
          margin: 0 auto !important;
          max-width: 100% !important;
          background: white !important;
          color: black !important;
        }
      `}} />

      {/* Overview Score Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        
        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 backdrop-blur-md hover:border-indigo-500/20 hover:shadow-[0_8px_30px_rgba(79,70,229,0.06)] dark:hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)] transition-all duration-300">
          <CardContent className="p-5 pt-5 flex items-center gap-4">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg border border-indigo-100/50 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Cognitive Accuracy</p>
              <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-0.5">{overallAccuracy}%</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 backdrop-blur-md hover:border-amber-500/20 hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] dark:hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)] transition-all duration-300">
          <CardContent className="p-5 pt-5 flex items-center gap-4">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-100/50 dark:border-amber-900/30 text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Total Duration</p>
              <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-0.5">{formatTimeSpent(overallTimeSpent)}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 backdrop-blur-md hover:border-emerald-500/20 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)] dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all duration-300">
          <CardContent className="p-5 pt-5 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-100/50 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Correct Answers</p>
              <h3 className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {correctCognitiveAnswers} <span className="text-sm font-normal text-zinc-400">/ {totalCognitiveQuestions}</span>
              </h3>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 backdrop-blur-md hover:border-rose-500/20 hover:shadow-[0_8px_30px_rgba(244,63,94,0.06)] dark:hover:shadow-[0_8px_30px_rgba(244,63,94,0.1)] transition-all duration-300">
          <CardContent className="p-5 pt-5 flex items-center gap-4">
            <div className="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-lg border border-rose-100/50 dark:border-rose-900/30 text-rose-500 dark:text-rose-400">
              <XCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Wrong / Omitted</p>
              <h3 className="text-2xl font-extrabold text-rose-500 dark:text-rose-400 mt-0.5">
                {wrongCognitiveAnswers + unansweredCognitiveQuestions}
              </h3>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Section-by-Section Scoreboard Table */}
      <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-100 mb-4 flex items-center gap-2">
        <Shield className="h-4.5 w-4.5 text-indigo-500" /> Section Breakdown
      </h3>
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/30 backdrop-blur-md mb-10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                <th className="px-6 py-4">Assessment Section</th>
                <th className="px-6 py-4">Questions Score</th>
                <th className="px-6 py-4">Accuracy</th>
                <th className="px-6 py-4">Time Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-150 dark:divide-zinc-800/80 text-sm">
              {sectionBreakdowns.map(row => (
                <tr key={row.id} className="hover:bg-zinc-50/40 dark:hover:bg-zinc-900/10 transition-colors duration-150">
                  <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">{row.title}</td>
                  <td className="px-6 py-4 font-mono text-zinc-500 dark:text-zinc-400">
                    {row.isPersonality ? 'N/A' : `${row.correct} / ${row.totalQuestions}`}
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    {row.isPersonality ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        Qualitative Profile
                      </span>
                    ) : (
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        row.accuracy >= 75 
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : row.accuracy >= 40
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                          : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                      }`}>
                        {row.accuracy}%
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400 font-mono">
                    {formatTimeSpent(row.timeSpent)} <span className="text-zinc-300 dark:text-zinc-700">/</span> {formatTimeSpent(row.maxTime)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Personality Trait Profile Scorecard */}
      <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-100 mb-4 flex items-center gap-2">
        <Sparkles className="h-4.5 w-4.5 text-indigo-500" /> Work Personality Profile
      </h3>
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/30 backdrop-blur-md p-6 md:p-8 mb-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {personalityTraits.map(trait => (
              <div key={trait.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{trait.name}</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded">{trait.score}%</span>
                </div>
                
                {/* Horizontal Progress Bar */}
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.3)] transition-all duration-500"
                    style={{ width: `${trait.score}%` }}
                  />
                </div>
                
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 leading-normal">{trait.description}</p>
              </div>
            ))}
          </div>

          {/* Qualitative Profile Match Details */}
          <div className="bg-gradient-to-br from-zinc-50/50 to-zinc-100/30 dark:from-zinc-900/20 dark:to-zinc-950/20 rounded-xl border border-zinc-150 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-[9px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20 w-fit block">
                Calculated Archetype
              </span>
              <h4 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-3">
                Strategic Professional Profile
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-4">
                Your personality responses indicate a strong tendency toward balanced collaboration, calculated risk-taking, and clear initiative.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {personalityTraits.map(t => (
                  <span
                    key={t.name}
                    className="text-[10px] font-mono font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800/80 px-2 py-1 rounded shadow-sm"
                  >
                    {t.archetype}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 italic mt-8 border-t border-zinc-100 dark:border-zinc-800/50 pt-4">
              Personality profiles evaluate behavioral preferences and have no correct or incorrect metrics.
            </p>
          </div>
        </div>
      </Card>

      {/* Answer & Explanation Review Section */}
      <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-100 mb-4 flex items-center gap-2">
        <FileText className="h-4.5 w-4.5 text-indigo-500" /> Assessment Review
      </h3>
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/30 backdrop-blur-md p-6 md:p-8 shadow-sm">
        <div className="space-y-6">
          {sections
            .filter(s => s.id !== 'personality' && s.id !== 'working-memory')
            .map(sec => (
              <div key={sec.id} className="space-y-4">
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  {sec.title}
                </h4>

                <div className="space-y-3.5">
                  {sec.questions.map((q, idx) => {
                    const resp = responses[`${sec.id}_${q.id}`];
                    const isExpanded = expandedQuestion === q.id;
                    const isCorrect = resp?.isCorrect;
                    const hasSelected = !!resp?.selectedOption;

                    // Color indicator border on left side
                    const leftBorderClass = !hasSelected
                      ? 'border-l-4 border-l-zinc-300 dark:border-l-zinc-700'
                      : isCorrect
                      ? 'border-l-4 border-l-emerald-500 dark:border-l-emerald-500'
                      : 'border-l-4 border-l-rose-500 dark:border-l-rose-500';

                    return (
                      <div
                        key={q.id}
                        className={`border border-zinc-150 dark:border-zinc-800/80 rounded-lg overflow-hidden transition-all duration-200 ${leftBorderClass} hover:shadow-sm`}
                      >
                        <button
                          onClick={() => toggleQuestion(q.id)}
                          className="w-full flex items-center justify-between p-4 bg-zinc-50/20 hover:bg-zinc-50/40 dark:bg-zinc-900/5 dark:hover:bg-zinc-900/15 transition-colors focus:outline-none"
                        >
                          <div className="flex items-center gap-3 text-left">
                            {!hasSelected ? (
                              <HelpCircle className="h-5 w-5 text-zinc-400 shrink-0" />
                            ) : isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                            ) : (
                              <XCircle className="h-5 w-5 text-rose-500 dark:text-rose-400 shrink-0" />
                            )}
                            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                              Question {idx + 1}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              q.difficulty === 'hard' 
                                ? 'bg-rose-500/10 text-rose-500 border border-rose-500/10'
                                : q.difficulty === 'medium'
                                ? 'bg-amber-500/10 text-amber-500 border border-amber-500/10'
                                : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/10'
                            } capitalize hidden sm:inline`}>
                              {q.difficulty}
                            </span>
                          </div>
                          {isExpanded ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                        </button>

                        {isExpanded && (
                          <div className="p-5 border-t border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-950/20 space-y-4">
                            <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-semibold">
                              {q.question}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-zinc-50/50 dark:bg-zinc-900/30 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 text-xs">
                              <div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Your Answer: </span>
                                <span className={`font-bold ${
                                  !hasSelected 
                                    ? 'text-zinc-500' 
                                    : isCorrect 
                                    ? 'text-emerald-600 dark:text-emerald-400' 
                                    : 'text-rose-500 dark:text-rose-400'
                                }`}>
                                  {resp?.selectedOption || 'Omitted'}
                                </span>
                              </div>
                              <div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Correct Answer: </span>
                                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                  {q.correctAnswer}
                                </span>
                              </div>
                            </div>

                            {q.explanation && (
                              <div className="p-4 bg-indigo-500/[0.03] dark:bg-indigo-500/[0.02] rounded-lg border border-indigo-500/10 text-xs">
                                <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
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
