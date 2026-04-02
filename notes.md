---
layout: default
title: Notes
description: Personal notes and quick references on AI QA, LLM testing, and tooling.
---

<section class="section" style="padding-top: 7rem;">
  <div class="container">
    <div class="section-label mono">// notes &amp; references</div>
    <h1 class="section-title">Notes</h1>
    <p style="color: var(--text-2); margin-bottom: 3rem; max-width: 560px;">
      Quick references, testing patterns, and observations I keep coming back to.
      Not polished essays — just useful notes.
    </p>

    <div class="posts-list">
      {% for post in site.posts %}
      <a class="post-row" href="{{ post.url | relative_url }}">
        <div class="post-row-left">
          <time class="post-row-date mono">{{ post.date | date: "%Y.%m.%d" }}</time>
          <h2 class="post-row-title">{{ post.title }}</h2>
          {% if post.excerpt %}
            <p class="post-row-excerpt">{{ post.excerpt | strip_html | truncate: 140 }}</p>
          {% endif %}
        </div>
        <div class="post-row-right">
          {% if post.tags %}
            {% for tag in post.tags limit:2 %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          {% endif %}
          <span class="post-arrow">→</span>
        </div>
      </a>
      {% endfor %}

      {% if site.posts.size == 0 %}
        <p class="posts-empty mono">// no notes yet</p>
      {% endif %}
    </div>
  </div>
</section>
