---
layout: default
title: Links
linktree: true
---

<div class="linktree">
  <div class="linktree-container">

    <div class="linktree-header">
      <img src="/assets/images/logo_nero_orizzontale.png" class="linktree-logo" alt="Antènori">
      <!-- <h1>{{ site.data.linktree.title }}</h1> -->
      <p>{{ site.data.linktree.description }}</p>
    </div>

    <div class="linktree-links">
      {% for item in site.data.linktree.links %}
        <a href="{{ item.url }}" class="linktree-item" target="_blank">
          <img src="/assets/images/{{ item.icon }}" alt="">
          <span>{{ item.label }}</span>
        </a>
      {% endfor %}
    </div>

  </div>
</div>