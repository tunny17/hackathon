import React from 'react';
import { Navigation, Header } from './components';

const App = () => {
  return (
    <section className='w-full h-[120vh] flex flex-row'>
      <Navigation />
      <div className='bg-[#FAFAFA] w-full'>
        <Header />
      </div>
    </section>
  );
};

export default App;
