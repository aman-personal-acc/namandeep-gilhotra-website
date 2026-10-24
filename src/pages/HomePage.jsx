import React from "react";
import { motion } from "motion/react";
import AboutSection from "../components/sections/AboutSection";
import HighlightedQuoteSection from "../components/sections/HighlightedQuoteSection";
import LifeAndCareerSection from "../components/sections/LifeAndCareerSection";
import EducationSection from "../components/sections/EducationSection";
import PoetrysSection from "../components/sections/PoetrysSection";
import AwardsSection from "../components/sections/AwardsSection";
import PublishedWorksSection from "../components/sections/PublishedWorksSection";
import LiteraryStyleSection from "../components/sections/LiteraryStyleSection";
import MediaAppearancesSection from "../components/sections/MediaAppearancesSection";
import TimelineSection from "../components/sections/TimelineSection";
import MediaSection from "../components/sections/MediaSection";
import ExternalLinksSection from "../components/sections/ExternalLinksSection";
import CustomSection from "../components/sections/CustomSection";
import TableOfContents from "../components/ui/TableOfContents";
import SEO from "../components/common/SEO";
import config from "../configuration";
import seriesConfig from "../series.config";

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
    externalLinks: ExternalLinksSection,
  };

  // Render remaining sections based on series configuration (excluding about since it's rendered first)
  const renderRemainingSections = () => {
    return seriesConfig.sectionOrder
      .filter((sectionId) => sectionId !== "about" && seriesConfig.enabledSections[sectionId])
      .map((sectionId) => {
        const SectionComponent = sectionComponents[sectionId];
        return SectionComponent ? <SectionComponent key={sectionId} /> : null;
      });
  };

  // Scroll to hash target on mount if present
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const elem = document.getElementById(id);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-8"
    >
      <SEO canonicalPath="/" />
      <div className="wiki-content">
        {/* Main About Section with title "Naman Deep Gilhotra 'Kranti'" */}
        <AboutSection />

        {/* Render remaining sections based on series config */}
        {renderRemainingSections()}

        {/* Custom Sections */}
        {config.customSections.map((section) => (
          <CustomSection key={section.id} section={section} />
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;
