import React from 'react';
import { Slider } from '@mui/material';
import { topPlatform } from '../data';

const TopPlatform = () => {
  return (
    <section className='w-full min-w-[350px] lg:w-[38.5%] bg-white dark:bg-black dark:text-white rounded-2xl px-4 py-3'>
      <div className='flex justify-between mb-5 mt-2'>
        <h1 className='font-bold text-sm lg:text-base'>Top Platform</h1>
        <h1 className='font-semibold text-[#34CAA5] text-sm lg:text-base cursor-pointer'>
          See All
        </h1>
      </div>

      {topPlatform.map((platform, index) => (
        <div className='mb-5 relative'>
          <h1 className='font-bold text-xs lg:text-base'>{platform.name}</h1>
          <div className='z-[200] absolute top-0 w-full h-full bg-transparent' />
          <Slider
            defaultValue={platform.value}
            aria-label='Disabled slider'
            className='slider slideone z-[100]'
            sx={{ color: `${platform.color}`, height: '11px' }}
          />

          <div className='flex justify-between'>
            <p className='font-normal text-[#525252] text-xs lg:text-base'>
              {platform.amount}
            </p>
            <p className='font-normal text-[#525252] text-xs lg:text-base'>
              {platform.percentage}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TopPlatform;
