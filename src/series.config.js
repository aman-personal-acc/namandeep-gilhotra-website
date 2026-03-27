// Series Configuration
// This file defines the order in which sections appear on the homepage

const seriesConfig = {
    // Define the order of sections
    // Available sections: 'about', 'lifeAndCareer', 'education', 'poetrys', 'awards', 'media'
    sectionOrder: [
        'about',           // About section with InfoBox
        'lifeAndCareer',   // Life and Career section
        'education',       // Education section
        'poetrys',         // Poetrys by Namandeep Gilhotra
        'awards',          // Awards and Achievements
        'media',           // Media gallery
    ],

    // You can also disable sections by removing them from the array above
    // or by setting them to false here:
    enabledSections: {
        about: true,
        lifeAndCareer: true,
        education: true,
        poetrys: true,
        awards: true,
        media: true,
    },
};

export default seriesConfig;
