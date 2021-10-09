import React, { useState, useEffect } from 'react';
import footerData from 'api/footerNav.json';
import FooterItem from 'components/ui/FooterItem';
import FooterMobileNav from 'components/FooterMobileNav';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const [footerMenu, setFooterMenu] = useState([]);

  useEffect(() => {
    setFooterMenu(footerData);
  }, []);

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <FooterMobileNav />
          </section>
          {footerMenu &&
            footerMenu.map((footerMenu, key) => (
              <FooterItem key={key} footerMenu={footerMenu} />
            ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2021 Getir
            <a
              href="/"
              className="text-primary-brand-color hover:underline relative before:w-0.5 before:h-0.5 before:bg-black before:absolute before:-left-5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
