//var attribution = new /*global ol*/ ol.Attribution({
 /* html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
  'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
});
var raster = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var map = new ol.Map({
            layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
            target: document.getElementById('map-canvas'),
            view: new ol.View({
                center: [1085800.6312701665, 7556020.294111529],
                zoom: 3
            })*/