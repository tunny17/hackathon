import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Navigation = () => {
  const { themeClass, setThemeClass } = useContext(ThemeContext);
  const isDarkMode = themeClass === 'dark';

  const handleLightMode = () => {
    setThemeClass('light');
  };
  const handleDarkMode = () => {
    setThemeClass('dark');
  };

  return (
    <section className='bg-[#F7F8FA] dark:bg-black dark:border-0 w-full lg:w-[5%] lg:h-[100vh] mt-[13%] lg:mt-0 flex flex-col items-center lg:py-4 border-r-[1px] border-[#E5EAEF] z-[300] fixed top-0'>
      <img
        src='/Logo.svg'
        alt='logo'
        className='hidden lg:block w-full lg:w-[50%] mb-5'
      />
      <nav className='hidden lg:block w-full'>
        <ul className='flex flex-col justify-center gap-y-8 w-full'>
          <li className='flex justify-center items-center cursor-pointer border-r-[3px] border-black'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={
                isDarkMode ? 'fill-white w-[26%]' : 'fill-black w-[26%]'
              }>
              <path d='M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z' />
              <path
                opacity='0.4'
                d='M18.6714 2H16.7714C14.5914 2 13.4414 3.15 13.4414 5.33V7.23C13.4414 9.41 14.5914 10.56 16.7714 10.56H18.6714C20.8514 10.56 22.0014 9.41 22.0014 7.23V5.33C22.0014 3.15 20.8514 2 18.6714 2Z'
              />
              <path d='M18.6714 13.4297H16.7714C14.5914 13.4297 13.4414 14.5797 13.4414 16.7597V18.6597C13.4414 20.8397 14.5914 21.9897 16.7714 21.9897H18.6714C20.8514 21.9897 22.0014 20.8397 22.0014 18.6597V16.7597C22.0014 14.5797 20.8514 13.4297 18.6714 13.4297Z' />
              <path
                opacity='0.4'
                d='M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z'
              />
            </svg>
          </li>
          <li className='flex justify-center items-center cursor-pointer hover:border-r-[3px] hover:border-black dark:border-white transition-all hover:[3px]'>
            <img src='/nav-icon-2.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer hover:border-r-[3px] hover:border-black dark:border-white transition-all hover:transition-all'>
            <img src='/nav-icon-3.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer hover:border-r-[3px] hover:border-black dark:border-white transition-all hover:transition-all'>
            <img src='/nav-icon-4.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer hover:border-r-[3px] hover:border-black dark:border-white transition-all hover:transition-all'>
            <img src='/nav-icon-5.svg' alt='' className='w-[26%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer hover:border-r-[3px] hover:border-black dark:border-white transition-all hover:transition-all'>
            <img src='/nav-icon-6.svg' alt='' className='w-[26%]' />
          </li>
        </ul>
      </nav>

      {/* light & dark mode button */}
      <div className='hidden mt-7 py-2 lg:flex flex-col justify-center items-center gap-y-3 rounded-3xl bg-white dark:bg-black'>
        <button
          onClick={() => handleLightMode()}
          className='flex justify-center items-center rounded-full mx-1 py-0.5'>
          <img src=' /light-mode-icon.svg' alt='' className='w-[70%]' />
        </button>
        <button
          onClick={() => handleDarkMode()}
          className='flex justify-center items-center rounded-full mx-1 py-0.5'>
          <img src=' /dark-mode-icon.svg' alt='' className='w-[70%]' />
        </button>
      </div>

      {/* bottom navigation */}
      <nav className='hidden lg:block w-full absolute bottom-5'>
        <ul className='flex flex-col justify-center gap-y-5 w-full'>
          <li className='flex justify-center items-center cursor-pointer relative'>
            <img src=' /nav-icon-7.svg' alt='' className='w-[45%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src=' /nav-icon-8.svg' alt='' className='w-[45%]' />
          </li>
          <li className='flex justify-center items-center cursor-pointer'>
            <img src=' /nav-icon-9.svg' alt='' className='w-[45%]' />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
