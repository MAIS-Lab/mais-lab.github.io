---
title: "MAIS Lab - Team"
layout: gridlay
excerpt: "MAIS Lab -- Team members"
sitemap: false
permalink: /team/
---

### Note: This page is not official!

### Postdoc Associate
{% assign number_printed = 0 %}
{% for member in site.data.team_postdoc %}
<div class="row">
<div class="col-sm-12 clearfix">
<div style="display: flex; align-items: center;">
<div style="flex-shrink: 0; width: 15%; margin-right: 20px;">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="100%" style="border-radius: 5px;" />
</div>
<div>
<h4 style="margin-top: 0;">
{{ member.name }}
{% if member.homepage %}
<a href="{{ member.homepage }}" target="_blank" title="Visit {{ member.name }}'s Homepage">🏠</a>
{% endif %}
{% if member.email %}
<a href="mailto:{{ member.email }}" title="Email {{ member.name }}">✉️</a>
{% endif %}
</h4>
{% if member.experiences and member.experiences != empty %}
<b>Experiences</b>
<ul style="padding-left: 0; list-style-position: inside; margin-top: 0px; margin-bottom: 5px;">
{% for edu in member.experiences %}
<li> {{ edu }} </li>
{% endfor %}
</ul>
{% endif %}
{% if member.education and member.education != empty %}
<b>Education</b>
<ul style="padding-left: 0; list-style-position: inside; margin-top: 0px; margin-bottom: 0px;">
{% for edu in member.education %}
<li> {{ edu }} </li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
</div>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}
<br>
<br>

### Ph.D. Students
{% assign number_printed = 0 %}
{% for member in site.data.team_phd %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}
<div class="col-sm-6 clearfix">
<div style="display: flex; align-items: center;">
<div style="flex-shrink: 0; width: 30%; margin-right: 15px;">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="100%" style="border-radius: 5px;" />
</div>
<div>
<h4 style="margin-top: 0;">
{{ member.name }}
{% if member.homepage %}
<a href="{{ member.homepage }}" target="_blank" title="Visit {{ member.name }}'s Homepage">🏠</a>
{% endif %}
{% if member.email %}
<a href="mailto:{{ member.email }}" title="Email {{ member.name }}">✉️</a>
{% endif %}
</h4>
{% if member.education and member.education != empty %}
<b>Education</b>
<ul style="padding-left: 0; list-style-position: inside; margin-top: 0px; margin-bottom: 5px;">
{% for edu in member.education %}
<li> {{ edu }} </li>
{% endfor %}
</ul>
{% endif %}
{% if member.interest and member.interest != empty %}
<b>Research Interests</b>
<ul style="padding-left: 0; list-style-position: inside; margin-top: 0px; margin-bottom: 0px;">
{% for interest in member.interest %}
<li> {{ interest }} </li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% if even_odd == 1 %}
</div>
{% endif %}
{% endfor %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
<br>
<br>

### Alumni
{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
% endif %}
<div class="col-sm-6 clearfix">
<div style="display: flex; align-items: center;">
<div style="flex-shrink: 0; width: 30%; margin-right: 15px;">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="100%" style="border-radius: 5px;" />
</div>
<div>
<h4 style="margin-top: 0;">{{ member.name }}</h4>
<i>{{ member.duration }} <br> Role: {{ member.info }}</i>
</div>
</div>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% if even_odd == 1 %}
</div>
{% endif %}
{% endfor %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
<br>
<br>

### Former Visitors
<div class="row">
<div class="col-sm-4 clearfix">
<h4>Visitors</h4>
{% for member in site.data.alumni_visitors %}
{{ member.name }}
{% endfor %}
</div>
</div>