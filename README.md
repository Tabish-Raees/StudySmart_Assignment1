# StudySmart

StudySmart is a responsive, static study-planner prototype for presenting assignments by subject, deadline, estimated time, and priority. This version uses **HTML5, CSS3, and Bootstrap CSS** with an emerald theme in place of LearnFlix's red. It contains no JavaScript.

## Assignment 1 pages

- `index.html` — Home page with a personalized welcome, progress preview, and links to the planner and profile.
- `planner.html` — Study Planner page with a sample task dashboard and an explanation of the recommended task order.
- `register.html` — Register page with a static example form; it does not create an account or save submitted details.

Each HTML page has its own stylesheet: `css/home.css`, `css/planner.css`, and `css/register.css`.

## Features

- Present sample tasks with a subject, due date, estimated minutes, priority, and completion state.
- Explain a recommended order: overdue work first, then earlier due dates, then student-selected priority.
- Show an illustrative progress summary.
- Demonstrate responsive page layouts using Bootstrap CSS and custom CSS.

## Files

```text
StudySmart_Assignment1/
├── index.html
├── planner.html
├── register.html
├── css/
│   ├── home.css
│   ├── planner.css
│   └── register.css
├── README.md
└── AI_USAGE_DISCLOSURE.md
```

## Run locally

Open this folder in VS Code and launch `index.html` with Live Server. Bootstrap and the optional web fonts load from CDNs, so those visual resources need an internet connection.

## Scope and limitations

This is a static front-end prototype. Task examples and progress values are illustrative; the pages do not add or save tasks, send reminders, connect to a calendar, or create accounts.

## AI usage log

| Tool | What I asked | What changed / learning plan |
| --- | --- | --- |
| OpenAI Codex | Use the StudySmart project documentation to build a three-page project with three separate stylesheets and change the LearnFlix red theme to emerald. | Codex assisted with the HTML structure and CSS layout for the Home, Study Planner, and Register pages. The planner is a static sample design without JavaScript. I will review the code and learn how the page structure and styles work so I can explain them. |

## Teacher approval evidence

Add the teacher-approved project plan or a link to the approval email/screenshot here before submission. No approval evidence was included with the project documentation.
