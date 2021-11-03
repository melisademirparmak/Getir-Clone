const FooterMobileNav = () => {
  return (
    <>
      <h6 className="text-lg text-primary-brand-color mb-4">
        Getir' i İndirin
      </h6>
      <nav className="grid gap-2 md:gap-4  grid-cols-2 md:grid-cols-1">
        <a href="/">
          <img
            src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
            alt="App Store"
          />
        </a>
        <a href="/">
          <img
            src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            alt="Google Play Store"
          />
        </a>
        <a href="/">
          <img
            src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
            alt="App Galery"
          />
        </a>
      </nav>
    </>
  );
};

export default FooterMobileNav;
