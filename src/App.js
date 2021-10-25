import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Campaign from 'components/Campaign';
import Favorites from 'components/Favorites';
import MobileApp from 'components/MobileApp';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaign />
      <div className="container mx-auto grid gap-y-6">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
