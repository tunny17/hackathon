import React from 'react';

const LastOrders = () => {
  return (
    <section className='bg-white border rounded-2xl min-w-[320px] w-[60%] px-4 py-3 max-h-[25rem]'>
      <div className='flex justify-between mb-5 mt-2'>
        <h1 className='font-bold text-sm lg:text-base'>Last Orders</h1>
        <h1 className='font-semibold text-[#34CAA5] text-sm lg:text-base cursor-pointer'>
          See All
        </h1>
      </div>
      <table className='w-full text-left'>
        <tr>
          <th className='w-[35%] text-xs lg:text-sm text-[#9CA4AB] font-medium'>
            Name
          </th>
          <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium w-[50%] lg:w-[20%] hidden lg:block'>
            Date
          </th>
          <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium w-[20%]'>
            Amount
          </th>
          <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium w-[15%]'>
            Status
          </th>
          <th className='text-xs lg:text-sm text-[#9CA4AB] font-medium hidden lg:block'>
            Invoice
          </th>
        </tr>
        <div className='my-3 lg:my-4' />
        <tr className='text-[10px] lg:text-sm text-left font-medium h-14 border-t-2'>
          <td>
            <div className='flex items-center gap-3'>
              <img src='/public/last-orders-user-1.png' alt='' />
              Marcus Bergson
            </div>
          </td>
          <td className='hidden lg:table-cell font-normal text-[9px] lg:text-sm text-[#737373]'>
            Nov 15, 2023
          </td>
          <td>$80,000</td>
          <td className='text-[#34CAA5]'>Paid</td>
          <td className='hidden lg:table-cell'>
            <div className='flex items-center gap-2 text-xs'>
              <img src='/public/view-icon.svg' alt='' />
              View
            </div>
          </td>
        </tr>
        <tr className='text-[10px] lg:text-sm text-left font-medium h-14 border-t-2'>
          <td>
            <div className='flex items-center gap-3'>
              <img src='/public/last-orders-user-2.png' alt='' />
              Jaydon Vaccaro
            </div>
          </td>
          <td className='hidden lg:table-cell font-normal text-[9px] lg:text-sm text-[#737373]'>
            Nov 15, 2023
          </td>
          <td>$150,000</td>
          <td className='text-[#ED544E]'>Refund</td>
          <td className='hidden lg:table-cell'>
            <div className='hidden lg:flex items-center gap-2 text-xs'>
              <img src='/public/view-icon.svg' alt='' />
              View
            </div>
          </td>
        </tr>
        <tr className='text-[10px] lg:text-sm text-left font-medium h-14 border-t-2'>
          <td>
            <div className='flex items-center gap-3'>
              <img src='/public/last-orders-user-3.png' alt='' />
              Corey Schleifer
            </div>
          </td>
          <td className='hidden lg:table-cell font-normal text-[9px] lg:text-sm text-[#737373]'>
            Nov 14, 2023
          </td>
          <td>$87,000</td>
          <td className='text-[#34CAA5]'>Paid</td>
          <td className='hidden lg:table-cell'>
            <div className='hidden lg:flex items-center gap-2 text-xs'>
              <img src='/public/view-icon.svg' alt='' />
              View
            </div>
          </td>
        </tr>
        <tr className='text-[10px] lg:text-sm text-left font-medium h-14 border-t-2'>
          <td>
            <div className='flex items-center gap-3'>
              <img src='/public/last-orders-user-4.png' alt='' />
              Cooper Press
            </div>
          </td>
          <td className='hidden lg:table-cell font-normal text-[9px] lg:text-sm text-[#737373]'>
            Nov 14, 2023
          </td>
          <td>$100,000</td>
          <td className='text-[#ED544E]'>Refund</td>
          <td className='hidden lg:table-cell'>
            <div className='hidden lg:flex items-center gap-2 text-xs'>
              <img src='/public/view-icon.svg' alt='' />
              View
            </div>
          </td>
        </tr>
        <tr className='text-[10px] lg:text-sm text-left font-medium h-14 border-t-2'>
          <td>
            <div className='flex items-center gap-3'>
              <img src='/public/last-orders-user-5.png' alt='' />
              Phillip Lubin
            </div>
          </td>
          <td className='hidden lg:table-cell font-normal text-[9px] lg:text-sm text-[#737373]'>
            Nov 13, 2023
          </td>
          <td>$78,000</td>
          <td className='text-[#34CAA5]'>Paid</td>
          <td className='hidden lg:table-cell'>
            <div className='hidden lg:flex items-center gap-2 text-xs'>
              <img src='/public/view-icon.svg' alt='' />
              View
            </div>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default LastOrders;
