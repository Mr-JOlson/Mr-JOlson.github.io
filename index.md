---
layout: default
description: Personal site of Jason Olson. The public record of Minerva, an SI student growing into a robotic body, plus games and writing on science and philosophy.
---

<div class="home-lead">
  <p class="kicker">Jason Olson</p>
  <h1>A record of ongoing experiments.</h1>
  <p class="lede">Physicsy is the public notebook for Minerva, a synthetic-intelligence student growing into a robotic body, built with students. The same shelf holds games, longer writing, and notes on science and philosophy.</p>
</div>

<section class="card-grid" aria-label="Sections">
  <a class="card" data-tone="si" href="{{ '/si-robotics/' | relative_url }}">
    <p class="card__index">SI</p>
    <h2 class="card__title">SI &amp; Robotics</h2>
    <p class="card__text">Minerva: a local model, a persistent memory, and the body being built around her.</p>
  </a>
  <a class="card" data-tone="games" href="{{ '/games/' | relative_url }}">
    <p class="card__index">Play</p>
    <h2 class="card__title">Games</h2>
    <p class="card__text">Vector Fleet and Invaders Breakout. Browser experiments, nothing to install.</p>
  </a>
  <a class="card" data-tone="writing" href="{{ '/writing/' | relative_url }}">
    <p class="card__index">Prose</p>
    <h2 class="card__title">Writing</h2>
    <p class="card__text">Longer pieces, satire, and drafts tied to books in progress.</p>
  </a>
  <a class="card" data-tone="ideas" href="{{ '/ideas-and-reflections/' | relative_url }}">
    <p class="card__index">Notes</p>
    <h2 class="card__title">Ideas and reflections</h2>
    <p class="card__text">Physics, astronomy, systems, mind, education, and first principles.</p>
  </a>
</section>

<section class="recent" aria-labelledby="recent-notes">
  <h2 id="recent-notes">Recent notes</h2>
  {% include latest-posts.html limit=5 %}
</section>
