// Series Configuration
// This file defines the order in which sections appear on the homepage

const seriesConfig = {
    // Define the order of sections
    sectionOrder: [
        'about',              // About section with InfoBox
        'highlightedQuote',   // Wikipedia-style Highlighted Work / Poetry quote
        'lifeAndCareer',      // Life and Career section
        'education',          // Education section (B.Pharma, etc.)
        'poetrys',            // Notable poems & excerpts
        'awards',             // Awards and Honours
        'publishedWorks',     // Bibliography and published collections
        'literaryStyle',      // Literary style, themes and influences
        'mediaAppearances',   // Radio, Press, and cultural festivals
        'timeline',           // Chronology & milestones
        'media',              // Photo gallery preview
        'references',         // Wikipedia-style numbered references
        'externalLinks',      // External links and contact
    ],

    // Toggle individual sections on/off
    enabledSections: {
        about: true,
        highlightedQuote: true,
        lifeAndCareer: true,
        education: true,
        poetrys: true,
        awards: true,
        publishedWorks: true,
        literaryStyle: true,
        mediaAppearances: true,
        timeline: true,
        media: true,
        references: true,
        externalLinks: true,
    },
};

export default seriesConfig;
