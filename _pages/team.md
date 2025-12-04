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
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
<h4>
{{ member.name }}
{% if member.homepage %}
<a href="{{ member.homepage }}" target="_blank" title="Visit {{ member.name }}'s Homepage">🏠</a>
{% endif %}
{% if member.email %}
<a href="mailto:{{ member.email }}" title="Email {{ member.name }}">✉️</a>
{% endif %}
</h4>
{% if member.experience and member.experience != empty %}
Education & Experience
<ul style="overflow: hidden">
{% for edu in member.experience %}
<li> {{ edu }} </li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}


### Ph.D. Students
{% assign number_printed = 0 %}
{% for member in site.data.team_phd %}
{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}
<div class="col-sm-6 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="20%" style="float: left" />
<h4>
{{ member.name }}
{% if member.homepage %}
<a href="{{ member.homepage }}" target="_blank" title="Visit {{ member.name }}'s Homepage">🏠</a>
{% endif %}
{% if member.email %}
<a href="mailto:{{ member.email }}" title="Email {{ member.name }}">✉️</a>
{% endif %}
</h4>
{% if member.education and member.education != empty %}
Education
<ul style="overflow: hidden">
{% for edu in member.education %}
<li> {{ edu }} </li>
{% endfor %}
</ul>
{% endif %}
{% if member.interest and member.interest != empty %}
Research Interests
<ul style="overflow: hidden">
{% for interest in member.interest %}
<li> {{ interest }} </li>
{% endfor %}
</ul>
{% endif %}
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


## Alumni

{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
<h4>{{ member.name }}</h4>
<i>{{ member.duration }} <br> Role: {{ member.info }}</i>
<ul style="overflow: hidden">

</ul>
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

## Former Visitors
<div class="row">

<div class="col-sm-4 clearfix">
<h4>Visitors</h4>
{% for member in site.data.alumni_visitors %}
{{ member.name }}
{% endfor %}
</div>

<!-- <div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.alumni_msc %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Bachelor Students</h4>
{% for member in site.data.alumni_bsc %}
{{ member.name }}
{% endfor %}
</div> -->

</div>


<!-- ## Administrative Support
<a href="mailto:Rijsewijk@Physics.LeidenUniv.nl">Ellie van Rijsewijk</a> is helping us (and other groups) with administration. -->
