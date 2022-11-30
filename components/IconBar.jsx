import React from 'react';
import Remote from '../public/assets/remote.png';
import Mic from '../public/assets/mic.png';
import Headphones from '../public/assets/headphones.png';
import Trophy from '../public/assets/trophy.png';
import Paint from '../public/assets/paint.png';
import Image from 'next/image';

const IconBar = () => {
  return (
 
    <div className='p-2 md:p-8'>
      {/* Container */}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 border-t border-gray-700 py-10 cursor-pointer'>
      {/* Grid Item */}
      
      <div className='w-full h-[50px] bg-[#751dfa] hover:bg-[#9f63fa] flex justify-between items-center px-4 rounded'>
      <p className='text-2xl font-bold'>Games</p>
      <Image src={Remote} alt='/' />
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px]  bg-[#751dfa] hover:bg-[#9f63fa] flex justify-between items-center px-4 rounded'>
      <p className='text-2xl font-bold'>IRL</p>
      <Image src={Mic} alt='/' />
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px]  bg-[#751dfa] hover:bg-[#9f63fa] flex justify-between items-center px-4 rounded'>
      <p className='text-2xl font-bold'>Music</p>
      <Image src={Headphones} alt='/' />
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px]  bg-[#751dfa] hover:bg-[#9f63fa] flex justify-between items-center px-4 rounded'>
      <p className='text-2xl font-bold'>Esports</p>
      <Image src={Trophy} alt='/' />
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px]  bg-[#751dfa] hover:bg-[#9f63fa] flex justify-between items-center px-4 rounded'>
      <p className='text-2xl font-bold'>Creative</p>
      <Image src={Paint} alt='/' />
      </div>
      </div>
    </div>
 
  )
}

export default IconBar