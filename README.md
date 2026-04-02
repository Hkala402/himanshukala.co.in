# himanshukala.co.in

Personal portfolio website for Himanshu Kala — AI QA Engineer.

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Structure

```
├── _layouts/
│   ├── default.html      # Main HTML wrapper (nav + footer)
│   └── post.html         # Blog post layout
├── _posts/               # Blog posts (YYYY-MM-DD-title.md)
├── assets/
│   └── images/           # Images
├── _config.yml           # Jekyll site configuration
├── index.html            # Homepage (portfolio)
├── notes.md              # All posts listing
├── style.css             # Site styles
├── script.js             # Typewriter, nav, scroll animations
└── CNAME                 # Custom domain
```

## Adding a Blog Post

Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-04-01
tags: [AI QA, LLM Testing]
excerpt: "One sentence summary shown in the post list."
---

Your content here in Markdown.
```

## Local Development

```bash
gem install bundler jekyll
bundle exec jekyll serve
# → http://localhost:4000
```

## Deployment

Push to `main` branch — GitHub Pages builds and deploys automatically.
Custom domain is set via the `CNAME` file.
