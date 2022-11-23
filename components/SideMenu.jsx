import React from 'react';
import { rec_channels } from '../data/mock-data';
import { RiMovieLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';

const SideMenu = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#242428]'>
      <div>
        <p className='hidden xl:flex uppercase font-bold text-[14px] pb-3'>
          Recommended Channels
        </p>
        <p>
          <RiMovieLine size={20} className='xl:hidden justify-center w-full' />
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div key={index} className='inline-flex items-center w-full py-[2px] hover:bg-[#34343a] cursor-pointer'>
          <div>
            <Image src={item.avatar} width='35' height='35' alt='/' className='rounded-full  cursor-pointer' />
          </div>
          <div className='hidden xl:flex justify-between w-full '>
            <div>
              <p>{item.username}</p>
              <p className='text-gray-400 text-sm'>{item.game_name}</p>
            </div>
            <p className='flex items-center text-sm'>
              <BsDot color='red' size={30} />
              {item.rank}K
            </p>
          </div>
        </div>
      ))}
      
     
    </div>
  );
};

export default SideMenu;