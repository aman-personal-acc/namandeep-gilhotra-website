import React from "react";
import { Quote } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const HighlightedQuoteSection = () => {
  const { highlightedQuote } = config;

  if (!highlightedQuote || !highlightedQuote.quote) return null;

  return (
    <Section id="highlighted-work" title={highlightedQuote.title || "Highlighted Work"}>
      <div className="wiki-quote-box">
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
          <Quote
            size={28}
            color="var(--link-color)"
            style={{ flexShrink: 0, opacity: 0.7, marginTop: "0.2rem" }}
          />
          <div style={{ flex: 1 }}>
            <blockquote className="wiki-quote-text">{highlightedQuote.quote}</blockquote>
            <cite className="wiki-quote-author">
              — {highlightedQuote.author}
              {highlightedQuote.work && (
                <span className="wiki-quote-work">, {highlightedQuote.work}</span>
              )}
            </cite>
            {highlightedQuote.context && (
              <p className="wiki-quote-context">
                <strong>Context:</strong> {highlightedQuote.context}
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HighlightedQuoteSection;
