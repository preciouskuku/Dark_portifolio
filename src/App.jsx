import React from 'react';
import PortfolioHero from './pages/hero';
import AboutExperience from './pages/about';
import TechnicalArsenal from './pages/asernals';
import FeaturedWorks from './pages/project';
import ContactSection from './pages/contact';

const App = () => {
  return (
    <div>
      <PortfolioHero />
      <AboutExperience />
      <TechnicalArsenal />
      <FeaturedWorks />
      <ContactSection />
    </div>
  );
}

export default App;
