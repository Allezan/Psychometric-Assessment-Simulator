import { Section, Question } from '@/features/assessment/types';
import bankSoal1Raw from './bank-soal-1.json';
import bankSoal2Raw from './bank-soal-2.json';
import bankSoal3Raw from './bank-soal-3.json';
import { figuralSvgs, figuralOptionSvgs } from './figural_svgs';

// Types for the raw JSON (V1 / V2)
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
  personality_section?: {
    name: string;
    duration_minutes: number;
    instructions: string[] | string;
    scale: string[];
    statements: RawPersonalityStatement[];
  };
}

// Map the Working Memory section (custom game) — used by V1/V2
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

// ─── V3 section metadata map ─────────────────────────────────────────
const v3SectionMeta: Record<string, { desc: string; instructions: string[] }> = {
  'pemahaman-bacaan': {
    desc: 'Menguji pemahaman bacaan, identifikasi gagasan utama, inferensi, kosakata kontekstual, dan analisis kritis.',
    instructions: [
      'Baca setiap bacaan dengan cermat sebelum menjawab pertanyaan.',
      'Jawaban harus didasarkan pada isi bacaan, bukan pengetahuan umum.',
      'Pilih satu jawaban yang paling tepat dari 4 opsi.'
    ]
  },
  'penalaran-kuantitatif': {
    desc: 'Mengukur kemampuan aritmetika, deret angka, persentase, rasio, interpretasi tabel, dan interpretasi grafik.',
    instructions: [
      'Selesaikan persoalan perhitungan secara sistematis.',
      'Anda diperbolehkan menggunakan coretan kertas.',
      'Perhatikan satuan dan format angka dengan seksama.'
    ]
  },
  'penalaran-deduktif': {
    desc: 'Menguji silogisme, logika kondisional, evaluasi pernyataan, dan deduksi logis multi-langkah.',
    instructions: [
      'Analisis premis atau aturan yang diberikan pada setiap soal.',
      'Tarik kesimpulan yang pasti benar (bukan yang mungkin benar).',
      'Waspadai kekeliruan logika umum (affirming the consequent, dll.).'
    ]
  },
  'penalaran-induktif': {
    desc: 'Menguji penemuan pola, identifikasi aturan, analogi, dan penyelesaian urutan.',
    instructions: [
      'Cari pola atau aturan yang mendasari setiap urutan atau kelompok data.',
      'Verifikasi hipotesis Anda dengan mencoba menerapkannya pada semua data.',
      'Pilih jawaban yang paling konsisten dengan aturan yang ditemukan.'
    ]
  },
  'visualisasi': {
    desc: 'Menguji rotasi mental, pelipatan kubus, penalaran matriks, urutan gambar, dan transformasi bentuk.',
    instructions: [
      'Perhatikan deskripsi visual atau gambar yang disediakan.',
      'Bayangkan transformasi (rotasi, cermin, lipatan) secara mental.',
      'Pilih gambar atau jawaban yang paling sesuai dengan pola transformasi.'
    ]
  },
  'ketelitian-kecepatan-periksa': {
    desc: 'Mengukur kecepatan dan akurasi dalam mencocokkan simbol, membandingkan angka/huruf, dan mendeteksi kesalahan.',
    instructions: [
      'Kerjakan soal secepat mungkin tanpa mengorbankan akurasi.',
      'Bandingkan setiap pasangan data dengan teliti.',
      'Waktu sangat terbatas — prioritaskan kecepatan penyelesaian.'
    ]
  },
  'memori-kerja': {
    desc: 'Menguji rentang digit, recall urutan, recall pola, dan memori visual.',
    instructions: [
      'Perhatikan data yang ditampilkan dengan konsentrasi penuh.',
      'Coba ingat urutan, posisi, atau pola yang disajikan.',
      'Jawab pertanyaan recall setelah data disembunyikan.'
    ]
  }
};

// ─── Helper: compute section time from question estimates ─────────
function computeSectionTime(questions: any[]): number {
  const totalEstimated = questions.reduce((sum: number, q: any) => sum + (q.estimated_time_seconds || 45), 0);
  // Add 20% buffer, round to nearest 30s
  return Math.ceil((totalEstimated * 1.2) / 30) * 30;
}

// ─── V3 mapper ───────────────────────────────────────────────────────
function getSectionsForPacket3(): Section[] {
  const bankSoal = bankSoal3Raw as any;
  const personalitySectionName = 'Asesmen Kepribadian';

  const cognitiveSections = bankSoal.sections.filter((s: any) => s.section !== personalitySectionName);
  const personalityRaw = bankSoal.sections.find((s: any) => s.section === personalitySectionName);

  // Map cognitive sections
  const mappedCognitive: Section[] = cognitiveSections.map((sec: any): Section => {
    const sectionName: string = sec.section;
    const slug = sectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const meta = v3SectionMeta[slug] || { desc: 'Evaluasi kemampuan kognitif.', instructions: [] };

    const questions: Question[] = sec.questions.map((q: any): Question => {
      // Map correct answer ID to option text
      const corrOpt = q.options ? q.options.find((opt: any) => opt.id === q.correct_answer) : undefined;
      const correctAnswerText = corrOpt ? corrOpt.text : q.correct_answer;

      // Convert image description to HTML block or load custom SVG
      let figureHtml: string | undefined = undefined;
      if (figuralSvgs[q.id]) {
        figureHtml = figuralSvgs[q.id];
      } else if (q.content?.image_description) {
        figureHtml = `<div class="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium flex flex-col gap-1.5">
          <span class="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">Deskripsi Gambar Soal:</span>
          <p class="italic">"${q.content.image_description}"</p>
        </div>`;
      }

      return {
        id: q.id,
        category: sectionName,
        difficulty: (q.difficulty || 'medium').toLowerCase() as any,
        question: q.content?.text || q.text || '',
        options: q.options ? q.options.map((opt: any) => opt.text) : [],
        correctAnswer: correctAnswerText,
        explanation: q.explanation,
        estimatedTime: q.estimated_time_seconds,
        figure: figureHtml,
        optionFigures: figuralOptionSvgs[q.id]
      };
    });

    return {
      id: slug,
      title: sectionName,
      description: meta.desc,
      instructions: meta.instructions,
      timeLimit: computeSectionTime(sec.questions),
      questions
    };
  });

  // Map personality section
  const mappedPersonality: Section | null = personalityRaw ? {
    id: 'personality',
    title: 'Asesmen Kepribadian',
    description: 'Menganalisis integritas, disiplin, kerja tim, kepemimpinan, adaptabilitas, inisiatif, dan stabilitas emosional Anda.',
    timeLimit: 70 * 15, // ~70 statements × 15s each
    instructions: [
      'Pilihlah satu tingkat persetujuan yang paling menggambarkan diri Anda dalam lingkungan kerja profesional.',
      'Tidak ada jawaban benar atau salah — jawablah dengan jujur.',
      'Jawaban Anda akan mengukur 7 dimensi kepribadian kerja.'
    ],
    questions: personalityRaw.questions.map((stmt: any): Question => ({
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
      behavior_dimension: stmt.variant || stmt.trait_measured
    }))
  } : null;

  return [
    ...mappedCognitive,
    ...(mappedPersonality ? [mappedPersonality] : [])
  ];
}

// ─── V1/V2 mapper (existing logic) ──────────────────────────────────
function getSectionsForPacketLegacy(packetId: 'packet_1' | 'packet_2'): Section[] {
  const bankSoalRaw = packetId === 'packet_1' ? bankSoal1Raw : bankSoal2Raw;
  const bankSoal = bankSoalRaw as unknown as RawBankSoal;

  // Determine sections based on Schema A or Schema B
  let rawCognitiveSections: RawSection[] = [];
  let rawPersonalitySection: any = null;

  if (bankSoal.personality_section) {
    // Schema A (standard bank-soal.json)
    rawCognitiveSections = bankSoal.sections;
    rawPersonalitySection = bankSoal.personality_section;
  } else {
    // Schema B (bank-soal-2.json where personality is inside sections)
    rawCognitiveSections = bankSoal.sections.filter(sec => sec.name !== 'Personality Assessment');
    const foundPersonality = bankSoal.sections.find(sec => sec.name === 'Personality Assessment');
    if (foundPersonality) {
      rawPersonalitySection = {
        name: foundPersonality.name,
        duration_minutes: foundPersonality.duration_minutes,
        instructions: 'Pilihlah salah satu opsi jawaban yang paling menggambarkan diri Anda dalam lingkungan profesional kerja.',
        scale: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
        statements: foundPersonality.questions.map((q: any) => ({
          id: q.id,
          type: q.type,
          statement: q.statement || q.content?.text || '',
          scale: q.scale || [1, 2, 3, 4, 5],
          trait_measured: q.trait_measured,
          behavior_dimension: q.behavior_dimension
        }))
      };
    }
  }

  // Map the cognitive sections
  const mappedCognitiveSections: Section[] = rawCognitiveSections.map((sec): Section => {
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
      const corrOpt = q.options ? q.options.find(opt => opt.id === q.correct_answer) : undefined;
      const correctAnswerText = corrOpt ? corrOpt.text : q.correct_answer;

      // Convert image description to HTML block representation or load custom SVG drawing
      let figureHtml: string | undefined = undefined;
      if (figuralSvgs[q.id]) {
        figureHtml = figuralSvgs[q.id];
      } else if (q.content?.image_description) {
        figureHtml = `<div class="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium flex flex-col gap-1.5">
          <span class="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[10px]">Deskripsi Gambar Soal:</span>
          <p class="italic">"${q.content.image_description}"</p>
        </div>`;
      }

      return {
        id: q.id,
        category: sec.name,
        difficulty: q.difficulty as any,
        question: q.content?.text || '',
        options: q.options ? q.options.map(opt => opt.text) : [],
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

  // Map the Personality section
  const mappedPersonalitySection: Section | null = rawPersonalitySection ? {
    id: 'personality',
    title: rawPersonalitySection.name,
    description: 'Menganalisis gaya kerja, kecenderungan perilaku, integritas, dan potensi kepemimpinan Anda.',
    timeLimit: rawPersonalitySection.duration_minutes * 60,
    instructions: Array.isArray(rawPersonalitySection.instructions) 
      ? rawPersonalitySection.instructions 
      : [rawPersonalitySection.instructions],
    questions: rawPersonalitySection.statements.map((stmt: any): Question => {
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
  } : null;

  return [
    ...mappedCognitiveSections,
    workingMemorySection,
    ...(mappedPersonalitySection ? [mappedPersonalitySection] : [])
  ];
}

// ─── Public API ──────────────────────────────────────────────────────
export const getSectionsForPacket = (packetId: 'packet_1' | 'packet_2' | 'packet_3'): Section[] => {
  if (packetId === 'packet_3') {
    return getSectionsForPacket3();
  }
  return getSectionsForPacketLegacy(packetId);
};

export const assessmentSections: Section[] = getSectionsForPacket('packet_1');

export const getQuestionById = (sectionId: string, questionId: string) => {
  const section = assessmentSections.find(s => s.id === sectionId);
  return section?.questions.find(q => q.id === questionId);
};
