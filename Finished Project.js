//OSM podloga
var podloga1 = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var podloga2 = new ol.layer.Tile({
  source: new ol.source.BingMaps({
    preload: Infinity,
    key: 'AmwdTat-GrEe70sT-wh6qFqgTuyw5EueNNunqWYxO38NLHaEU2JY3Uo0s_tL7_Yc',
    imagerySet: 'AerialWithLabelsOnDemand',
  }),
})

var buildings = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:zgrade'},
      serverType:'geoserver'
  })
});

var landuse = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:landuse'},
      serverType:'geoserver'
  })
});

var natural = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:natural'},
      serverType:'geoserver'
  })
});

var places = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:places'},
      serverType:'geoserver'
  })
});

var railways = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:railways'},
      serverType:'geoserver'
  })
});

var roads = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:roads'},
      serverType:'geoserver'
  })
});

var waterways = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url:'http://localhost:8080/geoserver/wms',
      params:{'LAYERS': 'IGP_projekat:waterways'},
      serverType:'geoserver'
  })
});

const source1 = new ol.source.Vector({wrapX: false});
const vector = new ol.layer.Vector({
  source: source1,
});
var layers1 = [podloga1, buildings, landuse, natural, places, railways, roads, waterways, vector];
var layers2 = [podloga2, buildings, landuse, natural, places, railways, roads, waterways, vector];
var layers3;

var map = new ol.Map({
  controls: ol.control.defaults().extend([new ol.control.FullScreen()]),
  layers: layers1,
  target: 'map',
  view: new ol.View({
      center:ol.proj.fromLonLat([19.836944, 45.251667]),
      zoom:6
  })
})

var click;
var iconBool = false;
var arrayOfPins = [];
function iconSymbolizer(){
  if(!iconBool){
    iconSymbolizer1();
    document.getElementById('iconB').classList.add("bClass");
    iconBool = true;
  } else {
    ol.Observable.unByKey(click);
    document.getElementById('iconB').classList.remove("bClass");
    iconBool = false;
  }
}

//funkcija za postavljanje markera na mapu

function iconSymbolizer1(){
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon(({
        anchor: [0.5, 1],
        src: "https://openlayers.org/en/latest/examples/data/icon.png"
    }))
  });
  var coordinates;
  click = map.on('click', function (evt) {
    var coords = ol.proj.toLonLat(evt.coordinate);
    var lon = coords[0];
    var lat = coords[1];
    coordinates = [lon, lat];
    var iconFeature = new ol.Feature({geometry: new ol.geom.Point(ol.proj.fromLonLat(coordinates))});
    iconFeature.setStyle(iconStyle);
    var layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [iconFeature]})});
    arrayOfPins.push(layer);
    map.addLayer(layer);
  });
}

//funkcija za brisanje svih markera

function resetIcons(){
  for(var i = 0; i <= arrayOfPins.length; i++){
    map.removeLayer(arrayOfPins[i]);
  }
}

var bingBool = false; //boolean koji pokazuje da li je bing ili osm upaljen
var drawBool = false;
const typeSelect2 = document.getElementById("type2");
let draw1; // global so we can remove it later
var lista2 = document.getElementById("lista2");  
lista2.style.display = "none"; //dugme se postavlja automatski na nevidljivo

//funkcija za reset vektora layera

function reset(){
  vector.getSource().clear();
}

function drawing(){
  if(!drawBool){
    drawBool = true;
    lista2.style.display = "";
    document.getElementById('drawB').classList.add("bClass");
    if(measureBool){
      measureBool = true;
      measure();
    }
    drawing1();
  } else {
    drawBool = false;
    lista2.style.display = "none";
    document.getElementById('drawB').classList.remove("bClass");
    map.removeInteraction(draw1);
  }
}

//funkcija za crtanje oblika

function drawing1() {
  var activeLayers = [null, buildings, landuse, natural, places, railways, roads, waterways, vector];
  if(bingBool){
    activeLayers[0] = podloga2;
  } else {
    activeLayers[0] = podloga1;
  }
  map.setLayers(activeLayers);
  let value = typeSelect2.value;
  if (value !== 'None') {
    let geometryFunction;
    if (value === 'Square') {
      value = 'Circle';
      geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
    } else if (value === 'Box') {
      value = 'Circle';
      geometryFunction = ol.interaction.Draw.createBox();
    } else if (value === 'Star') {
      value = 'Circle';
      geometryFunction = function (coordinates, geometry) {
        const center = coordinates[0];
        const last = coordinates[coordinates.length - 1];
        const dx = center[0] - last[0];
        const dy = center[1] - last[1];
        const radius = Math.sqrt(dx * dx + dy * dy);
        const rotation = Math.atan2(dy, dx);
        const newCoordinates = [];
        const numPoints = 12;
        for (let i = 0; i < numPoints; ++i) {
          const angle = rotation + (i * 2 * Math.PI) / numPoints;
          const fraction = i % 2 === 0 ? 1 : 0.5;
          const offsetX = radius * fraction * Math.cos(angle);
          const offsetY = radius * fraction * Math.sin(angle);
          newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
        }
        newCoordinates.push(newCoordinates[0].slice());
        if (!geometry) {
          geometry = new ol.geom.Polygon([newCoordinates]);
        } else {
          geometry.setCoordinates([newCoordinates]);
        }
        return geometry;
      };
    }
    draw1 = new ol.interaction.Draw({
      source: source1,
      type: value,
      geometryFunction: geometryFunction,
    });
    map.addInteraction(draw1);
  }
}

//funkcija koja mijenja oblike za funkciju crtanje

typeSelect2.onchange = function () {
  map.removeInteraction(draw1);
  drawing1();
};

//funkcija koja se poziva na dugme download

function download(){
  map.once('rendercomplete', download1());
  map.renderSync();
}

//funkcija za preuzimanje fajlova u png formatu

function download1(){
  const mapCanvas = document.createElement('canvas');
  const size = map.getSize();
  mapCanvas.width = size[0];
  mapCanvas.height = size[1];
  const mapContext = mapCanvas.getContext('2d');
  Array.prototype.forEach.call(
    map.getViewport().querySelectorAll('.ol-layer canvas, canvas.ol-layer'),
    function (canvas) {
      if (canvas.width > 0) {
        const opacity =
          canvas.parentNode.style.opacity || canvas.style.opacity;
        mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);

        const backgroundColor = canvas.parentNode.style.backgroundColor;
        if (backgroundColor) {
          mapContext.fillStyle = backgroundColor;
          mapContext.fillRect(0, 0, canvas.width, canvas.height);
        }

        let matrix;
        const transform = canvas.style.transform;
        if (transform) {
          // Get the transform parameters from the style's transform matrix
          matrix = transform
            .match(/^matrix\(([^\(]*)\)$/)[1]
            .split(',')
            .map(Number);
        } else {
          matrix = [
            parseFloat(canvas.style.width) / canvas.width,
            0,
            0,
            parseFloat(canvas.style.height) / canvas.height,
            0,
            0,
          ];
        }
        // Apply the transform to the export map context
        CanvasRenderingContext2D.prototype.setTransform.apply(
          mapContext,
          matrix
        );
        mapContext.drawImage(canvas, 0, 0);
      }
    }
  );
  mapContext.globalAlpha = 1;
  if (navigator.msSaveBlob) {
    // link download attribute does not work on MS browsers
    navigator.msSaveBlob(mapCanvas.msToBlob(), 'map.png');
  } else {
    const link = document.getElementById('image-download');
    link.href = mapCanvas.toDataURL();
    link.click();
  }
}

buildings.setVisible(false);
landuse.setVisible(false);
natural.setVisible(false);
places.setVisible(false);
railways.setVisible(false);
roads.setVisible(false);
waterways.setVisible(false);

buildingsBool = false;
landuseBool = false;
naturalBool = false;
placesBool = false;
railwaysBool = false;
roadsBool = false;
waterwaysBool = false;
//funkcije za checkboxove

function layerCheckbox1() {
  if (document.getElementById("l3").checked) {
      buildings.setVisible(true);
      buildingsBool = true;
  }
  else {
      buildings.setVisible(false);
      buildingsBool = false;
  }
};

function layerCheckbox2() {
  if (document.getElementById("l4").checked) {
      landuse.setVisible(true);
      landuseBool = true;
  }
  else {
      landuse.setVisible(false);
      landuseBool = false;
  }
};

function layerCheckbox3() {
  if (document.getElementById("l5").checked) {
      natural.setVisible(true);
      naturalBool = true;
  }
  else {
      natural.setVisible(false);
      naturalBool = false;
  }
};

function layerCheckbox4() {
  if (document.getElementById("l6").checked) {
      places.setVisible(true);
      placesBool = true;
  }
  else {
      places.setVisible(false);
      placesBool = false;
  }
};

function layerCheckbox5() {
  if (document.getElementById("l7").checked) {
      railways.setVisible(true);
      railwaysBool = true;
  }
  else {
      railways.setVisible(false);
      railwaysBool = false;
  }
};

function layerCheckbox6() {
  if (document.getElementById("l8").checked) {
      roads.setVisible(true);
      roadsBool = true;
  }
  else {
      roads.setVisible(false);
      roadsBool = false;
  }
};

function layerCheckbox7() {
  if (document.getElementById("l9").checked) {
      waterways.setVisible(true);
      waterwaysBool = true;
  }
  else {
      waterways.setVisible(false);
      waterwaysBool = false;
  }
};

//funkcije za bing, measure

let helpTooltip;
let measureTooltip;
var measureBool = false; //boolean da prikaze da li je dugme stisnuto ili ne
var lista1 = document.getElementById("lista1");  
var checkPodloga1 = document.getElementById("checkPodloga1");  
var checkPodloga2 = document.getElementById("checkPodloga2");  
lista1.style.display = "none"; //dugme se postavlja automatski na nevidljivo
var selectBool = false; //boolean za select feature

function bingOSM(){
  if(!bingBool){
      bingBool = true;
      selectBool = false;
      map.setLayers(layers2);
      checkPodloga1.checked = false;
      checkPodloga2.checked = true;
  } else {
      bingBool = false;
      selectBool = false;
      map.setLayers(layers1);
      checkPodloga1.checked = true;
      checkPodloga2.checked = false;
  }
  activateLayers();
}

var clk;
function selectFeature(){
  if(!selectBool){
    checkSelect.checked = true;
    checkPodloga1.disabled = true;
    checkPodloga2.disabled = true;
    measureB.disabled = true;
    drawB.disabled = true;
    resetB.disabled = true;
    iconB.disabled = true;
    resetIconsB.disabled = true;
    selectBool = true;
    drawBool = true;
    drawing();
    measureBool = true;
    measure();
    l3.checked = false;
    l4.checked = false;
    l5.checked = false;
    l6.checked = false;
    l7.checked = false;
    l8.checked = false;
    l9.checked = false;
    l3.disabled = true;
    l4.disabled = true;
    l5.disabled = true;
    l6.disabled = true;
    l7.disabled = true;
    l8.disabled = true;
    l9.disabled = true;
    selectFeature1();
  } else {
    document.getElementById('status').innerHTML = "";
    ol.Observable.unByKey(clk);
    checkSelect.checked = false;
    checkPodloga1.disabled = false;
    checkPodloga2.disabled = false;
    measureB.disabled = false;
    drawB.disabled = false;
    resetB.disabled = false;
    iconB.disabled = false;
    resetIconsB.disabled = false;
    selectBool = false;
    if(!bingBool){
      map.setLayers(layers1);
      checkPodloga1.checked = true;
    } else {
      map.setLayers(layers2);
      checkPodloga2.checked = true;
    }
    activateLayers();
  }
}

function activateLayers(){
  if(buildingsBool){
    l3.checked = true;
  }
  if(landuseBool){
    l4.checked = true;
  }
  if(naturalBool){
    l5.checked = true;
  }
  if(placesBool){
    l6.checked = true;
  }
  if(railwaysBool){
    l7.checked = true;
  }
  if(roadsBool){
    l8.checked = true;
  }
  if(waterwaysBool){
    l9.checked = true;
  }
  l3.disabled = false;
  l4.disabled = false;
  l5.disabled = false;
  l6.disabled = false;
  l7.disabled = false;
  l8.disabled = false;
  l9.disabled = false;
}
//funkcija za select feature

function selectFeature1(){
  const style = new ol.style.Style({
    fill: new ol.style.Fill({
      color: '#eeeeee',
    }),
  });
  
  const vector1 = new ol.layer.Vector({
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
  clk = map.on('pointermove', function (e) {
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
  layers3 = [vector1];
  map.setLayers(layers3);
}

/**
     * The measure tooltip element.
     * @type {HTMLElement}
     */
 let measureTooltipElement;

 /**
     * The help tooltip element.
     * @type {HTMLElement}
     */
  let helpTooltipElement;

function measure(){
  if(!measureBool){
      if(drawBool){
        drawBool = true;
        drawing();
      }
      measure1();
      measureBool = true;
      document.getElementById('measureB').classList.add("bClass"); //mjenjanje prikaza dugmeta kad je pritisnuto
      lista1.style.display = "";
  } else {
      measureBool = false;
      map.removeInteraction(draw1);
      map.removeOverlay(helpTooltip);
      map.removeOverlay(measureTooltip);
      document.getElementById('measureB').classList.remove("bClass"); //skidanje klase style za dugme kad se iskljuci 
      lista1.style.display = "none"; 
  }
}

function measure1(){
    const raster = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });
    
    const source = new ol.source.Vector();
    
    const vector = new ol.layer.Vector({
      source: source,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new ol.style.Stroke({
          color: '#ffcc33',
          width: 2,
        }),
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({
            color: '#ffcc33',
          }),
        }),
      }),
    });
    
    /**
     * Currently drawn feature.
     * @type {import("../src/ol/Feature.js").default}
     */
    let sketch;
    
    /**
     * Message to show when the user is drawing a polygon.
     * @type {string}
     */
    const continuePolygonMsg = 'Click to continue drawing the polygon';
    
    /**
     * Message to show when the user is drawing a line.
     * @type {string}
     */
    const continueLineMsg = 'Click to continue drawing the line';
    
    /**
     * Handle pointer move.
     * @param {import("../src/ol/MapBrowserEvent").default} evt The event.
     */
    const pointerMoveHandler = function (evt) {
      if (evt.dragging) {
        return;
      }
      /** @type {string} */
      let helpMsg = 'Click to start drawing';
    
      if (sketch) {
        const geom = sketch.getGeometry();
        if (geom instanceof ol.geom.Polygon) {
          helpMsg = continuePolygonMsg;
        } else if (geom instanceof ol.geom.LineString) {
          helpMsg = continueLineMsg;
        }
      }
    
      helpTooltipElement.innerHTML = helpMsg;
      helpTooltip.setPosition(evt.coordinate);
    
      helpTooltipElement.classList.remove('hidden');
    };

    map.on('pointermove', pointerMoveHandler);
    
    map.getViewport().addEventListener('mouseout', function () {
      helpTooltipElement.classList.add('hidden');
    });
    
    const typeSelect1 = document.getElementById('type1');
    
    /**
     * Format length output.
     * @param {LineString} line The line.
     * @return {string} The formatted length.
     */
    const formatLength = function (line) {
      const length = line.getLength();
      let output;
      if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
      } else {
        output = Math.round(length * 100) / 100 + ' ' + 'm';
      }
      return output;
    };
    
    /**
     * Format area output.
     * @param {Polygon} polygon The polygon.
     * @return {string} Formatted area.
     */
    const formatArea = function (polygon) {
      const area = polygon.getArea();
      let output;
      if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
      } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
      }
      return output;
    };
    
    function addInteraction() {
      const type = typeSelect1.value == 'area' ? 'Polygon' : 'LineString';
      draw1 = new ol.interaction.Draw({
        source: source,
        type: type,
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)',
          }),
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.5)',
            lineDash: [10, 10],
            width: 2,
          }),
          image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({
              color: 'rgba(0, 0, 0, 0.7)',
            }),
            fill: new ol.style.Fill({
              color: 'rgba(255, 255, 255, 0.2)',
            }),
          }),
        }),
      });
      map.addInteraction(draw1);
    
      createMeasureTooltip();
      createHelpTooltip();
    
      let listener;
      draw1.on('drawstart', function (evt) {
        // set sketch
        sketch = evt.feature;
    
        /** @type {import("../src/ol/coordinate.js").Coordinate|undefined} */
        let tooltipCoord = evt.coordinate;
    
        listener = sketch.getGeometry().on('change', function (evt) {
          const geom = evt.target;
          let output;
          if (geom instanceof ol.geom.Polygon) {
            output = formatArea(geom);
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof ol.geom.LineString) {
            output = formatLength(geom);
            tooltipCoord = geom.getLastCoordinate();
          }
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      });
    
      draw1.on('drawend', function () {
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
      });
    }
    
    /**
     * Creates a new help tooltip
     */
    function createHelpTooltip() {
      if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
      }
      helpTooltipElement = document.createElement('div');
      helpTooltipElement.className = 'ol-tooltip hidden';
      helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left',
      });
      map.addOverlay(helpTooltip);
    }
    
    /**
     * Creates a new measure tooltip
     */
    function createMeasureTooltip() {
      if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
      }
      measureTooltipElement = document.createElement('div');
      measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
      measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
        stopEvent: false,
        insertFirst: false,
      });
      map.addOverlay(measureTooltip);
    }
    
    /**
     * Let user change the geometry type.
     */

    
    typeSelect1.onchange = function () {
      map.removeInteraction(draw1);
      addInteraction();
    };
    
    addInteraction();
}