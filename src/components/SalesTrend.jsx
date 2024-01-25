import React from 'react';

const SalesTrend = () => {
  return (
    <section className='w-[60%] min-w-[320px] border-2 rounded-2xl bg-white border-[#EDF2F7] py-3 px-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-sm lg:text-lg'>Sales Trends</h1>
        <div className='flex items-center gap-4'>
          <p className='text-[10px] lg:text-sm font-semibold'>Sort by:</p>
          <button className='text-[9px] lg:text-xs flex gap-x-2 rounded-full items-center border px-3 py-1.5'>
            Weekly{' '}
            <img
              src='/public/arrow-down-icon.svg'
              alt=''
              className='w-3 lg:w-4'
            />
          </button>
        </div>
      </div>
      <img src='/public/salesTrend-chart.png' alt='' className='mt-4' />
    </section>
  );
};

export default SalesTrend;
