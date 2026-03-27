import React from 'react';
import { motion } from 'motion/react';
import AboutSection from '../components/sections/AboutSection';
import LifeAndCareerSection from '../components/sections/LifeAndCareerSection';
import EducationSection from '../components/sections/EducationSection';
import PoetrysSection from '../components/sections/PoetrysSection';
import AwardsSection from '../components/sections/AwardsSection';
import MediaSection from '../components/sections/MediaSection';
import CustomSection from '../components/sections/CustomSection';
import config from '../configuration';
import seriesConfig from '../series.config';

const HomePage = () => {
  // Map section IDs to their components
  const sectionComponents = {
    about: AboutSection,
    lifeAndCareer: LifeAndCareerSection,
    education: EducationSection,
    poetrys: PoetrysSection,
    awards: AwardsSection,
    media: MediaSection,
  };

  // Render sections based on series configuration
  const renderSections = () => {
    return seriesConfig.sectionOrder
      .filter(sectionId => seriesConfig.enabledSections[sectionId])
      .map(sectionId => {
        const SectionComponent = sectionComponents[sectionId];
        return SectionComponent ? <SectionComponent key={sectionId} /> : null;
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-8"
    >
      <div className="wiki-content">
        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}
        >
          {config.profile.name}
        </motion.h1>
        
        {/* Render sections based on series config */}
        {renderSections()}
        
        {/* Custom Sections */}
        {config.customSections.map((section) => (
          <CustomSection key={section.id} section={section} />
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;
