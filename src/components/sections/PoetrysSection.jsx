import React from "react";
import { BookOpen } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const PoetrysSection = () => {
  const { poetrys } = config;

  return (
    <Section id="poetrys" title={poetrys.title}>
      <div className="grid-2">
        {poetrys.poems.map((poem, index) => (
          <div key={index} className="card">
            <div
              className="card-content-row"
              style={{ marginBottom: "0.75rem" }}
            >
              <BookOpen
                size={20}
                color="var(--link-color)"
                style={{ flexShrink: 0 }}
              />
              <div className="card-content-flex">
                <h3 className="mt-0" style={{ marginBottom: "0.25rem" }}>
                  {poem.title}
                </h3>
                <p className="caption mb-0">{poem.year}</p>
              </div>
            </div>
            <p
              style={{
                whiteSpace: "pre-line",
                fontStyle: "italic",
                lineHeight: "1.8",
                marginBottom: 0,
                fontSize: "0.95rem",
              }}
            >
              {poem.excerpt}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PoetrysSection;
