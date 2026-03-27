import React from 'react';

/**
 * Card component with variants
 */
const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-background border border-border',
    elevated: 'bg-background border border-border shadow-md',
    infobox: 'bg-infobox border border-border',
  };
  
  const variantStyles = variants[variant] || variants.default;
  
  return (
    <div 
      className={`rounded-md p-4 ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-serif font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export default Card;
