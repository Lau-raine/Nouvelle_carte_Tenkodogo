var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batiment_Tenkodogo_1 = new ol.format.GeoJSON();
var features_Batiment_Tenkodogo_1 = format_Batiment_Tenkodogo_1.readFeatures(json_Batiment_Tenkodogo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batiment_Tenkodogo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batiment_Tenkodogo_1.addFeatures(features_Batiment_Tenkodogo_1);
var lyr_Batiment_Tenkodogo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batiment_Tenkodogo_1, 
                style: style_Batiment_Tenkodogo_1,
                popuplayertitle: 'Batiment_Tenkodogo',
                interactive: true,
                title: '<img src="styles/legend/Batiment_Tenkodogo_1.png" /> Batiment_Tenkodogo'
            });
var format_Secteur_Tenkodogo_2 = new ol.format.GeoJSON();
var features_Secteur_Tenkodogo_2 = format_Secteur_Tenkodogo_2.readFeatures(json_Secteur_Tenkodogo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteur_Tenkodogo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteur_Tenkodogo_2.addFeatures(features_Secteur_Tenkodogo_2);
var lyr_Secteur_Tenkodogo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteur_Tenkodogo_2, 
                style: style_Secteur_Tenkodogo_2,
                popuplayertitle: 'Secteur_Tenkodogo',
                interactive: false,
                title: '<img src="styles/legend/Secteur_Tenkodogo_2.png" /> Secteur_Tenkodogo'
            });
var format_Route_Tenkodogo_3 = new ol.format.GeoJSON();
var features_Route_Tenkodogo_3 = format_Route_Tenkodogo_3.readFeatures(json_Route_Tenkodogo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Tenkodogo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Tenkodogo_3.addFeatures(features_Route_Tenkodogo_3);
var lyr_Route_Tenkodogo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_Tenkodogo_3, 
                style: style_Route_Tenkodogo_3,
                popuplayertitle: 'Route_Tenkodogo',
                interactive: true,
                title: '<img src="styles/legend/Route_Tenkodogo_3.png" /> Route_Tenkodogo'
            });
var format_Infrastructure_Tenkodogo_4 = new ol.format.GeoJSON();
var features_Infrastructure_Tenkodogo_4 = format_Infrastructure_Tenkodogo_4.readFeatures(json_Infrastructure_Tenkodogo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructure_Tenkodogo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructure_Tenkodogo_4.addFeatures(features_Infrastructure_Tenkodogo_4);
var lyr_Infrastructure_Tenkodogo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructure_Tenkodogo_4, 
                style: style_Infrastructure_Tenkodogo_4,
                popuplayertitle: 'Infrastructure_Tenkodogo',
                interactive: true,
    title: 'Infrastructure_Tenkodogo<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_0.png" /> Administration<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_1.png" /> Commerce<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_2.png" /> Education<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_3.png" /> Religion<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_4.png" /> Hébergement<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_5.png" /> Santé<br />\
    <img src="styles/legend/Infrastructure_Tenkodogo_4_6.png" /> Loisir<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batiment_Tenkodogo_1.setVisible(true);lyr_Secteur_Tenkodogo_2.setVisible(true);lyr_Route_Tenkodogo_3.setVisible(true);lyr_Infrastructure_Tenkodogo_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batiment_Tenkodogo_1,lyr_Secteur_Tenkodogo_2,lyr_Route_Tenkodogo_3,lyr_Infrastructure_Tenkodogo_4];
lyr_Batiment_Tenkodogo_1.set('fieldAliases', {'id': 'id', 'Superficie': 'Superficie', 'Niveau': 'Niveau', });
lyr_Secteur_Tenkodogo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Numéro_du': 'Numéro_du', 'Numéro_de': 'Numéro_de', 'Population': 'Population', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Nom_de_la_': 'Nom_de_la_', });
lyr_Route_Tenkodogo_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Chaussée': 'Chaussée', 'Longueur': 'Longueur', });
lyr_Infrastructure_Tenkodogo_4.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Nature': 'Nature', 'Categorie': 'Categorie', });
lyr_Batiment_Tenkodogo_1.set('fieldImages', {'id': 'TextEdit', 'Superficie': 'TextEdit', 'Niveau': 'TextEdit', });
lyr_Secteur_Tenkodogo_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Numéro_du': 'TextEdit', 'Numéro_de': 'TextEdit', 'Population': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Nom_de_la_': 'TextEdit', });
lyr_Route_Tenkodogo_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Chaussée': 'TextEdit', 'Longueur': 'TextEdit', });
lyr_Infrastructure_Tenkodogo_4.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Nature': 'TextEdit', 'Categorie': 'TextEdit', });
lyr_Batiment_Tenkodogo_1.set('fieldLabels', {'id': 'no label', 'Superficie': 'no label', 'Niveau': 'no label', });
lyr_Secteur_Tenkodogo_2.set('fieldLabels', {'OBJECTID': 'no label', 'Numéro_du': 'no label', 'Numéro_de': 'no label', 'Population': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Nom_de_la_': 'no label', });
lyr_Route_Tenkodogo_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Chaussée': 'no label', 'Longueur': 'no label', });
lyr_Infrastructure_Tenkodogo_4.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Nature': 'no label', 'Categorie': 'no label', });
lyr_Infrastructure_Tenkodogo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});