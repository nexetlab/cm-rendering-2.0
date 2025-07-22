import Hero from '../components/Hero';
import Intro from '../components/Intro';
import ServicesGrid from '../components/ServicesGrid';
import TrustReasons from '../components/TrustReasons';
import Testimonials from '../components/Testimonials';
import RecentWork from '../components/RecentWork';
import HomepageContact from '../components/HomepageContact';


const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Intro />
      <ServicesGrid />
      <Testimonials />
      <TrustReasons />
      <RecentWork />
      <HomepageContact />
    </div>
  );
};

export default Home;