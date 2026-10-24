import React from "react";
import Section from "../layout/Section";
import config from "../../configuration";

const ReferencesSection = () => {
  const { references } = config;

  if (!references || !references.citations) return null;

  return (
    <Section id="references" title={references.title || "References"}>
      <ol className="references-list">
        {references.citations.map((cite) => (
          <li key={cite.id} id={`ref-${cite.id}`}>
            <span style={{ color: "var(--link-color)", marginRight: "0.25rem" }}>^</span>
            {cite.text}
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default ReferencesSection;
