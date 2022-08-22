
const styles = [
  'RoadOnDemand',
  'Aerial',
  'AerialWithLabelsOnDemand',
  'CanvasDark',
  'OrdnanceSurvey',
];
const layers = [];
let i, ii;
for (i = 0, ii = styles.length; i < ii; ++i) {
  layers.push(
    new ol.layer.Tile({
      visible: false,
      preload: Infinity,
      source: new ol.source.BingMaps({
        key: 'AmwdTat-GrEe70sT-wh6qFqgTuyw5EueNNunqWYxO38NLHaEU2JY3Uo0s_tL7_Yc',
        imagerySet: styles[i],
      }),
    })
  );
}
const map = new ol.Map({
  layers: layers,
  target: 'map',
  view: new ol.View({
    center: [2208182.500931497, 5662421.690610687],
    zoom: 13,
  }),
});

const select = document.getElementById('layer-select');
function onChange() {
  const style = select.value;
  for (let i = 0, ii = layers.length; i < ii; ++i) {
    layers[i].setVisible(styles[i] === style);
  }
}
select.addEventListener('change', onChange);
onChange();