var vectorSource;

(function () {
/* 	var map = new ol.Map({
		layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
		target: document.getElementById('map-canvas'),
		view: new ol.View({
			center: [1085800.6312701665, 7556020.294111529],
			zoom: 3
		})
	});*/
	
	var attribution = new /*global ol*/ ol.Attribution({
	  html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
	  'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
	}); 

	var raster = new ol.layer.Tile({
	  source: new ol.source.OSM()
	});

	var map = new ol.Map({
		layers: [raster],
	  target: 'map-canvas',
	  layers: [
		new ol.layer.Tile({
		  source: new ol.source.XYZ({
			attributions: [attribution],
			url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
			'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
		  })
		})
	  ],
	  view: new ol.View({
		center: ol.proj.fromLonLat([67.002778, 48.614444]),
		zoom: 5.5
	  })
	});
		
	
$('#upload').on('click', function polygon() 
	{

	 vectorSource = new ol.source.Vector({
			//create empty vector
		});

	 var res = Perenesti();
	 var Length = res.length/2;
	 var Average_coords = average (res,Length);
	 var points = [];
	
	
		for (var i = 0; i < res.length; i += 2) 
		{
			points.push(ol.proj.transform([res[i], res[i+1]], 'EPSG:4326', 'EPSG:3857'));
		}
		
		var linearRing = new ol.geom.LinearRing(points);
		
		var feature = new ol.Feature({
			geometry: new ol.geom.Polygon([points])
			
		});
		
		
		vectorSource.addFeature(feature);


		var vectorLayer = new ol.layer.Vector({
			source: vectorSource,
			//style: style
	});
	
	
	
	map.addLayer(vectorLayer);
	map.getView().setCenter(ol.proj.transform([Average_coords[0],Average_coords[1]], 'EPSG:4326', 'EPSG:3857'));
	map.getView().setZoom(3);
	
	var coordinates2 = [];
	for (var i = 0; i < res.length-1; i += 2) 
		{
			coordinates2.push([res[i], res[i+1]]);
		}
	var wgs84Sphere = new ol.Sphere(6378137);
	
	
	
		
	var area_m = wgs84Sphere.geodesicArea(coordinates2);
	var area_km = area_m / 1000 / 1000;
	document.getElementById("two").value = area_km;
 
      
  });
		
})();


