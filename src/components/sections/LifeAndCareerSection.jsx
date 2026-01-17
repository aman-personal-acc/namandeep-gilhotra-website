import React from 'react';
import Section from '../layout/Section';
import config from '../../configuration';

const LifeAndCareerSection = () => {
  const { lifeAndCareer } = config;
  
  return (
    <Section id="life-career" title={lifeAndCareer.title}>
      {lifeAndCareer.sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <h3>{section.heading}</h3>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
    </Section>
  );
};

export default LifeAndCareerSection;
