
import CarouselComponent from '../components/CarouselComponent'
import FeaturesSection from '../components/FeaturesSection';
import Services from '../components/Services';
const HomePage = () => {
  return (
    <div>
      <CarouselComponent />
      {/* Other components for the homepage */}
      <Services/>
      <FeaturesSection/>
    </div>
  );
};

export default HomePage;
