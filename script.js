// ============================================
// PORTFOLIO SCRIPT
// ============================================


// ============================================
// DARK MODE TOGGLE
// ============================================
// Toggles a `dark-mode` class on <body>. The CSS
// variables in styles.css do all the visual work.
// Starts in dark mode if the device prefers it.

const themeToggle = document.querySelector("#theme-toggle");

function setDarkMode(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    themeToggle.textContent = isDark ? "Light" : "Dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

if (themeToggle) {
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    themeToggle.addEventListener("click", () => {
        setDarkMode(!document.body.classList.contains("dark-mode"));
    });
}


// ============================================
// PROJECTS — rendered from a JS array
// ============================================
// To add a project, push another object into this
// array. `featured: true` gives it the raised panel.

const projects = [
    {
        title: "MyInternLog",
        kind: "iOS app",
        featured: true,
        stack: "Swift, SwiftUI, SwiftData, PhotosUI, XCTest",
        description:
            "A native iOS app for logging what you do at an internship so you can recap it for your resume when it ends. Fully local by design: everything is stored on device with SwiftData, with no account or backend.",
        details: [
            "Quick Notes with a tag-based categorization system",
            "Daily Reflections built on a relational data model (Reflection to ReflectionAnswer) with cascade delete",
            "Study Queue for saving topics to learn and marking them reviewed",
            "Photo attachments imported with PhotosUI and stored on device",
            "Unit tests with XCTest for model logic, weekly recaps, and data export",
            "Built using an AI-assisted development workflow (Claude Code)",
        ],
        link: "https://github.com/codewithty/MyInternLog",
        linkText: "View on GitHub",
    },
    {
        title: "Habit Tracker",
        kind: "Team web app",
        stack: "React, Vite, Node.js, Express",
        description:
            "A team capstone habit-tracking web app: sign in, track daily habits with streaks and personal bests, and see a month calendar colored by completion.",
        details: [
            "Built by a team of six, with a React 19 and Vite frontend and a Node.js/Express backend for auth and daily quotes",
            "My contributions: initial backend API endpoints, health endpoints and port configuration, and app layout updates",
        ],
        link: "https://github.com/Jonathon10/HABIT_TRACKER",
        linkText: "View the team repo",
    },
    {
        title: "KovaaK's Tracker",
        kind: "Web app",
        stack: "HTML, CSS, JavaScript, localStorage",
        description:
            "A web app for logging KovaaK's aim-training sessions, built with vanilla JavaScript and dynamic DOM rendering.",
        details: [
            "Entry form with validation for scenario, score, category, and subcategory",
            "Build up a session, then complete it with a date and session length",
            "Session history saved in localStorage and re-rendered on page load, with per-session delete",
        ],
        link: "https://github.com/codewithty/kovaaks-tracker",
        linkText: "View on GitHub",
    },
];

const list = document.querySelector("#projects-list");

if (list) {
    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = project.featured ? "project project--featured" : "project";

        const kind = document.createElement("p");
        kind.className = "project__kind";
        kind.textContent = project.kind;

        const body = document.createElement("div");
        body.className = "project__body";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const stack = document.createElement("p");
        stack.className = "project__stack";
        stack.textContent = project.stack;

        const description = document.createElement("p");
        description.textContent = project.description;

        body.append(title, stack, description);

        if (project.details) {
            const details = document.createElement("ul");
            details.className = "project__details";
            project.details.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                details.appendChild(li);
            });
            body.appendChild(details);
        }

        if (project.link) {
            const link = document.createElement("a");
            link.className = "project__link";
            link.href = project.link;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = project.linkText || "View project";
            body.appendChild(link);
        }

        card.append(kind, body);
        list.appendChild(card);
    });
}


// ============================================
// FOOTER YEAR
// ============================================

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
