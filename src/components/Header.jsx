import React from 'react';

const Header = () => {
  return (
    <section className='h-[10%] flex flex-row items-center px-5 border-b-[1px] border-{#E5EAEF}'>
      <div className='flex flex-row justify-between items-center w-[60%] mr-10'>
        <h1 className='font-bold text-xl'>Dashboard</h1>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search...'
          className='search-input border-2 border-[#DADDDD] w-[40%] rounded-full outline-none px-11 pt-2 pb-2.5 placeholder:text-sm'
        />
      </div>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-3'>
          <img src='/public/calendar-icon.svg' alt='' />
          <h3 className='text-xs font-medium'>November 15, 2023</h3>
        </div>
        <button className='border-[1px] border-[#DADDDD] px-2 py-2 rounded-full'>
          <img src='/public/notification-icon.svg' alt='' />
        </button>
        <button className='flex items-center border-[1px] border-[#DADDDD] gap-3 px-2 py-1 rounded-full'>
          <img src='/public/user-icon.png' alt='' />
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-sm font-medium'>Justin Bergson</h2>
            <p className='text-sm text-[#787486]'>Justin@gmail.com</p>
          </div>
          <img src='/public/arrow-down-icon.svg' alt='' />
        </button>
      </div>
    </section>
  );
};

export default Header;
