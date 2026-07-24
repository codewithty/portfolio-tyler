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
            "A native iOS app for logging internship accomplishments, reflections, and study topics. Fully local by design — all data is stored on device with SwiftData, with no account or backend required.",
        details: [
            "Quick Notes with a tag-based categorization system",
            "Daily Reflections built on a relational data model (Reflection → ReflectionAnswer) with cascade delete",
            "Study Queue for saving topics to learn and marking them reviewed",
            "Photo attachments imported via PhotosUI and stored locally on device",
            "Built using an AI-assisted development workflow (Claude Code)",
        ],
        link: "https://github.com/codewithty/MyInternLog",
        tags: ["Swift", "SwiftUI", "SwiftData", "PhotosUI"],
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
            "A web app for logging KovaaK's aim-training sessions: record scenario scores by category, group them into completed sessions, and review past sessions persisted with localStorage.",
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

        card.append(title, description);

        if (project.details) {
            const detailList = document.createElement("ul");
            detailList.className = "project-card__details";
            project.details.forEach((item) => {
                const detail = document.createElement("li");
                detail.textContent = item;
                detailList.appendChild(detail);
            });
            card.appendChild(detailList);
        }

        card.appendChild(tagList);

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
