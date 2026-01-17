import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border mt-12">
      <div className="container py-6">
        <div className="text-center text-sm text-foreground-secondary">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="mt-2">
            Built with React, Tailwind CSS, and Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
