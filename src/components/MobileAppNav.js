const MobileAppNav = () => {
  return (
    <nav className="mt-5 flex flex-wrap lg:flex-nowrap justify-center gap-2 gap-x-2">
      <a href="/" className="transition-all transform hover:scale-105">
        <img
          src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
          className="md:h-8 lg:h-auto"
          alt="App Store"
        />
      </a>
      <a href="/" className="transition-all transform hover:scale-105">
        <img
          src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
          className="md:h-8 lg:h-auto"
          alt="Google Play Store"
        />
      </a>
      <a href="/" className="transition-all transform hover:scale-105">
        <img
          src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
          className="md:h-8 lg:h-auto"
          alt="App Galery"
        />
      </a>
    </nav>
  );
};

export default MobileAppNav;
