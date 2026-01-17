import React from 'react';
import { motion } from 'motion/react';

/**
 * Reusable section wrapper with animations
 */
const Section = ({ 
  id,
  title, 
  children, 
  ...props 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {title && <h2>{title}</h2>}
      {children}
    </motion.section>
  );
};

export default Section;
