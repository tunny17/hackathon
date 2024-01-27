import React from 'react';
import { totalOrders } from '../data';

const TotalOrder = () => {
  return (
    <section className='w-full lg:w-[39%] min-w-[310px] flex flex-row justify-between lg:gap-y-4 lg:gap-x-0 gap-x-5 lg:flex-wrap lg:pl-3 overflow-x-auto lg:overflow-hidden'>
      {totalOrders.map((order, index) => (
        <div className='bg-white dark:bg-black dark:text-white dark:border-0 border w-full min-w-[210px] lg:max-w-[215px] hover:scale-[1.05] flex flex-col justify-between rounded-2xl p-3 py-4 transition-all cursor-pointer'>
          <div className='flex justify-between'>
            <img
              src={order.img}
              alt=''
              className='hover:scale-[1.1] transition-all cursor-pointer w-8'
            />
            <img src={order.chartImg} alt='' className='w-[50%]' />
          </div>
          <div className='hover:scale-[1.03] transition-all cursor-pointer'>
            <h2 className='text-[#898989] font-normal text-sm mb-1'>
              {order.title}
            </h2>
            <h1 className='font-semibold text-lg'>{order.price}</h1>
          </div>
          <div className='flex gap-3 hover:scale-[1.07] transition-all cursor-pointer'>
            <div
              className={`flex gap-1 items-center text-[${order.miniChartColor}] ${order.miniChartBackgroundColor} px-2 py-0.5 rounded-full`}>
              <img src={order.miniChartImg} alt='' className='w-3' />
              <p className='text-[10px]'>{order.percentage}</p>
            </div>
            <p className='text-[10px]'>vs. previous month</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TotalOrder;
