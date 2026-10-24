import React from "react";
import { Radio, Newspaper, Award, Mic } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const MediaAppearancesSection = () => {
  const { mediaAppearances } = config;

  if (!mediaAppearances || !mediaAppearances.items) return null;

  const getMediaIcon = (medium) => {
    const m = medium.toLowerCase();
    if (m.includes("radio")) return <Radio size={20} color="var(--link-color)" />;
    if (m.includes("print") || m.includes("newspaper"))
      return <Newspaper size={20} color="var(--link-color)" />;
    if (m.includes("festival")) return <Mic size={20} color="#e07a5f" />;
    return <Award size={20} color="#3d85c6" />;
  };

  return (
    <Section id="media-appearances" title={mediaAppearances.title || "Media Appearances & Press"}>
      <div className="grid-2">
        {mediaAppearances.items.map((item, index) => (
          <div key={index} className="card">
            <div className="card-content-row">
              <div className="card-icon">{getMediaIcon(item.medium)}</div>
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
                  <h3 className="mt-0" style={{ marginBottom: "0.25rem", fontSize: "1.05rem" }}>
                    {item.title}
                  </h3>
                  {item.year && (
                    <span className="caption" style={{ fontWeight: "600", fontStyle: "normal" }}>
                      {item.year}
                    </span>
                  )}
                </div>
                <p className="caption" style={{ marginBottom: "0.5rem" }}>
                  {item.organization} • <strong>{item.medium}</strong>
                </p>
                <p className="mb-0" style={{ fontSize: "0.92rem" }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MediaAppearancesSection;
