
    var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'png'
    });
      
        var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 16,
      ext: 'png'
    });
    
    
        var map = L.map('mapid', {
          center: [51.505, -0.09],
          zoom: 12,
          layers: [Stamen_TonerLite]
        });
    
    var baseMaps = {
        "Pretty (No Labels)": Stamen_Watercolor,
        "Informative (Labeled)": Stamen_TonerLite
    };
    
    L.control.layers(baseMaps, null, {collapsed: false}).addTo(map).setPosition('topleft').expand();
    
        var markers = L.markerClusterGroup();
        var geoJsonLayer = L.geoJson(mydata, {
          onEachFeature: function (feature, layer) {
            layer.bindPopup(function(){
              var deathyr = feature.properties.end.substring(0,4);
              var name = feature.properties.name;
    
              if (name == "Living") {
                name = "(Name Removed)"
              }
    
              if (deathyr == 2018) {
                deathyr = "????";
              }
    
              return name + ", " + feature.properties.start.substring(0,4) + "-" + deathyr + "\nBirthplace: " + feature.properties.placeofbirth});
          }
        });
        markers.addLayer(geoJsonLayer);
        map.addLayer(markers);
        map.fitBounds(markers.getBounds());
    /*
      map.addControl( new L.Control.Search({
        url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
        jsonpParam: 'json_callback',
        propertyName: 'display_name',
        propertyLoc: ['lat','lon'],
        marker: L.circleMarker([0,0],{radius:30}),
        autoCollapse: true,
        autoType: true,
        minLength: 2,
        zoom: 10,
        delayType: 200,
        collapsed: false,
        firstTipSubmit: true,  
        textPlaceholder: 'Find a Person or a Location...'
      }) );
    */
      map.addControl( new L.Control.Search({
        layer: markers,
        propertyName: 'name',
        initial: false,
        autoCollapse: true,
        autoType: true,
        minLength: 2,
        zoom: 12,
        delayType: 200,
        collapsed: false,
        firstTipSubmit: true,
        textPlaceholder: 'Find a Person...',
        textErr: 'No matching names found',
        position: 'topleft'
      }) );
      