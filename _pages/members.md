---
title: Members
subtitle: People at MAIS Lab
layout: default
permalink: /members/
header_variant: minimal
---

<div class="mem-body">
  <div class="pi-block">
    <div class="photo-slot pi-photo-slot"><img src="{{ site.baseurl }}/assets/img/members/seonghoon.png" alt="Seonghoon Park"></div>
    <div>
      <h2 class="pi-name">Seonghoon Park, Ph.D.</h2>
      <div class="pi-role">Assistant Professor</div>
      <div class="pi-dept">Department of Computer Science and Engineering, Yonsei University</div>
      <div class="pi-meta">
        <span><strong>Office:</strong> Room 131D, Engineering Research Park, 50 Yonsei-ro, Seodaemun-gu, Seoul 03722, South Korea</span>
      </div>
      <div class="pi-meta">
        <span><strong>Tel:</strong> 02-2123-2725</span>
      </div>
        <div class="pi-meta">
        <span><strong>Email:</strong> seonghoon.park AT yonsei.ac.kr</span>
      </div>
      <div class="pi-links">
        <a href="https://seonghoon.page" target="_blank" rel="noopener" class="pub-lnk">[Website]</a>
        <a href="https://scholar.google.com/citations?user=NzNB_vkAAAAJ&hl=en" target="_blank" rel="noopener" class="pub-lnk">[Google Scholar]</a>
      </div>

      <div class="pi-history">
        <section class="pi-history-section">
          <h3 class="pi-history-title">Professional Experience</h3>
          <ul class="pi-history-list">
            <li>
              <span class="pi-history-date">2026.09–Present</span>
              <span><strong>Assistant Professor</strong>, Department of Computer Science and Engineering, Yonsei University</span>
            </li>
            <li>
              <span class="pi-history-date">2025.10–2026.08</span>
              <span><strong>Postdoctoral Associate</strong>, Department of Computer Science, Virginia Tech</span>
            </li>
          </ul>
        </section>
        <section class="pi-history-section">
          <h3 class="pi-history-title">Education</h3>
          <ul class="pi-history-list">
            <li>
              <span class="pi-history-date">2025.08</span>
              <span><strong>Ph.D. in Computer Science and Engineering</strong>, Yonsei University</span>
            </li>
            <li>
              <span class="pi-history-date">2018.02</span>
              <span><strong>B.S. in Computer Science and Engineering</strong>, Yonsei University</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>

  {% for group in site.data.members.groups %}
  <div class="grp grp-{{ group.title | slugify }}">
    <h2 class="grp-title">{{ group.title }}{% if group.number %}<span class="grp-n">{{ group.number }}</span>{% endif %}</h2>
    <div class="mem-grid">
      {% for member in group.members %}
      <article class="mem-card{% unless member.photo %} member-placeholder{% endunless %}">
        <div class="photo-slot mem-photo-slot">{% if member.photo %}<img src="{{ site.baseurl }}/{{ member.photo }}" alt="{{ member.name }}">{% else %}<span>Add photo</span>{% endif %}</div>
        <div class="mem-info">
          <h3 class="mem-name">{% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
          <div class="mem-role">{{ member.role }}</div>
          {% if member.focus %}
          <div class="mem-focus" aria-label="Research interest: {{ member.focus }}">
            <svg class="mem-focus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
              <path d="M8.5 14.5a6 6 0 1 1 7 0C14.6 15.3 14 16.4 14 18h-4c0-1.6-.6-2.7-1.5-3.5Z"></path>
            </svg>
            <span>{{ member.focus }}</span>
          </div>
          {% endif %}
          {% if member.email %}
          <div class="mem-email" aria-label="Email: {{ member.email }}">
            <svg class="mem-email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="m3 7 9 6 9-6"></path>
            </svg>
            <span>{{ member.email }}</span>
          </div>
          {% endif %}
          {% if member.education %}
          <ul class="mem-education">
            {% for education in member.education %}
            <li>
              <span class="mem-education-degree"><strong>{{ education.degree }}</strong></span>
              <span class="mem-education-meta">{{ education.date }}, {{ education.institution }}</span>
            </li>
            {% endfor %}
          </ul>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>
