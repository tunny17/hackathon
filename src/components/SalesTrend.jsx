import React from 'react';

const SalesTrend = () => {
  return (
    <section className='w-[60%] border-2 rounded-2xl border-[#EDF2F7] py-3 px-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-lg'>Sales Trends</h1>
        <div className='flex items-center gap-4'>
          <p className='text-sm font-semibold'>Sort by:</p>
          <button className='text-xs flex gap-x-4 rounded-full items-center border-[1px] px-3 py-1.5'>
            Weekly <img src='/public/arrow-down-icon.svg' alt='' />
          </button>
        </div>
      </div>
      <img src='/public/salesTrend-chart.png' alt='' className='mt-4' />
    </section>
  );
};

export default SalesTrend;
