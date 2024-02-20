import React from 'react';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
const page: React.FC = () => (
  <div className="w-full overflow-hidden">
    <Nav />
    <Hero />
  </div>
);

export default page;
