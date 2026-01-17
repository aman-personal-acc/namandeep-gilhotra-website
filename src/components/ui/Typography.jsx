import React from 'react';

/**
 * Typography components for Wikipedia-style text
 */

export const Heading1 = ({ children, className = '', ...props }) => (
  <h1 
    className={`text-3xl md:text-4xl font-serif border-b border-border pb-2 mb-4 ${className}`}
    {...props}
  >
    {children}
  </h1>
);

export const Heading2 = ({ children, className = '', ...props }) => (
  <h2 
    className={`text-2xl md:text-3xl font-serif border-b border-border pb-1 mb-3 mt-6 ${className}`}
    {...props}
  >
    {children}
  </h2>
);

export const Heading3 = ({ children, className = '', ...props }) => (
  <h3 
    className={`text-xl md:text-2xl font-serif mb-2 mt-4 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const Heading4 = ({ children, className = '', ...props }) => (
  <h4 
    className={`text-lg md:text-xl font-serif mb-2 mt-3 ${className}`}
    {...props}
  >
    {children}
  </h4>
);

export const Paragraph = ({ children, className = '', ...props }) => (
  <p 
    className={`text-base leading-relaxed mb-4 text-foreground ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const Caption = ({ children, className = '', ...props }) => (
  <p 
    className={`text-sm text-foreground-secondary italic ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const Link = ({ children, href, className = '', ...props }) => (
  <a 
    href={href}
    className={`text-link hover:underline ${className}`}
    {...props}
  >
    {children}
  </a>
);
