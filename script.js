// ============================================
// PORTFOLIO SCRIPT
// ============================================


// ============================================
// DARK MODE TOGGLE
// ============================================
// Toggles a `dark-mode` class on <body>. The CSS
// variables in styles.css do all the visual work.

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
} else {
    console.warn("No #theme-toggle button found.");
}


// ============================================
// PROJECTS — rendered from a JS array
// ============================================
// To add a new project, just push another object
// into this array. The DOM is built from it below.

const projects = [
    {
        title: "MyInternLog",
        description:
            "An iOS application built with SwiftUI that helps interns track accomplishments, reflections, learning progress, and resume-ready achievements throughout an internship.",
        link: "https://github.com/codewithty/MyInternLog",
        tags: ["Swift", "SwiftUI"],
    },
    {
        title: "Habit Tracker",
        description:
            "A web application for tracking daily habits and practicing consistent progress over time.",
        link: "https://github.com/Jonathon10/HABIT_TRACKER",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "KovaaK's Tracker",
        description:
            "A web application for tracking KovaaK's aim training benchmarks, scores, and progression over time.",
        link: "https://github.com/codewithty/kovaaks-tracker",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Portfolio Website",
        description:
            "This portfolio website, built from scratch with semantic HTML, CSS, and vanilla JavaScript to showcase my projects and growth.",
        link: ".",
        tags: ["HTML", "CSS"],
    }
];

const grid = document.querySelector("#projects-grid");

if (grid) {
    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tagList = document.createElement("div");
        tagList.className = "project-card__tags";
        project.tags.forEach((label) => {
            const tag = document.createElement("span");
            tag.className = "project-card__tag";
            tag.textContent = label;
            tagList.appendChild(tag);
        });

        card.append(title, description, tagList);

        if (project.link) {
            const link = document.createElement("a");
            link.className = "project-card__link";
            link.href = project.link;
            link.textContent = "View project →";
            card.appendChild(link);
        }

        grid.appendChild(card);
    });
}


// ============================================
// FOOTER YEAR
// ============================================

const yearEl = document.querySelector("#year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
