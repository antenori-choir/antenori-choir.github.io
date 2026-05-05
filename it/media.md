---
layout: default
title: Media
permalink: /it/media/
---
<section>
  <div class="container narrow">
    <h2><br>Discografia</h2>
  </div>
      <p class="cta-center buttons-inline">
  <a href="https://open.spotify.com/intl-it/artist/2gCHa0jcrMyr2EAPoE8W5P" target="_blank" class="btn-minimal">
    Spotify
  </a>
  <a href="https://music.youtube.com/channel/UC-MpLKRqSwj9N16UQILsNjg" target="_blank" class="btn-minimal">
    YouTube Music
  </a>
</p>
</section>


<section>
  <div class="container">

    <div class="albums">

      {% for album in site.data.albums %}
        <div class="album">
          <a href="{{ album.link }}" target="_blank">
            <img src="{{ album.image }}" alt="{{ album.title }}">
            <h3>{{ album.title }} ({{ album.year }})</h3>
          </a>
        </div>
      {% endfor %}

    </div>

  </div>
</section>



<section class="video-immersive">
  <div class="container narrow">

    <h2>Video</h2>
<!--
    <p class="cta-center">
      <a href="https://www.youtube.com/@gliantenoripadova7364" target="_blank" class="btn-minimal">
        YouTube Video
      </a>
    </p>
-->
  </div>
  <a href="https://www.youtube.com/@gliantenoripadova7364" target="_blank">

    <div class="video-inner">
      <img src="/assets/images/backstage.jpg" alt="Video Coro Antènori">

      <div class="overlay"></div>

      <div class="video-text">
        <h2>Video</h2>
      </div>
    </div>

  </a>
</section>

<section>
  <div class="container narrow">

  <h2>Ascolta</h2>
    <div class="audio-block">
      <h3>La sera sper il lag (arr. Francesco Valandro)</h3>
      <p>Gion Balzer Casanova, Flurin Camathias - composizione</p>
      <audio controls>
        <source src="/assets/audio/la-sera-sper-il-lag.mp3
" type="audio/mpeg">
      </audio>
    </div>

  <div class="audio-block">
      <h3>Il testamento del capitano (arr. Francesco Valandro)</h3>
      <p>Canto popolare alpino — arrangiamento Francesco Valandro</p>
      <audio controls>
        <source src="/assets/audio/il-testamento-del-capitano.mp3" type="audio/mpeg">
      </audio>
    </div>

  </div>
</section>

<!--
<section>
  <div class="container narrow">

    <h3>Arrangiamenti e Audio Engineering</h3>
    <p>
      Molti arrangiamenti del repertorio sono curati dal direttore Francesco Valandro.
    </p>

    <p>
      Audio Engineering a cura di Pietro Andrigo.
    </p>

  </div>
</section>
-->
        
<!-- NOTE 
<section>
  <div class="container narrow">

    <p>
      Molte armonizzazioni sono curate da <a href="mailto:francescovalandro@gmail.com">Francesco Valandro</a>.
    </p>

    <p>
      Produzione audio e video interna (audio engineering: 
      <a href="mailto:pietroandrigo@gmail.com">Pietro Andrigo</a>).
    </p>

  </div>
</section>
-->