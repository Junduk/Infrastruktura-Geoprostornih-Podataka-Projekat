window.onload = init;

function init(){
    const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 1
        })
    }); 

    const district = new ol.layer.Tile({
        title: 'District', 
        type: 'base', 
        /*source: new ol.source.XYZ({
            url: "http://127.0.0.1:8080/tms/1.0.0/district/distgrid" + "/{z}/{x}/{-y}.png"  ,
            })*/
            source: new ol.source.OSM(),
        })
    const landmark = new ol.layer.Tile({
        title: 'Landmark',
        /*source: new ol.source.XYZ({
            url: "http://127.0.0.1:8080/tms/1.0.0/Landmark/landmarkgrid" + "/{z}/{x}/{-y}.png"  ,
            })*/
        source: new ol.source.OSM(),
        })
        const road = new ol.layer.Tile({
        title: 'Road',
        /*source: new ol.source.XYZ({
            url: "http://127.0.0.1:8080/tms/1.0.0/road/roadgrid" + "/{z}/{x}/{-y}.png"  ,
            })*/
            visible: true,
        source: new ol.source.OSM(),
        })

    
    

    const baseLayerGroup = new ol.layer.Group({
        layers: [
            district, landmark,  road
        ]
    })
    map.addLayer(baseLayerGroup);
}