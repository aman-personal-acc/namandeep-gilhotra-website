import React, { useState } from "react";
import seriesConfig from "../../series.config";
import config from "../../configuration";

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Map section ids to human readable titles and anchor ids
  const sectionMeta = {
    about: { title: "About me & background", anchor: "about" },
    highlightedQuote: { title: "Highlighted work", anchor: "highlighted-work" },
    lifeAndCareer: { title: "Life and career", anchor: "life-career" },
    education: { title: "Education & intellectual journey", anchor: "education" },
    poetrys: { title: "Poetry and notable works", anchor: "poetrys" },
    awards: { title: "Awards and recognition", anchor: "awards" },
    publishedWorks: { title: "Published works, books & journalism", anchor: "published-works" },
    literaryStyle: { title: "Ideological thought, style & vision", anchor: "literary-style" },
    mediaAppearances: { title: "Media appearances and press", anchor: "media-appearances" },
    timeline: { title: "Chronology & milestones", anchor: "timeline" },
    media: { title: "Media gallery", anchor: "media" },
    externalLinks: { title: "External links and contact", anchor: "external-links" },
  };

  const activeItems = seriesConfig.sectionOrder
    .filter((id) => seriesConfig.enabledSections[id] && sectionMeta[id])
    .map((id) => ({
      id,
      ...sectionMeta[id],
    }));

  if (activeItems.length === 0) return null;

  return (
    <div className="wiki-toc" role="navigation" aria-label="Table of contents">
      <div className="wiki-toc-header">
        <span>Contents</span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="wiki-toc-toggle"
          aria-expanded={isOpen}
        >
          [{isOpen ? "hide" : "show"}]
        </button>
      </div>

      {isOpen && (
        <ol className="wiki-toc-list">
          {activeItems.map((item, index) => (
            <li key={item.id} className="wiki-toc-item">
              <a href={`#${item.anchor}`} className="wiki-toc-link">
                <span className="wiki-toc-num">{index + 1}</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default TableOfContents;
