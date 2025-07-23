// src/pages/About.tsx
import TeamPhilosophy from '../components/TeamPhilosophy';
import MissionValues from '../components/MissionValues';
import Testimonials from '../components/Testimonials';
import HomepageContact from '../components/HomepageContact';
import RecentWork from '../components/RecentWork';
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>The Heart Behind the Craft</h1>
          <p className="hero-description">
            Meet the passionate team behind every thoughtfully designed space. We believe that great architecture 
            comes from understanding people, places, and the stories they tell together.
          </p>
        </div>
      </section>
      
      <TeamPhilosophy />
      <Testimonials />
      <MissionValues />
      <HomepageContact />
      <RecentWork />
    </div>
  );
};

export default About;