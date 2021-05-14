---
title: Projects
layout: page
permalink: /projectstwo/
includelink: false 
includeimages: true
---
<p>
I'm gonna put projects here! (Eventually..?)
Currently doing Coder One Hackathon, Coursera Deep Learning Specialisation, QxQ Quantum Computing Course among other things
</p>


<div class="ProjectContainer">

	<div class="gallery">


  {% for project in site.projects %}

  {% if project.redirect %}
  <div class="projectTile">
          <a href="{{ project.redirect }}" class='cover-post' {% if includeimages %} id ="{{ project.imageid }}" {%endif%} target="_blank">
          <span>
              <h2>{{ project.title }}</h2>
              <br/>
              <p>{{ project.description }}</p>
          </span>
          </a>
  </div>

  {% else %}

  <div class="projectTile"  {% if project.includeimages %} id ="{{ project.imageid }}" {%endif%}> 
          <a href="{{ project.url | prepend: site.baseurl}}" >
          <span>
              <h2>{{ project.title }}</h2>
              <br/>
              <p>{{ project.description }}</p>
          </span>
          </a>
  </div>

  {% endif %}

  {% endfor %}

	</div>

</div>
