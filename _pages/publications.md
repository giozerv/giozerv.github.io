---
title: "Publications"
permalink: /publications/
author_profile: true
---

{% for section in site.data.publications %}
<details>
  <summary><strong>{{ section.title | escape }}</strong></summary>
  {% for publication in section.entries %}
  <p>
    {{ publication.authors | escape }}, “{{ publication.title | escape }},”
    {% if publication.venue %}<em>{{ publication.venue | escape }}</em>,{% endif %}
    {% if publication.editors %}edited by {{ publication.editors | escape }},{% endif %}
    {% if publication.publisher %}{{ publication.publisher | escape }},{% endif %}
    {% if publication.volume %}vol. {{ publication.volume | escape }},{% endif %}
    {% if publication.issue %}no. {{ publication.issue | escape }},{% endif %}
    {% if publication.article %}article {{ publication.article | escape }},{% endif %}
    {% if publication.pages %}pp. {{ publication.pages | escape }},{% endif %}
    {{ publication.year }}{% if publication.doi %}, doi: <a href="https://doi.org/{{ publication.doi | escape }}">{{ publication.doi | escape }}</a>{% endif %}.
    {% for note in publication.notes %}<em>{{ note | escape }}.</em> {% endfor %}
    {% if publication.url %}[<a href="{{ publication.url | escape }}">Publication</a>]{% endif %}
    {% if publication.github %}[<a href="{{ publication.github | escape }}">GitHub</a>]{% endif %}
  </p>
  {% endfor %}
</details>
{% endfor %}
