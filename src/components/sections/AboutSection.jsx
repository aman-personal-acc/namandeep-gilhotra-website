import React from "react";
import { Quote } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

/**
 * Helper function to get the correct image source
 * Handles both local paths (/image.png) and remote URLs (https://...)
 */
const getImageSrc = (src) => {
  if (!src) return "";
  // If it's already a full URL, use it directly
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  // For local paths, use as-is (Vite will handle with base path)
  return src;
};

const AboutSection = () => {
  const { about, profile } = config;

  // Use about.image if available, otherwise fallback to profile.profileImage
  const imageSrc = getImageSrc(about.image || profile.profileImage);

  return (
    <Section id="about">
      {/* Primary Page Title replacing the standalone title */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1.25rem",
          borderBottom: "1px solid var(--heading-border)",
          paddingBottom: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        {about.title || profile.name}
      </h1>

      {/* InfoBox */}
      <aside className="infobox">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              marginTop: 0,
              marginBottom: "0.75rem",
              borderBottom: "none",
            }}
          >
            {profile.name}
          </h2>
          <img
            src={imageSrc}
            alt={profile.name}
            style={{ width: "100%", height: "auto", borderRadius: "0.25rem" }}
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = "none";
            }}
          />
        </div>

        <table>
          <tbody>
            <tr>
              <th>Born</th>
              <td>{profile.birthDate}</td>
            </tr>
            <tr>
              <th>Birthplace</th>
              <td>{profile.birthPlace}</td>
            </tr>
            <tr>
              <th>Occupation</th>
              <td>{profile.occupation}</td>
            </tr>
            <tr>
              <th>Years active</th>
              <td>{profile.yearsActive}</td>
            </tr>
            {profile.organizations && (
              <tr>
                <th>Organizations & Roles</th>
                <td>{profile.organizations}</td>
              </tr>
            )}
            {profile.genres && (
              <tr>
                <th>Genres</th>
                <td>{profile.genres}</td>
              </tr>
            )}
            {profile.languages && (
              <tr>
                <th>Languages</th>
                <td>{profile.languages}</td>
              </tr>
            )}
            {profile.almaMater && (
              <tr>
                <th>Alma mater</th>
                <td>{profile.almaMater}</td>
              </tr>
            )}
            {profile.notableWorks && (
              <tr>
                <th>Notable works</th>
                <td>{profile.notableWorks}</td>
              </tr>
            )}
          </tbody>
        </table>
      </aside>

      {/* Epigraph / Philosophy Quote directly above the core paragraph */}
      {about.epigraph && (
        <div className="wiki-epigraph-box">
          <Quote size={22} className="wiki-epigraph-icon" />
          <div className="wiki-epigraph-content">
            <blockquote className="wiki-epigraph-text">“{about.epigraph}”</blockquote>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div>
        {about.content && about.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

        {/* Subsections if available */}
        {about.subsections &&
          about.subsections.map((subsec, sIdx) => (
            <div key={sIdx} style={{ marginTop: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "0.25rem",
                  marginBottom: "0.75rem",
                }}
              >
                {subsec.heading}
              </h3>
              {subsec.paragraphs && subsec.paragraphs.map((p, pIdx) => <p key={pIdx}>{p}</p>)}
              {subsec.items && (
                <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8", marginBottom: "1rem" }}>
                  {subsec.items.map((item, iIdx) => (
                    <li key={iIdx} style={{ marginBottom: "0.5rem" }}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </Section>
  );
};

export default AboutSection;
