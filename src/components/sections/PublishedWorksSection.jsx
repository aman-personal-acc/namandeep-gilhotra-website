import React from "react";
import { Book, Library, Newspaper } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const PublishedWorksSection = () => {
  const { publishedWorks } = config;

  if (!publishedWorks || !publishedWorks.categories) return null;

  const getCategoryIcon = (heading) => {
    if (heading.toLowerCase().includes("antholog") || heading.toLowerCase().includes("संकलन")) {
      return <Library size={18} color="var(--link-color)" />;
    }
    if (heading.toLowerCase().includes("journal") || heading.toLowerCase().includes("periodical") || heading.toLowerCase().includes("पत्रिका")) {
      return <Newspaper size={18} color="var(--link-color)" />;
    }
    return <Book size={18} color="var(--link-color)" />;
  };

  return (
    <Section id="published-works" title={publishedWorks.title || "Published Works & Bibliography"}>
      {publishedWorks.description && (
        <p className="caption" style={{ marginBottom: "1.25rem", fontStyle: "normal" }}>
          {publishedWorks.description}
        </p>
      )}

      {publishedWorks.categories.map((category, catIdx) => (
        <div key={catIdx} style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            {getCategoryIcon(category.heading)}
            <h3 style={{ margin: 0, fontSize: "1.15rem" }}>{category.heading}</h3>
          </div>

          <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
            {category.items.map((item, itemIdx) => (
              <li key={itemIdx} style={{ marginBottom: "0.6rem" }}>
                <strong>{item.title}</strong>
                {item.year && <span> ({item.year})</span>}
                {item.editor && <span>, {item.editor}</span>}
                {item.publisher && <span>, {item.publisher}</span>}
                {item.volume && <span>, {item.volume}</span>}
                {item.details && (
                  <span style={{ color: "var(--text-secondary)", display: "block", fontSize: "0.9rem" }}>
                    {item.details}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default PublishedWorksSection;
