import React from 'react';
import Navbar from 'components/Navbar';
import TopSection from 'components/TopSection';

import './Landing.scss';

const Landing = () => {
  return (
    <div className="container">
      <Navbar />
      <TopSection />
    </div>
  );
};

export default Landing;
