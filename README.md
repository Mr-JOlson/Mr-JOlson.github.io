# Physicsy

Personal site for Jason Olson. The public record of the Minerva project (an SI student growing into a robotic body, built with students), interactive games, and ideas and reflections about science and philosophy. Formerly a high-school resource hub.

## Purpose

Move the site away from Gulf Breeze High School course materials. Academic pages (Physics 1 Honors, Biology, Astronomy, and any related Earth/Space Science) are removed. The remaining focus is independent projects and open writing.

## Sections

| Section | Path (suggested) | Notes |
|---------|------------------|-------|
| SI & Robotics | `/si-robotics/` | Single section for the Minerva project: local SI student (Hermes, memory, ongoing learning) and the robotic body being built with students. Keep existing posts; update labels and homepage language from “AI” to “SI.” |
| Games | `/games/` | Vector Fleet and Invaders Breakout. Treat as interactive experiments. |
| Writing Projects | `/writing/` | Longer pieces, satire, book-related drafts. |
| Ideas and Reflections about Science and Philosophy | `/ideas-and-reflections/` | Combined scientific and philosophical notes. Shorter or medium pieces on physics, astronomy, systems, mind, education, and first principles. |

Blog posts remain in `_posts/` with ordinary Jekyll front matter. Category or tag pages can surface the ideas and reflections if a single index is preferred later.

## What to remove

- Directories and navigation entries for `/physics1-honors/`, `/biology/`, `/astronomy/`, and `/earth-space-science/`.
- Homepage language that presents the site as “High School Science Resources from Gulf Breeze High School.”
- Student/parent contact framing and school email if it is no longer desired.
- Any “for class” framing on the games pages.

Existing SI/robotics posts, game source, and writing should be preserved and re-linked.

## Theme and design

Custom layout and CSS, not the Minimal remote theme. The site should feel personal and contemplative: mobile-first, strong typography, and able to grow with the projects. It should read as an ongoing experiment, not a classroom portal.

Palette: muted pigments on warm paper — verdigris, ochre, clay, and indigo — with a dark theme that uses the same hues. Color is carried by washes, rules, and section marks. Body text stays ink on paper. The visitor’s system preference sets light or dark; the header control overrides it and remembers the choice.

Styles live in `assets/css/style.scss`. Layouts live in `_layouts/`.

## Stack

- Jekyll + GitHub Pages (custom layout, no remote theme).
- Posts: `_posts/YYYY-MM-DD-title.md`
- Deployed from `main`
- Local: `bundle install && bundle exec jekyll serve`

See `AGENTS.md` for agent workflow conventions. Purpose and theme decisions are recorded there.

## About

Jason Olson. Independent projects at the intersection of synthetic intelligence, robotics, and scientific/philosophical writing. Minerva is being built with students.
