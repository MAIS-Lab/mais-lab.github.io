---
title: Research
subtitle: Representative research projects
layout: default
permalink: /research/
---

<div class="ra-area-list">
  {% for area in site.data.research.areas %}
  <article class="ra-area-card">
    <div class="ra-area-img research-thumb-slot">
      {% if area.thumbnail and area.thumbnail != '' %}
      <img src="{{ site.baseurl }}/{{ area.thumbnail }}" alt="Thumbnail for {{ area.title }}" loading="lazy">
      {% else %}
      <img src="{{ site.baseurl }}/mais-logo.png" alt="" class="research-default-logo" loading="lazy">
      {% endif %}
    </div>
    <div class="ra-area-body">
      <h2 class="ra-area-title">{{ area.title }}</h2>
      <ul class="research-work-list">
        {% for work in area.works %}
        <li>
          {% if work.url %}<a href="{{ work.url }}" target="_blank" rel="noopener">{% else %}<div class="research-work-row">{% endif %}
          <span class="research-work-title">{{ work.title }}</span>
          <span class="research-work-venue">{{ work.venue }}</span>
          {% if work.url %}</a>{% else %}</div>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
  </article>
  {% endfor %}
</div>
