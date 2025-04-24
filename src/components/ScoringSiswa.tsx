'use client';

import React from 'react';
import { useScoringStore } from '@/store/useScoringStore';
import { UserCircleIcon } from 'lucide-react';

type Props = {
  index: number;
};

const ScoringSiswa: React.FC<Props> = ({ index }) => {
  const result = useScoringStore((state) => state.result[index]);
  const setResult = useScoringStore((state) => state.setResult);

  return (
    <div className="grid grid-cols-5 gap-2 items-center mb-6">
        <div className='flex items-center gap-2'>
            <UserCircleIcon className='w-5 h-5'/>
            <span>Mahasiswa {index + 1}</span>
        </div>
        {result.map((val, aspectIndex) => (
        <select
            key={aspectIndex}
            value={val}
            onChange={(e) => setResult(index, aspectIndex, parseInt(e.target.value))}
            className="border p-1 rounded"
        >
            {[...Array(10)].map((NN, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
            ))}
        </select>
      ))}
    </div>
  );
};

export default ScoringSiswa;
