import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Home as HomeIcon, Image as ImageIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import config from "../../configuration";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container">
        <div className="header-inner">
          {/* Logo/Title */}
          <Link to="/" className="header-logo">
            <div className="header-logo-icon">
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: "20px",
                  height: "20px",
                  fill: "var(--text-primary)",
                }}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <span className="header-logo-text">{config.profile.name}</span>
          </Link>

          {/* Navigation */}
          <nav className="header-nav">
            <Link to="/" className="header-nav-link">
              <HomeIcon size={18} />
              <span>Home</span>
            </Link>
            <Link to="/gallery" className="header-nav-link">
              <ImageIcon size={18} />
              <span>Gallery</span>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={18} color="var(--text-primary)" />
              ) : (
                <Sun size={18} color="var(--text-primary)" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
