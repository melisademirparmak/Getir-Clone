import React from 'react';
import MobileAppNav from 'components/MobileAppNav';

const MobileApp = () => {
  return (
    <div className="bg-primary-brand-color bg-mobil-app  md:rounded-lg text-white md:flex-row flex justify-between items-center">
      <div className="flex flex-col gap-y-3  p-10 text-center md:text-left">
        <h3 className="text-2xl font-bold  tracking-tighter">
          Getir'i indirin!
        </h3>
        <p className="font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <MobileAppNav />
      </div>
      <picture>
        <img
          className="pt-6 hidden md:block md:self-end"
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt="Mobile App"
        />
      </picture>
    </div>
  );
};

export default MobileApp;
