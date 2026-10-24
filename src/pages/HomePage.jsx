import React from 'react';
import { motion } from 'motion/react';
import AboutSection from '../components/sections/AboutSection';
import HighlightedQuoteSection from '../components/sections/HighlightedQuoteSection';
import LifeAndCareerSection from '../components/sections/LifeAndCareerSection';
import EducationSection from '../components/sections/EducationSection';
import PoetrysSection from '../components/sections/PoetrysSection';
import AwardsSection from '../components/sections/AwardsSection';
import PublishedWorksSection from '../components/sections/PublishedWorksSection';
import LiteraryStyleSection from '../components/sections/LiteraryStyleSection';
import MediaAppearancesSection from '../components/sections/MediaAppearancesSection';
import TimelineSection from '../components/sections/TimelineSection';
import MediaSection from '../components/sections/MediaSection';
import ReferencesSection from '../components/sections/ReferencesSection';
import ExternalLinksSection from '../components/sections/ExternalLinksSection';
import CustomSection from '../components/sections/CustomSection';
import TableOfContents from '../components/ui/TableOfContents';
import config from '../configuration';
import seriesConfig from '../series.config';

const HomePage = () => {
  // Map section IDs to their components
  const sectionComponents = {
    about: AboutSection,
    highlightedQuote: HighlightedQuoteSection,
    lifeAndCareer: LifeAndCareerSection,
    education: EducationSection,
    poetrys: PoetrysSection,
    awards: AwardsSection,
    publishedWorks: PublishedWorksSection,
    literaryStyle: LiteraryStyleSection,
    mediaAppearances: MediaAppearancesSection,
    timeline: TimelineSection,
    media: MediaSection,
    references: ReferencesSection,
    externalLinks: ExternalLinksSection,
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
          style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}
        >
          {config.profile.name}
        </motion.h1>

        {/* Lead Section: Engaging Profile on Left, Table of Contents on Right */}
        <div className="wiki-lead-section">
          <div className="wiki-lead-content">
            {config.about.epigraph && (
              <blockquote className="wiki-epigraph">
                “{config.about.epigraph}”
              </blockquote>
            )}
            <p className="wiki-lead-bio">
              {config.profile.bio}
            </p>
          </div>
          <div className="wiki-lead-toc">
            <TableOfContents />
          </div>
        </div>
        
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
