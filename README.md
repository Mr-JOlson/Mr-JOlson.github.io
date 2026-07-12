# Physicsy Website

Jekyll-based site for **Jason Olson** (Gulf Breeze High School) at [physicsy.com](https://www.physicsy.com).

## Subjects & sections

| Section | Path |
|---------|------|
| Physics 1 Honors | `/physics1-honors/` |
| Earth-Space Science | `/earth-space-science/` |
| Astronomy | `/astronomy/` |
| AI & Robotics Blog | `/ai-robotics/` |
| Games | `/games/` |

Class resources, blog posts, robotics/AI projects, and writing for students, parents, and colleagues.

## Stack

- **Jekyll** + **GitHub Pages** (`pages-themes/minimal`)
- Posts live in `_posts/` (`YYYY-MM-DD-title.md`)
- Deployed from the `main` branch

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Build only: `bundle exec jekyll build`

See [AGENTS.md](AGENTS.md) for content and workflow conventions.
