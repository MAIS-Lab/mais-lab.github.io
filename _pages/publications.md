---
title: Publications
subtitle: Research output from MAIS Lab. <br> (* indicates co-first authors)
layout: default
permalink: /publications/
header_variant: minimal
---

<div class="pub-body">
  {% for group in site.data.publications.full %}
  <section class="pub-year-grp">
    <h2 class="pub-year-lbl">{{ group.year }}</h2>
    <div class="pub-list">
    {% for paper in group.papers %}
      {% include publication-item.html paper=paper year=group.year show_keywords=true %}
    {% endfor %}
    </div>
  </section>
  {% endfor %}
</div>
