import React from 'react';
import Image from 'next/image';

import Target from './../../../public/icons/target.svg';
import Phone from './../../../public/icons/phone.svg';
import Email from './../../../public/icons/at-sign.svg';
const Hero: React.FC = () => (
  <section id="home">
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-cover bg-fixed bg-center lg:text-2xl">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70" />
      <div className="z-[2] p-5 text-white">
        <h2 className="pb-5 text-2xl font-bold lg:text-3xl">Example Text</h2>
        <div className="flex flex-col md:flex-row lg:flex-col">
          <p className="flex items-center py-5">
            {' '}
            <Image src={Phone} alt="Profile" width={20} height={20} />
            <span className="mx-4">
              <a href="tel:+48000000000">+48 000 000 000</a>
            </span>
          </p>
          <p className="flex items-center py-5">
            {' '}
            <Image src={Email} alt="Profile" width={20} height={20} />
            <span className="mx-4">
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </span>
          </p>
          <p className="flex items-center py-5">
            <Image src={Target} alt="Profile" width={20} height={20} />
            <span className="mx-4">example address</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col justify-start md:flex-row">
          <a href="" target="blank">
            <button className="mb-4 mt-1 block h-12 w-[300px] rounded border text-white hover:bg-white hover:text-black md:mb-0">
              example button
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
