import React from 'react';
import Section from '../layout/Section';

/**
 * Generic section renderer for custom sections from configuration
 */
const CustomSection = ({ section }) => {
  return (
    <Section id={section.id} title={section.title}>
      {Array.isArray(section.content) ? (
        section.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      ) : (
        <p>{section.content}</p>
      )}
    </Section>
  );
};

export default CustomSection;
