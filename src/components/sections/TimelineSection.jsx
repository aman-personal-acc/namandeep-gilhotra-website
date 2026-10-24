import React from "react";
import Section from "../layout/Section";
import config from "../../configuration";

const TimelineSection = () => {
  const { timeline } = config;

  if (!timeline || !timeline.milestones) return null;

  return (
    <Section id="timeline" title={timeline.title || "Chronology & Milestones"}>
      <div className="timeline-list">
        {timeline.milestones.map((milestone, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-period">{milestone.period}</div>
            <div className="timeline-title">{milestone.title}</div>
            <div className="timeline-desc">{milestone.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TimelineSection;
