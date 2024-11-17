// Project data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        image: "../assets/project-1.png",
        tags: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
        link: "https://github.com/TeddyMeg/Ecommerce_MERN"
    },
    {
        title: "Visual Learners Website",
        description: "Visual Learners is a website and youtube channel created with the sole purpose of delivering high-quality tutorials regarding current Computer Vision and Deep Learning topics.",
        image: "../assets/project-2.png",
        tags: ["Wix", "YouTube", "Next.js"],
        link: "https://www.visual-learners.com"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and contact information built with React and Tailwind.",
        image: "../assets/project-3.png",
        tags: ["CSS", "Vite", "React", "Tailwind", "Framer Motion"],
        link: "https://github.com/TeddyMeg/My-Portfolio"
    },
    {
        title: "EthioMusic Website",
        description: "EthioMusic is a music streaming platform that allows users to stream and listen to music from a wide range of genres and artists.",
        image: "../assets/project-4.png",
        tags: ["JavaScript", "CSS", "React", "Express", "MongoDB"],
        link: "https://github.com/TeddyMeg/EthioMusic"
    },
    {
        title: "MERN Stack Movies App",
        description: "A MERN Stack Movies App that allows users to search for movies, view details, and add them to their favorites list.  This project is a full-stack movie application built using the MERN stack (MongoDB, Express.js, React, and Node.js).",
        image: "../assets/project-5.png",
        tags: ["React", "CSS", "TMDB API", "Express", "MongoDB"],
        link: "https://github.com/TeddyMeg/Movie_MERN"
    },
];

// Render project cards
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                    <i data-lucide="external-link"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });

    // Reinitialize Lucide icons for dynamically added content
    lucide.createIcons();
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);