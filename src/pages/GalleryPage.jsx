import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import config from "../configuration";

const GalleryPage = () => {
  const { media } = config;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="container py-8"
    >
      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <Link
          to="/"
          className="btn btn-ghost"
          style={{ marginBottom: "1rem", display: "inline-flex" }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1>{media.title}</h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
          {media.description}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid-4">
        {media.images.map((imageSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
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
    </motion.div>
  );
};

export default GalleryPage;
