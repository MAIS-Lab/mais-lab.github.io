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
      <article class="pub-item" data-category="{% if paper.types %}{{ paper.types | join: ' ' }}{% elsif paper.type %}{{ paper.type }}{% else %}conference{% endif %}">
        <div class="pub-thumb-slot">
          {% if paper.thumbnail %}
          <img src="{{ site.baseurl }}/{{ paper.thumbnail }}" alt="Thumbnail for {{ paper.title }}" loading="lazy">
          {% else %}
          <img src="{{ site.baseurl }}/assets/img/mais-logo.png" alt="" class="pub-default-logo" loading="lazy">
          {% endif %}
        </div>
        <div class="pub-copy">
          <h3 class="pub-title">{{ paper.title }}</h3>
          <div class="pub-authors">{{ paper.authors }}</div>
          <div class="pub-venue">
            {% if paper.venues %}
            {% for venue in paper.venues %}
            <div class="pub-venue-row"><span class="pub-venue-text">{% if venue.type == 'conference' and venue.proceedings %}In Proceedings of {{ venue.proceedings }} {{ group.year }}{% else %}{{ venue.name }}{% endif %}</span></div>
            {% endfor %}
            {% else %}
            <div class="pub-venue-row"><span class="pub-venue-text">{% if paper.type == 'conference' and paper.proceedings %}In Proceedings of {{ paper.proceedings }} {{ group.year }}{% else %}{{ paper.venue }}{% endif %}</span></div>
            {% endif %}
          </div>
          {% if paper.tags %}<div class="pub-notes">{% for tag in paper.tags %}<span class="pub-note">{{ tag }}</span>{% endfor %}</div>{% endif %}
          <div class="pub-links">
            {% if paper.pdf and paper.pdf != '' %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener" class="pub-lnk">[Paper]</a>{% endif %}
            {% if paper.video %}<a href="{{ paper.video }}" target="_blank" rel="noopener" class="pub-lnk">[Video]</a>{% endif %}
            {% if paper.demo %}<a href="{{ paper.demo }}" target="_blank" rel="noopener" class="pub-lnk">[Demo]</a>{% endif %}
            {% if paper.teaser %}<a href="{{ paper.teaser }}" target="_blank" rel="noopener" class="pub-lnk">[Teaser]</a>{% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
    </div>
  </section>
  {% endfor %}
</div>
