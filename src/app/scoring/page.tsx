'use client';

import { useScoringStore } from '@/store/useScoringStore';
import ScoringSiswa from '@/components/ScoringSiswa';
import LoadingIcon from '@/components/LoadingIcon';
import { useState } from 'react';

export default function Page() {
  const result = useScoringStore((state) => state.result);
  const TOTAL_STUDENT = result.length;
  const TOTAL_ASPECT = result[0].length;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const hasil: Record<string, Record<string, number>> = {};
    for (let aspect = 0; aspect < TOTAL_ASPECT; aspect++) {
      const aspectKey = `aspek_penilaian_${aspect + 1}`;
      hasil[aspectKey] = {};
      for (let mhs = 0; mhs < TOTAL_STUDENT; mhs++) {
        hasil[aspectKey][`mahasiswa_${mhs + 1}`] = result[mhs][aspect];
      }
    }

    await new Promise((res) => setTimeout(res, 500)); // Simulasi delay
    console.log(JSON.stringify(hasil, null, 2));
    alert('Cek console!');
    setLoading(false);
  };

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4 text-center">Penilaian Mahasiswa</h1>
      <div className="grid grid-cols-5 gap-2 font-semibold mb-2">
        <span>Nama</span>
        {[...Array(TOTAL_ASPECT)].map((_, i) => (
          <span key={i}>Aspek {i + 1}</span>
        ))}
      </div>

      {result.map((_, index) => (
        <ScoringSiswa key={index} index={index} />
      ))}

      <div className="mt-4 text-center">
        <button
          className="bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading && <LoadingIcon />}
          {loading ? 'Menyimpan...' : 'Simpan'}
        </button>
      </div>
    </main>
  );
}
