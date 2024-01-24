import React from 'react';
import { Navigation, Header, SalesTrend, TotalOrder } from './components';

const App = () => {
  return (
    <section className='w-full h-[120vh] flex flex-row'>
      <Navigation />
      <div className='bg-[#FAFAFA] w-full'>
        <Header />

        {/* first section of the body */}
        <section className='p-5'>
          <div className='flex justify-between'>
            <SalesTrend />
            <TotalOrder />
          </div>
        </section>
      </div>
    </section>
  );
};

export default App;
