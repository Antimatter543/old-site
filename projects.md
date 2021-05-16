---
layout: page
title: Projects
permalink: /projects/
includelink: true
---
This is the projects page where... projects are stored. Look, the borders are a bit scuffed, but it does the job, doesn't it!? I'm not a front-end web developer ok, leave me alone 😢.
Clicking on them will redirect you to either a public or hidden blog that I've written for that project.

<div class='project-items'>
    <div class="project-page" id="coderone" onclick="window.open('/blog/2021/05/03/first-hackathon', '_blank');">
        <div class="project-title"> Dungeons & Data Structures 2021 </div>
    </div>

    <div class="project-page" id="frameofwar" onclick="window.open('/blog/2019/07/16/frame-of-war', '_blank');">
        <div class="project-title"> Frame of War (Scrolling Shooter) </div>
    </div>
    <div class="project-page" id="rps" onclick="window.open('/about/', '_blank');">
        <div class="project-title"> Placeholder project </div>
    </div>
    <div class="project-page" id="rps" onclick="window.open('https://www.kaggle.com/c/rock-paper-scissors/discussion/217046', '_blank');">
        <div class="project-title"> Placeholder project </div>
    </div>
    <div class="project-page" id="rps" onclick="window.open('https://www.kaggle.com/c/rock-paper-scissors/discussion/217046', '_blank');">
        <div class="project-title"> Placeholder project </div>
    </div>

</div>

Don't look below here! It's scuffed stuff, don't worry about it 😃

<div class='project-items'>
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



<!-- DO THIS https://github.com/jitinnair1/gradfolio/blob/master/_pages/projects.md -->