const bankSoalRaw = require('../bank-soal-claude.json');

const bankSoal = bankSoalRaw;

// Map the cognitive sections
const mappedCognitiveSections = bankSoal.sections.map((sec) => {
  const slug = sec.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  let desc = 'Evaluasi kemampuan kognitif dan logika Anda.';
  let instructions = [];

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

  return {
    id: slug,
    title: sec.name,
    description: desc,
    instructions,
    questionsCount: sec.questions.length
  };
});

console.log(mappedCognitiveSections);
console.log('Personality Instructions Type:', typeof bankSoal.personality_section.instructions, Array.isArray(bankSoal.personality_section.instructions));
console.log('Personality Instructions Val:', bankSoal.personality_section.instructions);
