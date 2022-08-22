const style = new ol.style.Style({
    fill: new ol.style.Fill({
      color: '#eeeeee',
    }),
  });
  
  const vector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'https://openlayers.org/data/vector/ecoregions.json',
      format: new ol.format.GeoJSON(),
    }),
    background: 'white',
    style: function (feature) {
      const color = feature.get('COLOR') || '#eeeeee';
      style.getFill().setColor(color);
      return style;
    },
  });
  
  const map = new ol.Map({
    layers: [vector],
    target: 'map',
    view: new ol.View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  
  const selectStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: '#eeeeee',
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(255, 255, 255, 0.7)',
      width: 2,
    }),
  });
  
  const status = document.getElementById('status');
  
  let selected = null;
  map.on('pointermove', function (e) {
    if (selected !== null) {
      selected.setStyle(undefined);
      selected = null;
    }
  
    map.forEachFeatureAtPixel(e.pixel, function (f) {
      selected = f;
      selectStyle.getFill().setColor(f.get('COLOR') || '#eeeeee');
      f.setStyle(selectStyle);
      return true;
    });
  
    if (selected) {
      status.innerHTML = selected.get('ECO_NAME');
    } else {
      status.innerHTML = '&nbsp;';
    }
  });