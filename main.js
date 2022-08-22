window.onload = init;
var corineUrl = 'http://filotis.itia.ntua.gr/mapserver?SERVICE=WFS&' +
    'VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=biotopes_corine&' +
    'SRSNAME=EPSG:4326&OUTPUTFORMAT=gml3';
var naturaUrl = 'http://filotis.itia.ntua.gr/mapserver?SERVICE=WFS&' +
    'VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=biotopes_natura&' +
    'SRSNAME=EPSG:4326&OUTPUTFORMAT=gml3';
var cadastreUrl = 'http://gis.ktimanet.gr/wms/wmsopen/wmsserver.aspx';
function init(){
  const map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    target: 'map',
    /*
    view: new ol.View({
      center: [0, 0],
      zoom: 2,
    }),
    */
    view: new ol.View({
      center: ol.proj.fromLonLat([-0.92, 52.96]),
      zoom: 5
    }),
    layers: [
      new ol.layer.Group({
          title: 'Base map',
          layers: [
              new ol.layer.Tile({
                  title: 'Open Street Map',
                  source: new ol.source.OSM(),
                  type: 'base'
              }),
              new ol.layer.Tile({
                  title: 'Greek Cadastre',
                  type: 'base',
                  visible: false,
                  source: new ol.source.TileWMS({
                      url: cadastreUrl
                  })
              })
          ]
      }),
      new ol.layer.Group({
          title: 'Data',
          layers: [
              new ol.layer.Vector({
                  title: 'Corine biotopes',
                  source: new ol.source.Vector({
                      format: new ol.format.WFS(),
                      url: corineUrl
                  })
              }),
              new ol.layer.Vector({
                  title: 'Natura biotopes',
                  source: new ol.source.Vector({
                      format: new ol.format.WFS(),
                      url: naturaUrl
                  })
              })
          ]
      })
  ],
  });
}

function measure(){
  //window.open("https://www.Google.com", "panel");
  var newScript = document.createElement("script");
  var inlineScript = document.createTextNode("alert('Hello World!');");
  newScript.appendChild(inlineScript); 
  footer.appendChild(newScript);
}
/*
const layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);
*/
var layerSwitcher = new ol.ol-layerswitcher.LayerSwitcher({
  reverse: true,
  groupSelectStyle: 'group'
});
map.addControl(layerSwitcher);