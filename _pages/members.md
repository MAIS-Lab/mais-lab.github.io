---
title: Members
subtitle: People at MAIS Lab
layout: default
permalink: /members/
---

<div class="mem-body">
  <div class="pi-block">
    <div class="photo-slot pi-photo-slot"><img src="{{ site.baseurl }}/assets/img/members/seonghoon.png" alt="Seonghoon Park"></div>
    <div>
      <h2 class="pi-name">Seonghoon Park, Ph.D.</h2>
      <div class="pi-role">Assistant Professor</div>
      <div class="pi-dept">Department of Computer Science and Engineering, Yonsei University</div>
      <div class="pi-meta">
        <span><strong>Office:</strong> TBA</span>
      </div>
      <div class="pi-meta">
        <span><strong>Tel:</strong> TBA</span>
      </div>
        <div class="pi-meta">
        <span><strong>Email:</strong> seonghoon.park AT yonsei.ac.kr</span>
      </div>
      <div class="pi-links">
        <a href="https://seonghoon.page" target="_blank" rel="noopener" class="pi-link">Website</a>
        <a href="https://scholar.google.com/citations?user=NzNB_vkAAAAJ&hl=en" target="_blank" rel="noopener" class="pi-link">Google Scholar</a>
      </div>
    </div>
  </div>
  {% for group in site.data.members.groups %}
  <div class="grp">
    <h2 class="grp-title">{{ group.title }}{% if group.number %}<span class="grp-n">{{ group.number }}</span>{% endif %}</h2>
    <div class="mem-grid">
      {% for member in group.members %}
      <article class="mem-card{% unless member.photo %} member-placeholder{% endunless %}">
        <div class="photo-slot mem-photo-slot">{% if member.photo %}<img src="{{ site.baseurl }}/{{ member.photo }}" alt="{{ member.name }}">{% else %}<span>Add photo</span>{% endif %}</div>
        <div class="mem-info">
          <h3 class="mem-name">{% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
          <div class="mem-role">{{ member.role }}</div>
          {% if member.focus %}<div class="mem-focus">{{ member.focus }}</div>{% endif %}
          {% if member.email %}<a class="mem-email" href="mailto:{{ member.email }}">{{ member.email }}</a>{% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>
