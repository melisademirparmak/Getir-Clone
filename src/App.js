import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaign from 'components/Campaign';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import { useWindowWidth } from '@react-hook/window-size';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaign />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaign />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
