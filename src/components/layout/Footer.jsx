import React from 'react';
import config from '../../configuration';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-center">
          <p>© {new Date().getFullYear()} {config.profile.name}. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Designed and Maintained by -{' '}
            <a
              href="https://amanakhter.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: '600', color: 'var(--link-color)' }}
            >
              Aman Akhter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
