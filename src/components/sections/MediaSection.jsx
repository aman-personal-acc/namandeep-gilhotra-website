import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Section from "../layout/Section";
import config from "../../configuration";

const MediaSection = () => {
  const { media } = config;
  const previewImages = media.images.slice(0, media.previewCount);

  return (
    <Section id="media" title={media.title}>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
        {media.description}
      </p>

      <div className="grid-4" style={{ marginBottom: "1.5rem" }}>
        {previewImages.map((imageSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="gallery-item"
          >
            <img
              src={imageSrc}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {media.images.length > media.previewCount && (
        <div className="text-center">
          <Link to="/gallery" className="btn btn-primary">
            View All ({media.images.length} images)
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </Section>
  );
};

export default MediaSection;
