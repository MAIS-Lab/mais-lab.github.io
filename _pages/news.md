---
title: News
subtitle: Updates from MAIS Lab
layout: default
permalink: /news/
header_variant: minimal
---

<div class="news-page-body">
  <div class="filters news-filters" data-filter-group="news"><button class="fbtn active" data-filter="all">All</button><button class="fbtn" data-filter="paper">Publications</button><button class="fbtn" data-filter="award">Awards</button><button class="fbtn" data-filter="service">Service</button><button class="fbtn" data-filter="news">News</button></div>
  <div class="news-full-list">
    {% for item in site.data.news %}
    <article class="news-full-item" data-category="{{ item.category }}">
      <div class="nf-meta">
        <time class="nf-date">{{ item.date }}</time>
        <span class="nf-label">{{ item.label }}</span>
      </div>
      <div class="nf-content">{{ item.title }}</div>
    </article>
    {% endfor %}
  </div>
</div>
