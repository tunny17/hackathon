import React, { useContext, useState } from 'react';
import MobileNavigation from './MobileNavigation';
import ThemeContext from '../context/ThemeContext';

const Header = ({}) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const { themeClass, setThemeClass } = useContext(ThemeContext);
  const isDarkMode = themeClass === 'dark';

  const openDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <section className='fixed top-0 z-[200] w-full'>
      <section className='lg:h-[10%] flex flex-row items-center justify-between lg:justify-normal lg:gap-10 px-5 py-3 lg:py-2.5 border-b-[1px] border-[#E5EAEF] dark:border-0 w-full dark:bg-black bg-[#FAFAFA]'>
        <div className='flex flex-row justify-between items-center lg:w-[57%]'>
          <button
            type='button'
            className='lg:hidden'
            onClick={() => openDropdown()}>
            <img src='/Logo.svg' alt='logo' className='w-[80%] mr-5' />
          </button>

          <h1 className='font-bold text-sm lg:text-xl dark:text-white'>
            Dashboard
          </h1>
          <div className='relative w-[40%]'>
            <input
              type='search'
              name=''
              id=''
              placeholder='Search...'
              className='search-input hidden w-full lg:block border bg-white dark:text-black border-[#DADDDD] rounded-full outline-none px-9 pt-1 pb-2 placeholder:text-[13px]'
            />
            <img
              src='/search-icon.svg'
              alt=''
              className='absolute top-2.5 left-3 w-4 hidden lg:block'
            />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='items-center gap-3 hidden lg:flex'>
            <svg
              width='19'
              height='19'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={isDarkMode ? 'fill-white w-3 lg:w-5' : 'w-5'}>
              <path
                d='M2 9.79458C2 6.70042 2 5.15293 2.9376 4.19211C3.8744 3.23047 5.3832 3.23047 8.4 3.23047H11.6C14.6168 3.23047 16.1256 3.23047 17.0624 4.19211C18 5.15293 18 6.70042 18 9.79458V11.4356C18 14.5298 18 16.0773 17.0624 17.0381C16.1256 17.9997 14.6168 17.9997 11.6 17.9997H8.4C5.3832 17.9997 3.8744 17.9997 2.9376 17.0381C2 16.0773 2 14.5298 2 11.4356V9.79458Z'
                stroke='black'
                stroke-width='1.37144'
              />
              <path
                d='M5.99844 3.23077V2M13.9984 3.23077V2M2.39844 7.33334H17.5984'
                stroke='black'
                stroke-width='1.37144'
                stroke-linecap='round'
              />
              <path
                d='M14.7992 13.8955C14.7992 14.1132 14.7149 14.3219 14.5649 14.4757C14.4149 14.6296 14.2114 14.7161 13.9992 14.7161C13.787 14.7161 13.5836 14.6296 13.4335 14.4757C13.2835 14.3219 13.1992 14.1132 13.1992 13.8955C13.1992 13.6779 13.2835 13.4692 13.4335 13.3153C13.5836 13.1615 13.787 13.075 13.9992 13.075C14.2114 13.075 14.4149 13.1615 14.5649 13.3153C14.7149 13.4692 14.7992 13.6779 14.7992 13.8955ZM14.7992 10.6135C14.7992 10.8311 14.7149 11.0398 14.5649 11.1937C14.4149 11.3476 14.2114 11.434 13.9992 11.434C13.787 11.434 13.5836 11.3476 13.4335 11.1937C13.2835 11.0398 13.1992 10.8311 13.1992 10.6135C13.1992 10.3959 13.2835 10.1872 13.4335 10.0333C13.5836 9.87942 13.787 9.79297 13.9992 9.79297C14.2114 9.79297 14.4149 9.87942 14.5649 10.0333C14.7149 10.1872 14.7992 10.3959 14.7992 10.6135ZM10.7992 13.8955C10.7992 14.1132 10.7149 14.3219 10.5649 14.4757C10.4149 14.6296 10.2114 14.7161 9.99922 14.7161C9.78705 14.7161 9.58356 14.6296 9.43353 14.4757C9.2835 14.3219 9.19922 14.1132 9.19922 13.8955C9.19922 13.6779 9.2835 13.4692 9.43353 13.3153C9.58356 13.1615 9.78705 13.075 9.99922 13.075C10.2114 13.075 10.4149 13.1615 10.5649 13.3153C10.7149 13.4692 10.7992 13.6779 10.7992 13.8955ZM10.7992 10.6135C10.7992 10.8311 10.7149 11.0398 10.5649 11.1937C10.4149 11.3476 10.2114 11.434 9.99922 11.434C9.78705 11.434 9.58356 11.3476 9.43353 11.1937C9.2835 11.0398 9.19922 10.8311 9.19922 10.6135C9.19922 10.3959 9.2835 10.1872 9.43353 10.0333C9.58356 9.87942 9.78705 9.79297 9.99922 9.79297C10.2114 9.79297 10.4149 9.87942 10.5649 10.0333C10.7149 10.1872 10.7992 10.3959 10.7992 10.6135ZM6.79922 13.8955C6.79922 14.1132 6.71493 14.3219 6.5649 14.4757C6.41487 14.6296 6.21139 14.7161 5.99922 14.7161C5.78705 14.7161 5.58356 14.6296 5.43353 14.4757C5.2835 14.3219 5.19922 14.1132 5.19922 13.8955C5.19922 13.6779 5.2835 13.4692 5.43353 13.3153C5.58356 13.1615 5.78705 13.075 5.99922 13.075C6.21139 13.075 6.41487 13.1615 6.5649 13.3153C6.71493 13.4692 6.79922 13.6779 6.79922 13.8955ZM6.79922 10.6135C6.79922 10.8311 6.71493 11.0398 6.5649 11.1937C6.41487 11.3476 6.21139 11.434 5.99922 11.434C5.78705 11.434 5.58356 11.3476 5.43353 11.1937C5.2835 11.0398 5.19922 10.8311 5.19922 10.6135C5.19922 10.3959 5.2835 10.1872 5.43353 10.0333C5.58356 9.87942 5.78705 9.79297 5.99922 9.79297C6.21139 9.79297 6.41487 9.87942 6.5649 10.0333C6.71493 10.1872 6.79922 10.3959 6.79922 10.6135Z'
                fill='black'
              />
            </svg>
            <h3 className='text-[9px] lg:text-xs font-semibold dark:text-white'>
              November 15, 2023
            </h3>
          </div>
          <button className='border bg-white dark:bg-black border-[#DADDDD] px-2 py-2 rounded-full hidden md:hidden lg:block'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={isDarkMode ? 'fill-white' : 'fill-black'}>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M10.001 1.04297C8.28817 1.04297 6.64547 1.7234 5.4343 2.93457C4.22313 4.14574 3.5427 5.78844 3.5427 7.5013V8.08797C3.54265 8.66871 3.3707 9.23645 3.04853 9.71963L2.0927 11.1555C0.98103 12.8221 1.82936 15.0871 3.76186 15.6138C4.39103 15.7855 5.02603 15.9305 5.6652 16.0496L5.66686 16.0538C6.30686 17.7638 8.01936 18.9596 10.001 18.9596C11.9827 18.9596 13.6952 17.7638 14.336 16.0538L14.3377 16.0496C14.9779 15.9305 15.6128 15.7851 16.241 15.6138C18.1735 15.0871 19.0219 12.8221 17.9102 11.1555L16.9535 9.71963C16.6314 9.23645 16.4594 8.66871 16.4594 8.08797V7.5013C16.4594 5.78844 15.7789 4.14574 14.5678 2.93457C13.3566 1.7234 11.7139 1.04297 10.001 1.04297ZM12.8144 16.2821C10.9452 16.5055 9.05605 16.5055 7.18686 16.2821C7.77936 17.133 8.8102 17.7096 10.001 17.7096C11.1919 17.7096 12.2219 17.133 12.8144 16.2821ZM4.7927 7.5013C4.7927 6.11997 5.34143 4.79521 6.31818 3.81845C7.29493 2.8417 8.61969 2.29297 10.001 2.29297C11.3824 2.29297 12.7071 2.8417 13.6839 3.81845C14.6606 4.79521 15.2094 6.11997 15.2094 7.5013V8.08797C15.2094 8.91547 15.4544 9.72463 15.9135 10.413L16.8702 11.8488C17.0184 12.0708 17.1118 12.3249 17.1424 12.5901C17.1731 12.8552 17.1403 13.1239 17.0467 13.3739C16.9531 13.6239 16.8014 13.8481 16.604 14.0279C16.4067 14.2076 16.1695 14.3379 15.9119 14.408C12.0417 15.4634 7.95952 15.4634 4.08936 14.408C3.832 14.3377 3.59501 14.2074 3.39789 14.0276C3.20078 13.8478 3.04919 13.6238 2.95561 13.374C2.86203 13.1242 2.82914 12.8557 2.85963 12.5907C2.89013 12.3257 2.98315 12.0717 3.13103 11.8496L4.08936 10.413C4.54815 9.72437 4.79287 8.9154 4.7927 8.08797V7.5013Z'
                fill={isDarkMode ? 'fill-white' : 'fill-black'}
              />
            </svg>
          </button>
          <button className='flex items-center border dark:bg-black dark:text-white bg-white border-[#DADDDD] gap-2 px-1 lg:px-2 py-1 rounded-full'>
            <img src='/user-icon.png' alt='' className='w-7 lg:w-9' />
            <div className='hidden lg:flex flex-col items-center justify-center'>
              <h2 className='text-xs font-medium'>Justin Bergson</h2>
              <p className='text-xs text-[#787486] '>Justin@gmail.com</p>
            </div>
            <img
              src='/arrow-down-icon.svg'
              alt=''
              className='hidden lg:block w-4'
            />
          </button>
        </div>
      </section>

      {/* mobile navigation */}
      {displayDropdown && <MobileNavigation />}
    </section>
  );
};

export default Header;
