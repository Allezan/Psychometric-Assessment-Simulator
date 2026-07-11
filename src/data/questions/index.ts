import { Section, Question } from '@/features/assessment/types';
import bankSoalRaw from '../../../bank-soal.json';
import { figuralSvgs, figuralOptionSvgs } from './figural_svgs';

// Types for the raw JSON
interface RawContent {
  text: string;
  image_description: string | null;
}

interface RawOption {
  id: string;
  text: string;
}

interface RawQuestion {
  id: string;
  type: string;
  difficulty: string;
  estimated_time_seconds: number;
  content: RawContent;
  options: RawOption[];
  correct_answer: string;
  explanation: string;
  skills_tested: string[];
}

interface RawSection {
  name: string;
  category: string;
  duration_minutes: number;
  questions: RawQuestion[];
}

interface RawPersonalityStatement {
  id: string;
  type: string;
  statement: string;
  scale: number[];
  trait_measured: string;
  behavior_dimension: string;
}

interface RawBankSoal {
  assessment: {
    name: string;
    duration_minutes: number;
  };
  sections: RawSection[];
  personality_section: {
    name: string;
    duration_minutes: number;
    instructions: string[] | string;
    scale: string[];
    statements: RawPersonalityStatement[];
  };
}

const bankSoal = bankSoalRaw as unknown as RawBankSoal;

// Map the cognitive sections
const mappedCognitiveSections: Section[] = bankSoal.sections.map((sec): Section => {
  const slug = sec.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  let desc = 'Evaluasi kemampuan kognitif dan logika Anda.';
  let instructions: string[] = [];

  if (slug === 'logical-reasoning') {
    desc = 'Mengukur logika deduktif, pemecahan masalah deret, silogisme, dan analisis batasan.';
    instructions = [
      'Analisis premis atau petunjuk logika yang diberikan pada setiap soal.',
      'Tarik kesimpulan yang paling tepat dan tidak terbantahkan berdasarkan data.',
      'Soal berupa pilihan ganda dengan 4 opsi pilihan.'
    ];
  } else if (slug === 'numerical-reasoning') {
    desc = 'Mengukur akurasi matematika, interpretasi data grafik, kalkulasi persentase, dan perbandingan rasio.';
    instructions = [
      'Selesaikan persoalan perhitungan matematika, diskon, persentase, dan rasio kerja.',
      'Anda diperbolehkan menggunakan coretan kertas atau kalkulator.',
      'Pilih satu jawaban yang paling tepat dari pilihan ganda.'
    ];
  } else if (slug === 'verbal-reasoning') {
    desc = 'Menguji pemahaman analogi kata, relasi sinonim/antonim, dan penarikan kesimpulan kalimat.';
    instructions = [
      'Pilih kata atau pasangan kata yang memiliki hubungan analogi paling sesuai.',
      'Analisis teks pernyataan untuk menentukan kebenaran argumen secara logis.',
      'Pilih satu opsi jawaban yang paling tepat.'
    ];
  } else if (slug === 'abstract-figural-reasoning') {
    desc = 'Menguji pola spasial, rotasi bentuk, siklus pola gambar, dan transformasi visual.';
    instructions = [
      'Perhatikan baik-baik deskripsi visual gambar berurutan yang disediakan.',
      'Identifikasi aturan perubahan (rotasi arah, jumlah objek, tingkat pengarsiran).',
      'Pilih bentuk gambar selanjutnya yang melengkapi pola tersebut.'
    ];
  }

  const questions: Question[] = sec.questions.map((q): Question => {
    // Map correct answer ID to option text
    const corrOpt = q.options.find(opt => opt.id === q.correct_answer);
    const correctAnswerText = corrOpt ? corrOpt.text : q.correct_answer;

    // Convert image description to HTML block representation or load custom SVG drawing
    let figureHtml: string | undefined = undefined;
    if (figuralSvgs[q.id]) {
      figureHtml = figuralSvgs[q.id];
    } else if (q.content.image_description) {
      figureHtml = `<div class="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium flex flex-col gap-1.5">
        <span class="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">Deskripsi Gambar Soal:</span>
        <p class="italic">"${q.content.image_description}"</p>
      </div>`;
    }

    return {
      id: q.id,
      category: sec.name,
      difficulty: q.difficulty as any,
      question: q.content.text,
      options: q.options.map(opt => opt.text),
      correctAnswer: correctAnswerText,
      explanation: q.explanation,
      estimatedTime: q.estimated_time_seconds,
      figure: figureHtml,
      optionFigures: figuralOptionSvgs[q.id]
    };
  });

  return {
    id: slug,
    title: sec.name,
    description: desc,
    instructions,
    timeLimit: sec.duration_minutes * 60,
    questions
  };
});

// Map the Working Memory section (custom game)
const workingMemorySection: Section = {
  id: 'working-memory',
  title: 'Working Memory Recall',
  description: 'Menguji daya ingat jangka pendek (working memory) dan kapasitas retensi kognitif Anda.',
  timeLimit: 180, // 3 minutes
  instructions: [
    'Ini adalah tes kognitif interaktif.',
    'Anda akan melihat grid 3x3. Urutan blok akan menyala (flash) secara bergantian.',
    'Setelah urutan menyala selesai, klik blok-blok tersebut dengan urutan yang persis sama.',
    'Urutan akan dimulai dari yang pendek (3 langkah) dan bertambah panjang jika Anda berhasil.'
  ],
  questions: [
    {
      id: 'mem_1',
      category: 'Working Memory',
      difficulty: 'medium',
      question: 'Cognitive Sequence Recall: Anda akan disajikan sebuah grid 3x3. Sel-sel akan berkedip dalam urutan tertentu. Anda harus mereproduksi urutan sorotan sel yang tepat dengan mengkliknya secara berurutan.',
      options: ['Mulai Tes Memori']
    }
  ]
};

// Map the Personality section
const mappedPersonalitySection: Section = {
  id: 'personality',
  title: bankSoal.personality_section.name,
  description: 'Menganalisis gaya kerja, kecenderungan perilaku, integritas, dan potensi kepemimpinan Anda.',
  timeLimit: bankSoal.personality_section.duration_minutes * 60,
  instructions: Array.isArray(bankSoal.personality_section.instructions) 
    ? bankSoal.personality_section.instructions 
    : [bankSoal.personality_section.instructions],
  questions: bankSoal.personality_section.statements.map((stmt): Question => {
    return {
      id: stmt.id,
      category: 'Personality',
      difficulty: 'easy',
      question: stmt.statement,
      options: [
        'Sangat Tidak Setuju',
        'Tidak Setuju',
        'Netral',
        'Setuju',
        'Sangat Setuju'
      ],
      estimatedTime: 15,
      trait_measured: stmt.trait_measured,
      behavior_dimension: stmt.behavior_dimension
    };
  })
};

// Assemble the final array of sections
export const assessmentSections: Section[] = [
  ...mappedCognitiveSections,
  workingMemorySection,
  mappedPersonalitySection
];

export const getQuestionById = (sectionId: string, questionId: string) => {
  const section = assessmentSections.find(s => s.id === sectionId);
  return section?.questions.find(q => q.id === questionId);
};
export { bankSoal };
