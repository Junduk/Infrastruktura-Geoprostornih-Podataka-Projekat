window.onload = init;
function init(){
    const map2 = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
        }),
        target: 'map2'
    })

    const openStreetMapStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
    })
/*
    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url:'https://google.com'
        }),
        visible: false,
        title: 'OSMHumanitarian'
    })

    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://google.com',
            //attributions:  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://www.openstreetmap.org/copyright">0DbL</a>.'
        }),
        visible: true,
        title: 'StamenTerrain'
    })
*/
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandard
        ]
    })
    map2.addLayer(baseLayerGroup);
}