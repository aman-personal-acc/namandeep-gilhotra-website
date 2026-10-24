import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ListOrdered, ChevronDown } from "lucide-react";
import seriesConfig from "../../series.config";

// Map section ids to human readable titles and anchor ids
const sectionMeta = {
  about: { title: "About me & background", anchor: "about" },
  highlightedQuote: { title: "Highlighted work", anchor: "highlighted-work" },
  lifeAndCareer: { title: "Life and career", anchor: "life-career" },
  education: { title: "Education & intellectual journey", anchor: "education" },
  poetrys: { title: "Poetry and notable works", anchor: "poetrys" },
  awards: { title: "Awards and recognition", anchor: "awards" },
  publishedWorks: { title: "Published works, books & journalism", anchor: "published-works" },
  literaryStyle: { title: "Ideological thought, style & vision", anchor: "literary-style" },
  mediaAppearances: { title: "Media appearances and press", anchor: "media-appearances" },
  timeline: { title: "Chronology & milestones", anchor: "timeline" },
  media: { title: "Media gallery", anchor: "media" },
  externalLinks: { title: "External links and contact", anchor: "external-links" },
};

const NavbarContentDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const activeItems = seriesConfig.sectionOrder
    .filter((id) => seriesConfig.enabledSections[id] && sectionMeta[id])
    .map((id) => ({
      id,
      ...sectionMeta[id],
    }));

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleItemClick = (e, anchor) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/" || location.pathname === "") {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${anchor}`);
      }
    } else {
      void navigate(`/#${anchor}`);
    }
  };

  if (activeItems.length === 0) return null;

  return (
    <div
      className="header-nav-dropdown"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`header-nav-link header-nav-dropdown-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Table of contents dropdown"
      >
        <ListOrdered size={18} />
        <span>Content</span>
        <ChevronDown size={14} className={`dropdown-chevron ${isOpen ? "open" : ""}`} />
      </button>

      {isOpen && (
        <div className="navbar-content-card" role="menu">
          <div className="navbar-content-card-header">
            <span className="navbar-content-card-title">Contents</span>
            <span className="navbar-content-card-badge">{activeItems.length} sections</span>
          </div>

          <ol className="navbar-content-card-list">
            {activeItems.map((item, index) => (
              <li key={item.id} className="navbar-content-card-item">
                <a
                  href={`#${item.anchor}`}
                  className="navbar-content-card-link"
                  onClick={(e) => handleItemClick(e, item.anchor)}
                  role="menuitem"
                >
                  <span className="navbar-content-card-num">{index + 1}</span>
                  <span className="navbar-content-card-text">{item.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default NavbarContentDropdown;
