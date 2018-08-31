---
title: "Family Tree Mapper"
excerpt: "A tool for visualizing ambiguous geodata from family tree (GEDCOM) data."
author_profile: true
classes: wide
---

This was a 3-stage endeavour. Stage 1 was to write a parser to turn family tree data in GEDCOM format into more manageable JSON; Stage 2 was to geocode the place of birth of each individual; and Stage 3 was to visualize the resulting dataset.

View the source code on [Github](https://github.com/timpel/family-tree-mapper/), and/or have a look at my own mapped family tree below:

<div id="mapid" class="map leaflet-container" style="height: 600px; position:relative;"></div>
<style>
  {% include leaflet.css %}
  {% include MarkerCluster.css %}
  {% include MarkerCluster.Default.css %}
  {% include leaflet-search.min.css %}
</style>
<script>
  {% include leaflet.js %}
  {% include leaflet-search.src.js %}
  {% include leaflet.markercluster-src.js %}
  {% include test_geo2.json %}
  {% include map.js %}
</script>
