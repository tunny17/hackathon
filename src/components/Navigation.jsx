import React from 'react';
import activeIcon from '/nav-active-icon.svg';

const Navigation = () => {
  return (
    <section className='bg-[#F7F8FA] w-[5%] h-[100vh] flex flex-col items-center py-4 border-r-[1px] border-[#E5EAEF] fixed top-0'>
      <img src='/Logo.svg' alt='logo' className='w-[50%] mb-5' />
      <nav className='w-full'>
        <ul className='flex flex-col justify-center gap-y-8 w-full'>
          <li className='flex justify-center items-center cursor-pointer relative'>
            <img src='/public/nav-icon-1.svg' alt='' className='w-[26%]' />
            <img src={activeIcon} alt='' className='absolute right-0' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-2.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-3.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-4.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-5.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-6.svg' alt='' className='w-[26%]' />
          </li>
        </ul>
      </nav>

      {/* light & dark mode button */}
      <div className='mt-7 py-2 flex flex-col justify-center items-center gap-y-3 rounded-3xl bg-white'>
        <button className='flex justify-center items-center rounded-full mx-1 py-0.5'>
          <img src='/public/light-mode-icon.svg' alt='' className='w-[70%]' />
        </button>
        <button className='flex justify-center items-center rounded-full mx-1 py-0.5'>
          <img src='/public/dark-mode-icon.svg' alt='' className='w-[70%]' />
        </button>
      </div>

      {/* bottom navigation */}
      <nav className='w-full absolute bottom-5'>
        <ul className='flex flex-col justify-center gap-y-5 w-full'>
          <li className='flex justify-center items-center cursor-pointer relative'>
            <img src='/public/nav-icon-7.svg' alt='' className='w-[45%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-8.svg' alt='' className='w-[45%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src='/public/nav-icon-9.svg' alt='' className='w-[45%]' />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
