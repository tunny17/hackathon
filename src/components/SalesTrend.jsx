import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const SalesTrend = () => {
  const { themeClass, setThemeClass } = useContext(ThemeContext);
  const isDarkMode = themeClass === 'dark';

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ],
    datasets: [
      {
        data: [7, 21, 3, 27, 9, 45, 9, 23, 32, 4, 30, 26],
        backgroundColor: 'rgba(52, 202, 165, 0.10)',
        borderRadius: 100,
        hoverBackgroundColor: '#34CAA5',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.y || 0;
            return `${value}`;
          },
        },
      },
      legend: {
        display: false, // Set this to false to hide the legend
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${value.toFixed(3)}`;
          },
          stepSize: 5,
          maxTicksLimit: 7,
        },
        border: {
          dash: [6, 6],
          color: 'transparent',
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          dash: [6, 6],
          color: 'transparent',
        },
      },
    },
  };

  return (
    <section className='min-w-[320px] w-full lg:max-w-[710px] border-2 rounded-2xl bg-white dark:bg-black dark:text-white dark:border-0 border-[#EDF2F7] py-3 px-4'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='font-bold text-sm lg:text-lg'>Sales Trends</h1>
        <div className='flex items-center gap-4'>
          <p className='text-[10px] lg:text-sm font-semibold'>Sort by:</p>
          <button className='text-[9px] lg:text-xs flex gap-x-2 rounded-full items-center border px-3 py-1.5'>
            Weekly{' '}
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={
                isDarkMode ? 'fill-white w-[19%]' : 'fill-black w-[26%]'
              }>
              <path
                d='M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z'
                fill=''
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='w-full'>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default SalesTrend;
