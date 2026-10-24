import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const ExternalLinksSection = () => {
  const { externalLinks } = config;

  if (!externalLinks || !externalLinks.links) return null;

  return (
    <Section id="external-links" title={externalLinks.title || "External Links & Contact"}>
      <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
        {externalLinks.links.map((link, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            {link.isInternal ? (
              <Link
                to={link.url}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontWeight: "600",
                }}
              >
                <span>{link.title}</span>
                <ArrowRight size={14} />
              </Link>
            ) : (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontWeight: "600",
                }}
              >
                <span>{link.title}</span>
                <ExternalLink size={14} />
              </a>
            )}
            {link.description && (
              <span style={{ color: "var(--text-secondary)", marginLeft: "0.5rem" }}>
                – {link.description}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ExternalLinksSection;
