import React from 'react'
import GamesItem from './GamesItem';
import Live1 from '../public/assets/live/games1.jpg';
import Live2 from '../public/assets/live/games2.jpg';
import Live3 from '../public/assets/live/games3.jpg';
import Live5 from '../public/assets/live/games5.jpg';
import Live6 from '../public/assets/live/games6.jpg';
import Live7 from '../public/assets/live/games7.jpg';

const Games = () => {
  return (
    <div id='games' className='p-2 md:p-8'>
    <h2 className='text-lg font-bold px-2'>
   Recently Released Games
 </h2>
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-10 gap-2 py-2">
    <GamesItem
          img={Live1}
          title='God of War'
          viewers='31k viewers'
          tag1='Action'
        />
        <GamesItem
          img={Live2}
          title='Somerville'
          viewers='5.8K viewers'
          tag1='Adventure'
        />
 <div className="">
      <GamesItem
          img={Live3}
          title='Sonic Front ...'
          viewers='5.3k viewers'
          tag1='Platformer'
        />
  </div>
  <div className="">
      <GamesItem
          img={Live5}
          title='Goddess of V...'
          viewers='2.4k viewers'
          tag1='Shooter'
        />
    </div>
    <div className="">
      <GamesItem
          img={Live6}
          title='Tactics Ogre'
          viewers='2.2k viewers'
          tag1='RPG'
        />
    </div>
    <div className="">
      <GamesItem
          img={Live7}
          title='Bendy and T ...'
          viewers='4.9k viewers'
          tag1='Puzzle'
        />
       </div>
    </div>
 <div className="relative flex items-center">
 <div className="flex-grow border-t border-gray-400"></div>
 <div className="rounded hover:bg-gray-700 py-1">
   <span className="flex-shrink mx-4 text-[#BF94FF] font-bold hover:text-gray-200">
     Show more v
   </span>
 </div>
 <div className="flex-grow border-t border-gray-400"></div>
</div>
</div>
);
};
export default Games