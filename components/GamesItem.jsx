import React from 'react'
import Image from 'next/image';

const GamesItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className='p-2'>
    <Image src={img} width='261' height='350' alt='/' className='transform transition-all hover:translate-x-2 hover:-translate-y-2 hover:drop-shadow-[8px_8px_0px_rgb(145,70,254)] cursor-pointer' />
    <div>
      <p className='font-bold hover:text-[#9a5cf7] cursor-pointer'>{title}</p>
      <p className='text-sm text-gray-500 py-[2px] hover:text-[#9a5cf7] cursor-pointer'>{viewers}</p>
      <div className='flex space-x-1'>
        <div>
          <p className='text-sm text-slate-300 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-full inline-block p-[2px] px-2'>
            {tag1}
          </p>
        </div>
        <div>
          {tag2 ? (
            <p className='text-sm text-slate-300 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-full inline-block p-[2px] px-2'>
              {tag2}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);
};

export default GamesItem