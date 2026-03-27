import React from "react";
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
    <Section id="about" title={about.title}>
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
          </tbody>
        </table>
      </aside>

      {/* Content */}
      <div>
        {about.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
