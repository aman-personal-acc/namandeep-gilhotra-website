import React from "react";
import { GraduationCap } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const EducationSection = () => {
  const { education } = config;

  return (
    <Section id="education" title={education.title}>
      <div className="grid-2">
        {education.institutions.map((edu, index) => (
          <div key={index} className="card">
            <div className="card-content-row">
              <div className="card-icon">
                <GraduationCap size={20} color="var(--link-color)" />
              </div>
              <div className="card-content-flex">
                <h3 className="mt-0">{edu.degree}</h3>
                <p className="caption">
                  {edu.institution} • {edu.year}
                </p>
                <p className="mb-0">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
