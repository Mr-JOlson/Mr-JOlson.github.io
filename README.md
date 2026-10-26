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

Replace the current minimal school-resource look. Goal: a personal, contemplative site that can grow with the projects. Prefer a clean, modern layout (mobile-first, good typography, dark-mode friendly). Accent the sense of ongoing experiment rather than curriculum. Exact palette and remote theme versus custom CSS can be decided in the rebuild; the constraint is that the result no longer reads as a classroom portal.

## Stack

- Jekyll + GitHub Pages (current remote theme can be swapped).
- Posts: `_posts/YYYY-MM-DD-title.md`
- Deployed from `main`
- Local: `bundle install && bundle exec jekyll serve`

See `AGENTS.md` for agent workflow conventions; that file will also need a short update once the new purpose is settled.

## About

Jason Olson. Independent projects at the intersection of synthetic intelligence, robotics, and scientific/philosophical writing. Minerva is being built with students.
