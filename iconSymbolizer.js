const iconFeature = new ol.Feature({
    geometry: new ol.geom.Point([0, 0]),
    name: 'Null Island',
    population: 4000,
    rainfall: 500,
  });
  
  const iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'data/icon.png',
    }),
  });
  
  iconFeature.setStyle(iconStyle);
  
  const vectorSource = new ol.source.Vector({
    features: [iconFeature],
  });
  
  const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });
  
  const rasterLayer = new ol.layer.Tile({
    source: new ol.source.TileJSON({
      url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
      crossOrigin: '',
    }),
  });
  
  const map = new ol.Map({
    layers: [rasterLayer, vectorLayer],
    target: document.getElementById('map'),
    view: new ol.View({
      center: [0, 0],
      zoom: 3,
    }),
  });
  
  const element = document.getElementById('popup');
  
  const popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
  });
  map.addOverlay(popup);
  
  // display popup on click
  map.on('click', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });
    if (feature) {
      popup.setPosition(evt.coordinate);
      $(element).popover({
        placement: 'top',
        html: true,
        content: feature.get('name'),
      });
      $(element).popover('show');
    } else {
      $(element).popover('dispose');
    }
  });
  
  // change mouse cursor when over marker
  map.on('pointermove', function (e) {
    const pixel = map.getEventPixel(e.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
  });
  // Close the popup when the map is moved
  map.on('movestart', function () {
    $(element).popover('dispose');
  });