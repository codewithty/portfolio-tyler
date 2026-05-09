console.log("Java Script Running");
// ============================================
// PORTFOLIO SCRIPT
// ============================================

console.log("Portfolio script loaded ✅");


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
        console.log(`Theme toggled → ${isDark ? "dark" : "light"}`);
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
        title: "Personal Portfolio",
        description:
            "This very page — built from scratch using semantic HTML, CSS Grid + custom properties, and vanilla JavaScript. My first lab in the cohort.",
        link: "#",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Kovaaks Tracker - WIP",
        description: "A web application for tracking KovaaK’s aim training benchmarks, scores, and progression over time.",
        link: "https://codewithty.github.io/kovaaks-tracker/",
        tags: ["HTML", "JavaScript"],
    },
    {
        title: "Magik Trading Card",
        description: "A simple web page with Magik as a psudeo trading card",
        link: "https://codewithty.github.io/-Magik-trading-card-tyler/",
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

        const link = document.createElement("a");
        link.className = "project-card__link";
        link.href = project.link;
        link.textContent = "View project →";

        card.append(title, description, tagList, link);
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
