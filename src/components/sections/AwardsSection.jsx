import React from "react";
import { Award } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const AwardsSection = () => {
  const { awards } = config;

  return (
    <Section id="awards" title={awards.title}>
      <div className="grid-2">
        {awards.items.map((award, index) => (
          <div key={index} className="card">
            <div className="card-content-row">
              <div className="card-icon">
                <Award size={20} color="#FFD700" />
              </div>
              <div className="card-content-flex">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <h3 className="mt-0" style={{ marginBottom: "0.25rem" }}>
                    {award.title}
                  </h3>
                  <span
                    className="caption"
                    style={{ fontWeight: "600", fontStyle: "normal" }}
                  >
                    {award.year}
                  </span>
                </div>
                <p className="caption">{award.organization}</p>
                <p className="mb-0">{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AwardsSection;
