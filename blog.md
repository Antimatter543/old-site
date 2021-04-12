---
layout: page
title: Blog
permalink: /blog/
includelink: true
---
<h1>{{ page.title }}</h1>
<ul class="posts">

    {% for post in site.posts %}
        <li>
        {% if post.includelink %}
            <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span> » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
            <br>
            <!-- {{ post.excerpt }} -->
        {% endif %}
        </li>	
    {% endfor %}
</ul>