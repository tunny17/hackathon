import React, { useState } from 'react';
import {
  Navigation,
  Header,
  SalesTrend,
  TotalOrder,
  LastOrders,
  TopPlatform,
} from './components';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const [themeClass, setThemeClass] = useState('light');

  return (
    <ThemeContext.Provider value={{ themeClass, setThemeClass }}>
      <section className={`w-full ${themeClass}`}>
        <Navigation />
        <div className='dark:bg-[#181818] bg-[#FAFAFA] ml-0 lg:ml-[5%] h-full'>
          <Header />
          <section className='p-5 pl-4 pt-[23%] lg:pt-[7%] flex justify-center lg:justify-between flex-wrap w-full gap-y-5'>
            <SalesTrend />
            <TotalOrder />
            <LastOrders />
            <TopPlatform />
          </section>
        </div>
      </section>
    </ThemeContext.Provider>
  );
};

export default App;
