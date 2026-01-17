import React from 'react';

/**
 * Button component with multiple variants
 * Variants: primary, secondary, ghost, link
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-wiki-blue hover:bg-wiki-blue-dark text-white focus:ring-wiki-blue',
    secondary: 'bg-background-secondary hover:bg-border text-foreground border border-border focus:ring-border',
    ghost: 'hover:bg-background-secondary text-foreground',
    link: 'text-link hover:underline hover:text-wiki-blue-dark',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };
  
  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
