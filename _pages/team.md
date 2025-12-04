---
title: "MAIS Lab - Team"
layout: gridlay
excerpt: "MAIS Lab -- Team members"
sitemap: false
permalink: /team/
---

### Note: This page is not official!

## Group Members

 <!-- **We are looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!** -->


{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

<div class="row">  <div class="col-sm-12 clearfix"> <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.info }} </i>
    <ul style="overflow: hidden">

    {% if member.number_educ == 1 %}
    <li> {{ member.education1 | markdownify}} </li>
    {% endif %}

    {% if member.number_educ == 2 %}
    <li> {{ member.education1 | markdownify}} </li>
    <li> {{ member.education2 | markdownify}} </li>
    {% endif %}

    {% if member.number_educ == 3 %}
    <li> {{ member.education1 | markdownify}} </li>
    <li> {{ member.education2 | markdownify}} </li>
    <li> {{ member.education3 | markdownify}} </li>
    {% endif %}

    </ul>
  </div>

</div>  {% assign number_printed = number_printed | plus: 1 %}

{% endfor %}



## Alumni

{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
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
