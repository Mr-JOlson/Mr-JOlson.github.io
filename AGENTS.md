# AGENTS.md - Instructions for Grok Build (Composer 2.5) and Other AI Agents

## Project Overview
- This is the official **Physicsy** website for Jason Olson (Gulf Breeze High School science teacher).
- Purpose: Professional, clean, fast-loading site for students, parents, and colleagues featuring class resources, blog posts, robotics club info, writing projects, and AI/philosophy content.
- Stack: Jekyll + GitHub Pages (static site). Goal = maximum maintainability with weekly updates.
- Tone: Professional yet approachable, clear, encouraging for students. Emphasize excellence, first-principles thinking, and curiosity.

## Jekyll & GitHub Pages Rules
- Build command: `bundle exec jekyll build` (or `jekyll build`).
- Never commit the `_site/` folder or `.jekyll-cache/`.
- Use only GitHub Pages supported plugins by default. For advanced plugins, we will use GitHub Actions.
- All blog/news posts go in `_posts/` with filename format `YYYY-MM-DD-descriptive-title.md`.
- Use proper YAML front matter on every page/post.
- Relative links preferred. Optimize all images.

## Folder Structure Expectations (Preferred)
- `/` → root files (_config.yml, AGENTS.md, index.md, etc.)
- `/_posts/` → blog and news
- `/_layouts/` → custom layouts
- `/_includes/` → reusable components (header, footer, nav)
- `/assets/` → css, js, images
- `/assets/css/` → main styles
- `/assets/img/` → optimized images

## Coding & Content Standards
- Semantic HTML5, mobile-first responsive design.
- Minimal, clean CSS (Tailwind or plain if we choose).
- Markdown with proper headings, lists, tables, and code blocks.
- All new content must be high-quality, accurate, and aligned with teaching/STEM values.
- Before committing major changes: Run local build and suggest testing.

## Workflow Requirements for Grok Build
- Always output a clear **PLAN** first before editing files.
- Show diffs/summaries of changes.
- Use feature branches for layout redesigns or major refactors (`git checkout -b feature/new-design`).
- After changes, remind to run `bundle exec jekyll serve` for local preview.
- Respect existing content — improve organization without losing information.

## Content Guidelines
- Prioritize clarity and educational value.
- Include calls to action for students (e.g., "Try this practice problem", links to resources).
- Update copyright/year dynamically where possible.
- SEO-friendly titles and descriptions.

This file evolves — suggest improvements when needed.