var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BARRIOS_ACTUALIZ_1 = new ol.format.GeoJSON();
var features_BARRIOS_ACTUALIZ_1 = format_BARRIOS_ACTUALIZ_1.readFeatures(json_BARRIOS_ACTUALIZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOS_ACTUALIZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_ACTUALIZ_1.addFeatures(features_BARRIOS_ACTUALIZ_1);
var lyr_BARRIOS_ACTUALIZ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOS_ACTUALIZ_1, 
                style: style_BARRIOS_ACTUALIZ_1,
                popuplayertitle: 'BARRIOS_ACTUALIZ',
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_ACTUALIZ_1.png" /> BARRIOS_ACTUALIZ'
            });
var format_Zonasturisticas_2 = new ol.format.GeoJSON();
var features_Zonasturisticas_2 = format_Zonasturisticas_2.readFeatures(json_Zonasturisticas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasturisticas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasturisticas_2.addFeatures(features_Zonasturisticas_2);
cluster_Zonasturisticas_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Zonasturisticas_2
});
var lyr_Zonasturisticas_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Zonasturisticas_2, 
                style: style_Zonasturisticas_2,
                popuplayertitle: 'Zonas turisticas',
                interactive: true,
    title: 'Zonas turisticas<br />\
    <img src="styles/legend/Zonasturisticas_2_0.png" /> Barrio Estación<br />\
    <img src="styles/legend/Zonasturisticas_2_1.png" /> Centro Cultural Comunitario Pabellón 83<br />\
    <img src="styles/legend/Zonasturisticas_2_2.png" /> Centro cultural de Hualpén<br />\
    <img src="styles/legend/Zonasturisticas_2_3.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Zonasturisticas_2_4.png" /> Estadio Municipal Alcaldesa Ester Roa Rebolledo<br />\
    <img src="styles/legend/Zonasturisticas_2_5.png" /> Humedal los Batros<br />\
    <img src="styles/legend/Zonasturisticas_2_6.png" /> Laguna Lo Méndez<br />\
    <img src="styles/legend/Zonasturisticas_2_7.png" /> Laguna Redonda<br />\
    <img src="styles/legend/Zonasturisticas_2_8.png" /> Mall Arauco Coronel<br />\
    <img src="styles/legend/Zonasturisticas_2_9.png" /> Mall Portal Talcahuano<br />\
    <img src="styles/legend/Zonasturisticas_2_10.png" /> Museo de la Historia<br />\
    <img src="styles/legend/Zonasturisticas_2_11.png" /> Parque Las Tres Pascualas<br />\
    <img src="styles/legend/Zonasturisticas_2_12.png" /> Parque Zoológico Nonguén<br />\
    <img src="styles/legend/Zonasturisticas_2_13.png" /> Plaza Arturo Prat<br />\
    <img src="styles/legend/Zonasturisticas_2_14.png" /> Plaza Bellavista<br />\
    <img src="styles/legend/Zonasturisticas_2_15.png" /> Plaza de Armas Talcahuano<br />\
    <img src="styles/legend/Zonasturisticas_2_16.png" /> Plaza el Morro<br />\
    <img src="styles/legend/Zonasturisticas_2_17.png" /> Plaza Independencia<br />\
    <img src="styles/legend/Zonasturisticas_2_18.png" /> Plaza Perú<br />\
    <img src="styles/legend/Zonasturisticas_2_19.png" /> Teatro Enrique Molina Garmendia<br />\
    <img src="styles/legend/Zonasturisticas_2_20.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_BARRIOS_ACTUALIZ_1.setVisible(false);lyr_Zonasturisticas_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BARRIOS_ACTUALIZ_1,lyr_Zonasturisticas_2];
lyr_BARRIOS_ACTUALIZ_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_Zonasturisticas_2.set('fieldAliases', {'Nombre': 'Nombre', 'Comuna': 'Comuna', 'Región': 'Región', 'Localizaci': 'Localizaci', 'Video': 'Video', });
lyr_BARRIOS_ACTUALIZ_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_Zonasturisticas_2.set('fieldImages', {'Nombre': 'TextEdit', 'Comuna': 'TextEdit', 'Región': 'TextEdit', 'Localizaci': 'TextEdit', 'Video': 'TextEdit', });
lyr_BARRIOS_ACTUALIZ_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_Zonasturisticas_2.set('fieldLabels', {'Nombre': 'no label', 'Comuna': 'no label', 'Región': 'no label', 'Localizaci': 'no label', 'Video': 'no label', });
lyr_Zonasturisticas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});