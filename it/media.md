---
layout: default
title: Media
permalink: /it/media/
---
<section>
  <div class="container narrow">
    <h2><br>Pubblicazioni</h2>
  </div>
      
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
<!--
<p class="cta-center buttons-inline">
  <a href="https://open.spotify.com/intl-it/artist/2gCHa0jcrMyr2EAPoE8W5P" target="_blank" class="btn-minimal">
    Spotify
  </a>

    <a href="https://music.youtube.com/channel/UC-MpLKRqSwj9N16UQILsNjg" target="_blank" class="btn-minimal">
    YouTube Music
    </a>

     <a href="https://music.apple.com/fr/artist/ant%C3%A8nori/1645025557" target="_blank" class="btn-minimal">
    Apple Music
    </a>

    <a href="https://tidal.com/artist/34170256" target="_blank" class="btn-minimal">
    Tidal
    </a>
    </p>
-->
  </div>
</section>


<section class="media-links">
  <div class="container narrow">
    <h3>Disponibili nelle piattaforme:</h3>

    <div class="media-grid">

      <a href="https://open.spotify.com/intl-it/artist/2gCHa0jcrMyr2EAPoE8W5P" target="_blank" class="media-item">
        <img src="/assets/images/spotify.svg" alt="Spotify">
        <span>Spotify</span>
      </a>

      <a href="https://music.youtube.com/channel/UCxxxxxxxx" target="_blank" class="media-item">
        <img src="/assets/images/youtubemusic.svg" alt="YouTube Music">
        <span>YouTube Music</span>
      </a>

            <a href="https://tidal.com/artist/34170256" target="_blank" class="media-item">
        <img src="/assets/images/tidal.svg" alt="Tidal">
        <span>Tidal</span>
      </a>

            <a href="https://music.apple.com/fr/artist/ant%C3%A8nori/1645025557" target="_blank" class="media-item">
        <img src="/assets/images/applemusic.svg" alt="Apple Music">
        <span>Apple Music</span>
      </a>

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
        <img 
          src="/assets/images/youtube2.png" 
          alt="Play Video"
          class="play-icon"
        >
      </div>

    </div>

  </a>
</section>

<section>
  <div class="container narrow">

  <h2>Audio Sample</h2>
    <div class="audio-block">
      <h3>La sera sper il lag</h3>
      <p>Gion Balzer Casanova, Flurin Camathias - composizione</p>
      <audio controls>
        <source src="/assets/audio/la-sera-sper-il-lag.mp3" type="audio/mpeg">
      </audio>
    </div>

  <div class="audio-block">
      <h3>Il testamento del capitano</h3>
      <p>Canto popolare alpino - arrangiamento Francesco Valandro</p>
      <audio controls>
        <source src="/assets/audio/il-testamento-del-capitano.mp3" type="audio/mpeg">
      </audio>
  </div>
<!--
  <h3>Armonizzazioni e Registrazioni</h3>
      <p>
      Molte delle armonizzazioni sono a cura del direttore <a href="mailto:francescovalandro@gmail.com">Francesco Valandro</a>.<br>
      Audio Engineering (registrazione, mix e mastering) a cura di  
      <a href="mailto:pietroandrigo@gmail.com">Pietro Andrigo</a>.
    </p>
-->
  </div>
</section>