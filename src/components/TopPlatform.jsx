import React from 'react';
import { Slider } from '@mui/material';

const TopPlatform = () => {
  return (
    <section className='w-[38.5%] min-w-[320px] bg-white rounded-2xl px-4 py-3'>
      <div className='flex justify-between mb-5 mt-2'>
        <h1 className='font-bold text-sm lg:text-base'>Top Platform</h1>
        <h1 className='font-semibold text-[#34CAA5] text-sm lg:text-base cursor-pointer'>
          See All
        </h1>
      </div>

      <div className='mb-4'>
        <h1 className='font-bold text-xs lg:text-base'>Book Bazaar</h1>
        <Slider
          defaultValue={50}
          // disabled={true}
          aria-label='Disabled slider'
          className='slider slideone'
          sx={{ color: '#FF5F37', height: '11px' }}
        />
        <div className='flex justify-between'>
          <p className='font-normal text-[#525252] text-xs lg:text-base'>
            $2,500,000
          </p>
          <p className='font-normal text-[#525252] text-xs lg:text-base'>
            +15%
          </p>
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='font-bold text-xs lg:text-base'>Artisan Aisle</h1>
        <Slider
          defaultValue={40}
          // disabled={true}
          aria-label='Disabled slider'
          className='slider'
          sx={{ color: '#54C5EB', height: '11px' }}
        />

        <div className='flex justify-between'>
          <p className='font-light text-[#525252] text-xs lg:text-base'>
            $1,800,000
          </p>
          <p className='font-light text-[#525252] text-xs lg:text-base'>+10%</p>
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='font-bold text-xs lg:text-base'>Toy Troop</h1>
        <Slider
          defaultValue={30}
          // disabled={true}
          aria-label='Disabled slider'
          className='slider'
          sx={{ color: '#FFB74A', height: '11px' }}
        />

        <div className='flex justify-between'>
          <p className='font-light text-[#525252] text-xs lg:text-base'>
            $1,200,000
          </p>
          <p className='font-light text-[#525252] text-xs lg:text-base'>+8%</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-xs lg:text-base'>XStore</h1>
        <Slider
          defaultValue={20}
          // disabled={true}
          aria-label='Disabled slider'
          className='slider '
          sx={{ color: '#FF4A55', height: '11px' }}
        />

        <div className='flex justify-between'>
          <p className='font-light text-[#525252] text-xs lg:text-base'>
            $600,000
          </p>
          <p className='font-light text-[#525252] text-xs lg:text-base'>+5%</p>
        </div>
      </div>
    </section>
  );
};

export default TopPlatform;
