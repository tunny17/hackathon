import React from 'react';
// import Chart from 'react-apexcharts';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const SalesTrend = () => {
  const hover =
    'linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)';
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
        borderRadius: 50,
        hoverBackgroundColor: '#34CAA5',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            // Format the tooltip label to show only the data array
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        border: {
          dash: [6, 6],
        },
      },
      x: {
        border: {
          // dash: [6, 6],
          // color: 'transparent',
        },
      },
    },
  };

  return (
    <section className='min-w-[320px] w-full lg:max-w-[710px] border-2 rounded-2xl bg-white border-[#EDF2F7] py-3 px-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-sm lg:text-lg dark:text-white'>
          Sales Trends
        </h1>
        <div className='flex items-center gap-4'>
          <p className='text-[10px] lg:text-sm font-semibold'>Sort by:</p>
          <button className='text-[9px] lg:text-xs flex gap-x-2 rounded-full items-center border px-3 py-1.5'>
            Weekly{' '}
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
