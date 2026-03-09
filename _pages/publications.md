---
layout: default
title: Publications
permalink: /publications/
---

<!-- ========== Selected Publications ========== -->
<h2>Selected Publications</h2>
<hr />

<div class="publications">
  <ol class="bibliography list-unstyled">
  {% for paper in site.data.publications.selected %}
    <li class="mb-4">
      <div class="d-flex align-items-start">
        <span class="badge badge-primary mr-3 mt-1 flex-shrink-0" style="font-size: 0.8rem; min-width: 70px; text-align: center; padding: 5px 8px;">
          {{ paper.abbr }}
        </span>
        <div>
          <div class="font-weight-bold mb-1">{{ paper.title }}</div>
          <div class="text-muted small mb-1">{{ paper.authors }}</div>
          <div class="text-muted small mb-2"><em>{{ paper.venue }}</em></div>
          {% if paper.pdf != "" %}
          <a href="{{ paper.pdf }}" target="_blank" class="badge badge-danger mr-1" style="font-size: 0.75rem;">PDF</a>
          {% endif %}
        </div>
      </div>
    </li>
  {% endfor %}
  </ol>
</div>

<!-- ========== Full Publications ========== -->
<h2 class="mt-5">Full Publications</h2>
<hr />

<div class="publications">
{% for group in site.data.publications.full %}
  <h4 class="mt-4 mb-3 text-muted">{{ group.year }}</h4>
  <ol class="bibliography list-unstyled">
  {% for paper in group.papers %}
    <li class="mb-4">
      <div class="d-flex align-items-start">
        <span class="badge badge-primary mr-3 mt-1 flex-shrink-0" style="font-size: 0.8rem; min-width: 70px; text-align: center; padding: 5px 8px;">
          {{ paper.abbr }}
        </span>
        <div>
          <div class="font-weight-bold mb-1">{{ paper.title }}</div>
          <div class="text-muted small mb-1">{{ paper.authors }}</div>
          <div class="text-muted small mb-2"><em>{{ paper.venue }}</em></div>
          {% if paper.pdf != "" %}
          <a href="{{ paper.pdf }}" target="_blank" class="badge badge-danger mr-1" style="font-size: 0.75rem;">PDF</a>
          {% endif %}
        </div>
      </div>
    </li>
  {% endfor %}
  </ol>
{% endfor %}
</div>
