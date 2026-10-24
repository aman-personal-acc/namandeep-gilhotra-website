import React from "react";
import { Feather, Sparkles } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const LiteraryStyleSection = () => {
  const { literaryStyle } = config;

  if (!literaryStyle) return null;

  return (
    <Section id="literary-style" title={literaryStyle.title || "Literary Style and Themes"}>
      {literaryStyle.description && Array.isArray(literaryStyle.description) ? (
        literaryStyle.description.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
      ) : (
        <p>{literaryStyle.description}</p>
      )}

      <div className="grid-2" style={{ marginTop: "1.25rem" }}>
        {literaryStyle.themes && literaryStyle.themes.length > 0 && (
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <Sparkles size={18} color="var(--link-color)" />
              <h3 className="mt-0" style={{ fontSize: "1.05rem", marginBottom: 0 }}>
                Core Themes (प्रमुख विषय)
              </h3>
            </div>
            <div>
              {literaryStyle.themes.map((theme, idx) => (
                <span key={idx} className="tag-badge">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        )}

        {literaryStyle.influences && literaryStyle.influences.length > 0 && (
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <Feather size={18} color="var(--link-color)" />
              <h3 className="mt-0" style={{ fontSize: "1.05rem", marginBottom: 0 }}>
                Literary Influences (प्रेरणा स्रोत)
              </h3>
            </div>
            <div>
              {literaryStyle.influences.map((inf, idx) => (
                <span key={idx} className="tag-badge">
                  {inf}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default LiteraryStyleSection;
