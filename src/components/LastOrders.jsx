import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { lastOrders } from '../data';

const LastOrders = () => {
  const { themeClass, setThemeClass } = useContext(ThemeContext);
  const isDarkMode = themeClass === 'dark';

  return (
    <section className='bg-white dark:bg-black dark:border-0 dark:text-white border rounded-2xl min-w-[350px] w-full px-4 py-3 lg:max-w-[710px] max-h-[25rem]'>
      <div className='flex justify-between mb-5 mt-2'>
        <h1 className='font-bold text-sm lg:text-base'>Last Orders</h1>
        <h1 className='font-semibold text-[#34CAA5] text-sm lg:text-base cursor-pointer'>
          See All
        </h1>
      </div>
      <div className='overflow-x-auto'>
        <table className='w-[700px] md:w-[900px] lg:w-full text-left'>
          <tr>
            <th className='w-[35%] text-xs lg:text-sm text-[#9CA4AB] font-medium'>
              Name
            </th>
            <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium w-[20%] '>
              Date
            </th>
            <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium w-[20%]'>
              Amount
            </th>
            <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium w-[15%]'>
              Status
            </th>
            <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium'>
              Invoice
            </th>
          </tr>
          <div className='my-3 lg:my-4' />
          {lastOrders.map((order, index) => (
            <tr className='text-[10px] lg:text-sm text-left font-medium h-14 border-t-2'>
              <td>
                <div className='flex items-center gap-3 pl-2'>
                  <img
                    src={`/public${order.userPicture}`}
                    alt=''
                    className='w-7'
                  />
                  {order.name}
                </div>
              </td>
              <td className=' font-normal text-[9px] lg:text-sm text-[#737373]'>
                {order.date}
              </td>
              <td>{order.amount}</td>
              <td className={`text-[${order.statusColor}]`}>{order.status}</td>
              <td className='cursor-pointer'>
                <div className='flex items-center gap-2 text-xs'>
                  <img src='/view-icon.svg' alt='' />
                  View
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default LastOrders;
