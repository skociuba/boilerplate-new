import React from 'react';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
import {heroContent} from '../constants';
const page: React.FC = () => (
  <div className="w-full overflow-hidden">
    <Nav />
    <Hero heroContent={heroContent} />
  </div>
);

export default page;
