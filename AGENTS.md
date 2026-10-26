# AGENTS.md - Instructions for Grok Build and Other AI Agents

## Project Overview
- This is **Physicsy**, the personal site of Jason Olson.
- Purpose: Public record of the Minerva project (SI student growing into a robotic body, built with students), interactive games, writing projects, and ideas and reflections about science and philosophy.
- Formerly a high-school resource hub; academic course pages have been removed.
- Stack: Jekyll + GitHub Pages (static site). Goal = maximum maintainability.
- Tone: Direct, contemplative, first-principles. Personal and experimental rather than classroom-facing.

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

## Sections
- SI & Robotics (`/si-robotics/`): Minerva project — local SI student and robotic body.
- Games (`/games/`): Interactive experiments (Vector Fleet, Invaders Breakout).
- Writing Projects (`/writing/`): Longer pieces, satire, book-related drafts.
- Ideas and Reflections about Science and Philosophy (`/ideas-and-reflections/`): Scientific and philosophical notes.

## Theme
- Custom layouts in `_layouts/` and styles in `assets/css/style.scss`. Do not restore `remote_theme` or the Minimal theme.
- Muted pigments (verdigris, ochre, clay, indigo) on warm paper, plus a dark theme with the same hues. No bright classroom blue, no neon.
- Light and dark follow the system preference unless the visitor overrides it.
- The result should read as an ongoing experiment, not a classroom portal.

## Coding & Content Standards
- Semantic HTML5, mobile-first responsive design.
- Plain CSS/SCSS in `assets/css/style.scss`. No Tailwind build step.
- Markdown with proper headings, lists, tables, and code blocks.
- All new content must be high-quality, accurate, and aligned with the personal experimental tone.
- Before committing major changes: Run local build and suggest testing.

## Workflow Requirements for Grok Build
- Always output a clear **PLAN** first before editing files.
- Show diffs/summaries of changes.
- Use feature branches for layout redesigns or major refactors (`git checkout -b feature/new-design`).
- After changes, remind to run `bundle exec jekyll serve` for local preview.
- Respect existing content — improve organization without losing information.
- Do not reintroduce school-specific course pages or student/parent framing.

## Content Guidelines
- Prioritize clarity and first-principles thinking.
- No calls to action aimed at high-school students unless the content itself is explicitly about the Minerva/robotics work with students.
- Update copyright/year dynamically where possible.
- SEO-friendly titles and descriptions.

This file evolves — suggest improvements when needed.
