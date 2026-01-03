import Navigation from './CoffeeShop/components/Navigation';
import Hero from './CoffeeShop/components/Hero';
import About from './CoffeeShop/components/About';
import Menu from './CoffeeShop/components/Menu';
import Footer from './CoffeeShop/components/Footer';
import Reviews from './CoffeeShop/components/Reviews';
import Location from './CoffeeShop/components/Location';
import Gallery from './CoffeeShop/components/Gallery';
import './coffeeStyle.css';

const Home = () => {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;