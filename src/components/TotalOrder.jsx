import React from 'react';

const TotalOrder = () => {
  return (
    <section className='w-[38.5%] flex justify-between gap-y-5 flex-wrap'>
      <div className='border-[1px] flex flex-col justify-between rounded-2xl p-4 hover:scale-[1.07] transition-all cursor-pointer'>
        <div className='flex justify-between gap-16'>
          <img
            src='/public/total-order-icon.svg'
            alt=''
            className='hover:scale-[1.1] transition-all cursor-pointer'
          />
          <img src='/public/green-chart.svg' alt='' />
        </div>
        <div className='hover:scale-[1.07] transition-all cursor-pointer'>
          <h2 className='text-[#898989] font-normal text-sm mb-1'>
            Total Order
          </h2>
          <h1 className='font-semibold text-lg'>350</h1>
        </div>
        <div className='flex gap-3 hover:scale-[1.07] transition-all cursor-pointer'>
          <div className='flex gap-1 items-center text-[#34CAA5] green-background px-2 py-0.5 rounded-full'>
            <img src='/public/green-chart-arrow.svg' alt='' className='w-3' />
            <p className='text-[10px]'>23.5%</p>
          </div>
          <p className='text-[10px]'>vs. previous month</p>
        </div>
      </div>
      <div className='border-[1px] flex flex-col justify-between rounded-2xl p-4 hover:scale-[1.07] transition-all cursor-pointer'>
        <div className='flex justify-between gap-16'>
          <img
            src='/public/total-refund-icon.svg'
            alt=''
            className='hover:scale-[1.07] transition-all cursor-pointer'
          />
          <img src='/public/red-chart.svg' alt='' />
        </div>
        <div className='hover:scale-[1.07] transition-all cursor-pointer'>
          <h2 className='text-[#898989] font-normal text-sm mb-1'>
            Total Refund
          </h2>
          <h1 className='font-semibold text-lg mb-2'>270</h1>
        </div>
        <div className='flex gap-3 hover:scale-[1.07] transition-all cursor-pointer'>
          <div className='flex gap-1 items-center text-[#ED544E] red-background px-2 py-0.5 rounded-full'>
            <img src='/public/red-chart-arrow.svg' alt='' className='w-3' />
            <p className='text-[10px]'>23.5%</p>
          </div>
          <p className='text-[10px]'>vs. previous month</p>
        </div>
      </div>
      <div className='border-[1px] flex flex-col justify-between rounded-2xl p-4 hover:scale-[1.07] transition-all cursor-pointer'>
        <div className='flex justify-between gap-16'>
          <img
            src='/public/average-sales-icon.svg'
            alt=''
            className='hover:scale-[1.07] transition-all cursor-pointer'
          />
          <img src='/public/red-chart.svg' alt='' />
        </div>
        <div className='hover:scale-[1.07] transition-all cursor-pointer'>
          <h2 className='text-[#898989] font-normal text-sm mb-1'>
            Average Sales
          </h2>
          <h1 className='font-semibold text-lg mb-2'>1567</h1>
        </div>
        <div className='flex gap-3 hover:scale-[1.07] transition-all cursor-pointer'>
          <div className='flex gap-1 items-center text-[#ED544E] red-background px-2 py-0.5 rounded-full'>
            <img src='/public/red-chart-arrow.svg' alt='' className='w-3' />
            <p className='text-[10px]'>23.5%</p>
          </div>
          <p className='text-[10px]'>vs. previous month</p>
        </div>
      </div>
      <div className='border-[1px] flex flex-col justify-between rounded-2xl p-4 hover:scale-[1.07] transition-all cursor-pointer'>
        <div className='flex justify-between gap-16'>
          <img
            src='/public/total-income-icon.svg'
            alt=''
            className='hover:scale-[1.07] transition-all cursor-pointer'
          />
          <img src='/public/green-chart.svg' alt='' />
        </div>
        <div className='hover:scale-[1.07] transition-all cursor-pointer'>
          <h2 className='text-[#898989] font-normal text-sm mb-1'>
            Total Income
          </h2>
          <h1 className='font-semibold text-lg mb-2'>$350.000</h1>
        </div>
        <div className='flex gap-3 hover:scale-[1.07] transition-all cursor-pointer'>
          <div className='flex gap-1 items-center text-[#34CAA5] green-background px-2 py-0.5 rounded-full'>
            <img src='/public/green-chart-arrow.svg' alt='' className='w-3' />
            <p className='text-[10px]'>23.5%</p>
          </div>
          <p className='text-[10px]'>vs. previous month</p>
        </div>
      </div>
    </section>
  );
};

export default TotalOrder;
