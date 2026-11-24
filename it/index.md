---
title: Home
layout: default
---

<section class="hero" style="background-image:url('/assets/images/hero.jpg')"></section>

<section class="title-block centered">
  <div class="container narrow">
    <h1>Antènori</h1>
    <p>coro di voci maschili di Padova</p>
  </div>
</section>

<section class="intro">
  <div class="container narrow">
    <p class="text-justify">
          Formazione vocale a voci maschili nata nel 2016 a Padova, il Coro Antènori unisce canto popolare, musica sacra e repertori internazionali. Guidato dal maestro Francesco Valandro, sviluppa un suono contemporaneo radicato nella tradizione. Ha all’attivo concerti anche all’estero e la pubblicazione degli album Tales e Tales II. Nel 2024 ha ottenuto primo premio di categoria, della critica e miglior interpretazione al 12° Festival della Coralità Veneta.

    </p>
  </div>
</section>

<section class="quote">
  <div class="container narrow">
    <p class="quote-text">
      “Nel loro repertorio c’è la capacità di conservare la tradizione, ma anche lo sviluppo di un guardare avanti: un racconto capace di far pensare e meditare profondamente.”
    </p>
    <p class="quote-author">
      -- Dino Bridda, Commissione Premio della Critica “Carlo Bologna”, 12° Festival della Coralità Veneta
    </p>
  </div>
</section>

<section class="media">
  <div class="container narrow">
    <div class="video">
      <iframe 
        width="100%" 
        height="350" 
        src="https://www.youtube.com/embed/Wpz74tFoUWI?rel=0&modestbranding=1"
        title="Coro Antènori"
        frameborder="0" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</section>


{% assign oggi = 'now' | date: '%Y-%m-%d' %}
{% assign mesi = 'Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre' | split: ',' %}
{% assign eventi_in_programma = 0 %}
{% for evento in site.data.eventi %}
  {% assign data_evento = evento.data | date: '%Y-%m-%d' %}
  {% if data_evento >= oggi %}
    {% assign eventi_in_programma = eventi_in_programma | plus: 1 %}
  {% endif %}
{% endfor %}

{% if eventi_in_programma > 0 %}
<section id="prossimi-eventi" class="eventi">
  <div class="container narrow">

    <h2>Prossimi Eventi</h2>

    <div class="event-grid">
      {% for evento in site.data.eventi %}
      {% assign data_evento = evento.data | date: '%Y-%m-%d' %}
      {% if data_evento >= oggi %}

      <div class="event-row">

        <!-- SINISTRA: immagine -->
        <a href="{{ evento.mappa }}" target="_blank" rel="noopener noreferrer" class="event-image"
           style="background-image:url('{{ evento.immagine }}')">

          <div class="event-date">
            <span class="day">{{ evento.data | date: "%d" }}</span>
            {% assign mese_index = evento.data | date: "%m" | minus: 1 %}
            <span class="month">{{ mesi[mese_index] }}</span>
          </div>

          <div class="event-title-overlay">
            <h3>{{ evento.titolo }}</h3>
          </div>

        </a>

        <!-- DESTRA: testo -->
        <div class="event-info">
          <div class="evento-data">
            {{ evento.data | date: "%d.%m.%Y" }} · ore {{ evento.ora }}
          </div>

          <div class="evento-titolo">
            {{ evento.titolo }}
          </div>

          <div class="evento-luogo">
            {{ evento.luogo }} · 
            <a href="{{ evento.mappa }}" target="_blank" rel="noopener noreferrer">mappa</a>
          </div>

          <div class="evento-note">
            {{ evento.note }}
          </div>
        </div>

      </div>

      {% endif %}
      {% endfor %}
    </div>

  </div>
</section>
{% endif %}

<!-- SEZIONE IMMERSIVA (disabilitata)
<section class="immersive" style="background-image:url('/assets/images/section.jpg')"></section>
-->

<section class="media-links">
  <div class="container narrow">
    <h2>Canali Media</h2>

    <div class="media-grid">

      <a href="https://www.youtube.com/@gliantenoripadova7364" target="_blank" rel="noopener noreferrer" class="media-item">
        <img src="/assets/images/youtube.svg" alt="YouTube">
        <span>YouTube</span>
      </a>

      <a href="https://open.spotify.com/intl-it/artist/2gCHa0jcrMyr2EAPoE8W5P" target="_blank" rel="noopener noreferrer" class="media-item">
        <img src="/assets/images/spotify.svg" alt="Spotify">
        <span>Spotify</span>
      </a>

      <a href="https://music.youtube.com/@antenori_ita" target="_blank" rel="noopener noreferrer" class="media-item">
        <img src="/assets/images/youtubemusic.svg" alt="YouTube Music">
        <span>YouTube Music</span>
      </a>

      <a href="https://www.instagram.com/gli_antenori?igsh=dXpsdm9xaDdmYnI=" target="_blank" rel="noopener noreferrer" class="media-item">
        <img src="/assets/images/instagram.svg" alt="Instagram">
        <span>Instagram</span>
      </a>

      <a href="https://www.facebook.com/gliantenori/" target="_blank" rel="noopener noreferrer" class="media-item">
        <img src="/assets/images/facebook.svg" alt="Facebook">
        <span>Facebook</span>
      </a>

      <a href="https://www.tiktok.com/@antenori_coro" target="_blank" rel="noopener noreferrer" class="media-item">
        <img src="/assets/images/tiktok.svg" alt="TikTok">
        <span>TikTok</span>
      </a>

    </div>
  </div>
</section>

<section>
  <div class="container narrow">
    <h2>Contatti</h2>
    <p>
      <a href="mailto:corogliantenori@gmail.com">corogliantenori@gmail.com</a>
    </p>
  </div>
</section>

