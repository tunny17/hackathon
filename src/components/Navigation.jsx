import React from 'react';
import activeIcon from '/nav-active-icon.svg';

const Navigation = () => {
  return (
    <section className='bg-[#F7F8FA] w-[5%] flex flex-col items-center py-4 border-r-[1px] border-black relative'>
      <img src='/Logo.svg' alt='logo' className='w-[50%] mb-5' />
      <nav className='w-full'>
        <ul className='flex flex-col justify-center gap-y-8 w-full'>
          <li className='flex justify-center items-center cursor-pointer relative'>
            <img src='/public/nav-icon-1.svg' alt='' className='w-[35%]' />
            <img src={activeIcon} alt='' className='absolute right-0' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-2.svg' alt='' className='w-[35%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-3.svg' alt='' className='w-[35%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-4.svg' alt='' className='w-[35%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-5.svg' alt='' className='w-[35%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-6.svg' alt='' className='w-[35%]' />
          </li>
        </ul>
      </nav>

      {/* light & dark mode button */}
      <div className='mt-7 py-2 flex flex-col justify-center items-center gap-y-5 rounded-3xl bg-white'>
        <button className='flex justify-center items-center rounded-full mx-1.5 py-0.5'>
          <img src='/public/light-mode-icon.svg' alt='' className='w-[90%]' />
        </button>
        <button className='flex justify-center items-center rounded-full mx-1.5 py-0.5'>
          <img src='/public/dark-mode-icon.svg' alt='' className='w-[90%]' />
        </button>
      </div>

      {/* bottom navigation */}
      <nav className='w-full absolute bottom-10'>
        <ul className='flex flex-col justify-center gap-y-6 w-full'>
          <li className='flex justify-center items-center cursor-pointer relative'>
            <img src='/public/nav-icon-7.svg' alt='' className='w-[50%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-8.svg' alt='' className='w-[50%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-9.svg' alt='' className='w-[50%]' />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
