import React from 'react'
import Image from 'next/image'

const LiveChannelItem = ({img, profile_img, title, user, game, tag1, tag2}) => {
  return (
    <div className='p-2'>
      <Image src={img} className='transform transition-all hover:translate-x-2 hover:-translate-y-2 hover:drop-shadow-[8px_8px_0px_rgb(145,70,254)] cursor-pointer' />
      <div className='flex p-2'>
        <div className='pr-2'>
          <Image src={profile_img} alt='/' width='40' height='40' className='rounded-full cursor-pointer' />
        </div>
        <div>
          <p className='text-sm font-bold hover:text-[#a56ef7] cursor-pointer'>{title}</p>
          <p className='text-sm text-gray-500 cursor-pointer'>{user}</p>
          <p className='text-sm text-gray-500 hover:text-[#a56ef7] cursor-pointer'>{game}</p>
          <div className='flex space-x-1 pt-2'>
          <div>
            <p className='text-sm text-slate-300 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-full inline-block p-[2px] px-2'>
              {tag1}
            </p>
          </div>
          <div>
            {tag2 ? (
              <p className='text-sm text-slate-300 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-full inline-block p-[2px] px-3'>
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChannelItem