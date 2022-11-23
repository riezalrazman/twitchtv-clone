import React from 'react';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  return (
    <div id='categories' className='p-2 md:p-8'>
       <h2 className='text-lg font-bold px-2'>
      <span className='text-[#bb8dff] hover:text-[#a56ff6]  hover:underline cursor-pointer'>Categories</span> we think you’ll like
    </h2>
      {/* Container */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2'>
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg' title='Valorant'
          viewers='164k' tag1='FPS' tag2='Shooter' />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg'
          title='Just Chatting'
          viewers='326k viewers'
          tag1='IRL'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg'
          title='Fortnite'
          viewers='53k viewers'
          tag1='Shooter'
          tag2='Action'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'
          title='Minecraft'
          viewers='22k viewers'
          tag1='Strategy'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg'
          title='Grand Thefy Auto'
          viewers='95k viewers'
          tag1='Adventure'
        />

        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg'
          title='Apex Legends'
          viewers='112k viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-188x250.jpg'
          title='God of War Ragn ...'
          viewers='63.1k viewers'
          tag1='Action'
       
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1614555304-188x250.jpg'
          title='Call of Duty: Mod..'
          viewers='7.5k viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg'
          title='Dead by Daylight'
          viewers='33k viewers'
          tag1='Action'
          tag2='Horror'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'
          title='League of Le ...'
          viewers='31k viewers'
          tag1='Action'
        />
      </div>
    </div>
  );
};

export default Categories;