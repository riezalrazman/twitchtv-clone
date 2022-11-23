import React from 'react';
import LiveChannelItem from './LiveChannelItem';
import Live1 from '../public/assets/live/live1.jpg';
import Live2 from '../public/assets/live/live2.jpg';
import Live3 from '../public/assets/live/live3.jpg';
import Live4 from '../public/assets/live/live4.jpg';
import Live5 from '../public/assets/live/live5.jpg';
import Live6 from '../public/assets/live/live6.jpg';

const LiveChannels = () => {
  return (
    <div id='live' className='p-2 md:p-8'>
      <h2 className='text-lg sm:text-lg font-bold px-2 text-slate-200'>
       Live Channels we think you&apos;ll
        like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-10 gap-2 py-2">
      <LiveChannelItem
          img={Live1}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-50x50.jpeg'
          title='RERUN: Outsiders vs. MOUZ'
          user='ESL_CSGO'
          game='Counter-Strike: Global Offensive'
          tag1='Esports'
          tag2='English'
        />
   <LiveChannelItem
          img={Live2}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/gorgc-profile_image-469e05d25a1e8594-50x50.jpeg'
          title='WHAAT? CRAZY? win!? ok not ok
          '
          user='Gorgc'
          game='Dota 2'
          tag1='MOBA'
          tag2='Action'
        />
        <div className="">
      <LiveChannelItem
          img={Live3}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/96b30bc4546e2f71-profile_image-50x50.jpeg'
          title='SET 8 DAY 2 | ACR poker solo'
          user='boxbox'
          game='Teamfight Tactics'
          tag1='Madge'
          tag2='Pog'
        />
  </div>
  <div className="">
      <LiveChannelItem
          img={Live4}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/c71b60fc-4215-4c41-aaaa-17908502babf-profile_image-50x50.png'
          title='[24/7 LIVE] !Turkey Event - All...'
          user='StreamerHouse'
          game='New World'
          tag1='Ally'
          tag2='Marathon'
        />
  
     </div>
     <div className="">
      <LiveChannelItem
          img={Live5}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/9a3e9597-a98a-4cc0-85ae-841d72bba397-profile_image-50x50.png'
          title='FAZE FORTNITE WITH'
          user='shanks_ttv'
          game='Fortnite'
          tag1='English'
        />
    </div>
    <div className="">
      <LiveChannelItem
          img={Live6}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/bce876db-0749-4933-be0b-84d62a2a8338-profile_image-50x50.png'
          title='ShahZaM - RADIANT RANKED'
          user='ShahZaM'
          game='VALORANT'
          tag1='English'
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

export default LiveChannels;