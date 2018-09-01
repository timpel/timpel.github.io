---
title: "Music Box"
excerpt: "A Javascript app for making simple multi-track melodies."
header:
  teaser: /assets/images/music_box.png
author_profile: true
classes: wide
---
{% include head/musicbox.html %}
<style>
  {% include stylesheet.css %}
</style>
A Javascript app for making music. You can loop playback, add tracks, add measures and change instruments & key signature. It's built with JavaScipt, particularly [Howler.js](https://github.com/goldfire/howler.js/). See the [source code](https://github.com/timpel/musicbox) or try it out if you'd like:
{% include musicbox.html %}
<script>
  {% include howler.js %}
  {% include sounds.min.js %}
  {% include script.min.js %}
</script>