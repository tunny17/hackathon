import React from 'react';
import {
  Navigation,
  Header,
  SalesTrend,
  TotalOrder,
  LastOrders,
  TopPlatform,
} from './components';

const App = () => {
  return (
    <section className='w-full'>
      <Navigation />
      <div className='bg-[#FAFAFA] ml-0 lg:ml-[5%] h-full'>
        <Header />
        <section className='p-5 mt-[5%] flex justify-center lg:justify-between flex-wrap w-full gap-y-5'>
          <SalesTrend />
          <TotalOrder />
          <LastOrders />
          <TopPlatform />
        </section>
      </div>
    </section>
  );
};

export default App;
