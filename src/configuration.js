// Configuration file for portfolio content
// Edit this file to update content across the entire website

const config = {
    // Profile Information
    profile: {
        name: "Namandeep Gilhotra",
        title: "Poet & Writer",
        profileImage: "/profile.png", // Path relative to public folder
        bio: "A contemporary poet and writer known for evocative verse and profound storytelling.",
        birthDate: "January 1, 1990",
        birthPlace: "Punjab, India",
        occupation: "Poet, Writer, Author",
        yearsActive: "2010–present",
    },

    // About Section
    about: {
        title: "About",
        image: "https://raw.githubusercontent.com/aman-personal-acc/namandeep-gilhotra-website/refs/heads/main/public/profile.png", // Can be local path or remote URL
        content: [
            "Namandeep Gilhotra is a contemporary poet and writer whose work explores themes of identity, belonging, and the human experience. Born in Punjab, India, Gilhotra's writing draws from a rich cultural heritage while addressing universal themes that resonate across borders.",
            "Known for a distinctive voice that blends traditional poetic forms with modern sensibilities, Gilhotra has garnered recognition for contributions to contemporary literature. Their work has been featured in numerous literary journals and anthologies.",
        ],
    },

    // Life and Career Section
    lifeAndCareer: {
        title: "Life and Career",
        sections: [
            {
                heading: "Early Life",
                content: [
                    "Gilhotra was born and raised in Punjab, India, where they developed an early appreciation for poetry and storytelling. Influenced by both classical Punjabi literature and contemporary global voices, they began writing at a young age.",
                ],
            },
            {
                heading: "Literary Career",
                content: [
                    "Gilhotra's literary career began in earnest in 2010 with the publication of their first collection of poems. Since then, they have published multiple works that have been critically acclaimed for their emotional depth and linguistic precision.",
                    "Their writing often explores the intersection of personal and collective memory, drawing on experiences of migration, cultural identity, and the search for meaning in a rapidly changing world.",
                ],
            },
            {
                heading: "Recognition",
                content: [
                    "Over the years, Gilhotra has received several awards and honors for their contributions to literature. Their work continues to inspire readers and fellow writers alike.",
                ],
            },
        ],
    },

    // Poetrys Section
    poetrys: {
        title: "Poetrys by Namandeep Gilhotra",
        poems: [
            {
                title: "Whispers of Home",
                year: "2015",
                excerpt: "In the quiet corners of memory,\nWhere shadows dance with light,\nI find the echoes of a place\nThat lives beyond the night.",
            },
            {
                title: "Between Two Worlds",
                year: "2018",
                excerpt: "Suspended in the space between,\nNeither here nor there,\nI carry stories in my bones,\nAnd songs upon the air.",
            },
            {
                title: "The Language of Silence",
                year: "2020",
                excerpt: "Words unspoken hold the weight\nOf all we cannot say,\nIn silence, truth finds its voice,\nAnd night gives birth to day.",
            },
        ],
    },

    // Media Section (Gallery)
    media: {
        title: "Media",
        description: "A collection of photographs and moments",
        images: [
            // You can use local paths (relative to public folder)
            "https://raw.githubusercontent.com/aman-personal-acc/namandeep-gilhotra-website/refs/heads/main/public/profile.png",
            // Or remote URLs
            "https://raw.githubusercontent.com/ServiceStack/images/refs/heads/master/hero/photo-1421789665209-c9b2a435e3dc.jpg",
            "https://raw.githubusercontent.com/ServiceStack/images/refs/heads/master/hero/photo-1429552054921-018e433d7d34.jpg",
            "https://raw.githubusercontent.com/ServiceStack/images/refs/heads/master/hero/photo-1464621922360-27f3bf0eca75.jpg",
            // Add more images as needed
        ],
        previewCount: 4, // Number of images to show on homepage before "More" button
    },

    // Education Section
    education: {
        title: "Education",
        institutions: [
            {
                degree: "Master of Arts in Creative Writing",
                institution: "University of Punjab",
                year: "2012-2014",
                description: "Specialized in contemporary poetry and literary criticism.",
            },
            {
                degree: "Bachelor of Arts in English Literature",
                institution: "Government College",
                year: "2008-2012",
                description: "Graduated with honors, focusing on modern and classical literature.",
            },
        ],
    },

    // Awards and Achievements Section
    awards: {
        title: "Awards and Achievements",
        items: [
            {
                year: "2021",
                title: "Literary Excellence Award",
                organization: "National Poetry Foundation",
                description: "Recognized for outstanding contribution to contemporary poetry.",
            },
            {
                year: "2019",
                title: "Emerging Poet Prize",
                organization: "International Writers Guild",
                description: "Awarded for innovative poetic voice and style.",
            },
            {
                year: "2017",
                title: "Best Poetry Collection",
                organization: "Regional Literary Society",
                description: "Honored for the collection 'Whispers of Home'.",
            },
        ],
    },

    // Custom Sections (Add your own sections here)
    customSections: [
        // Example custom section:
        // {
        //   id: "awards",
        //   title: "Awards and Honors",
        //   content: [
        //     "2021 - Literary Excellence Award",
        //     "2019 - Emerging Poet Prize",
        //   ],
        // },
    ],
};

export default config;
