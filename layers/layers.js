var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Jaringan_Transportasi_1 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_1 = format_Jaringan_Transportasi_1.readFeatures(json_Jaringan_Transportasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_1.addFeatures(features_Jaringan_Transportasi_1);
var lyr_Jaringan_Transportasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_1, 
                style: style_Jaringan_Transportasi_1,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: false,
                title: '<img src="styles/legend/Jaringan_Transportasi_1.png" /> Jaringan_Transportasi'
            });
var format_JANGKAUAN800M_2 = new ol.format.GeoJSON();
var features_JANGKAUAN800M_2 = format_JANGKAUAN800M_2.readFeatures(json_JANGKAUAN800M_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUAN800M_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUAN800M_2.addFeatures(features_JANGKAUAN800M_2);
var lyr_JANGKAUAN800M_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUAN800M_2, 
                style: style_JANGKAUAN800M_2,
                popuplayertitle: 'JANGKAUAN 800M',
                interactive: false,
                title: '<img src="styles/legend/JANGKAUAN800M_2.png" /> JANGKAUAN 800M'
            });
var format_JANGKAUAN400M_3 = new ol.format.GeoJSON();
var features_JANGKAUAN400M_3 = format_JANGKAUAN400M_3.readFeatures(json_JANGKAUAN400M_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUAN400M_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUAN400M_3.addFeatures(features_JANGKAUAN400M_3);
var lyr_JANGKAUAN400M_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUAN400M_3, 
                style: style_JANGKAUAN400M_3,
                popuplayertitle: 'JANGKAUAN 400M',
                interactive: false,
                title: '<img src="styles/legend/JANGKAUAN400M_3.png" /> JANGKAUAN 400M'
            });
var format_Halte_4 = new ol.format.GeoJSON();
var features_Halte_4 = format_Halte_4.readFeatures(json_Halte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_4.addFeatures(features_Halte_4);
var lyr_Halte_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_4, 
                style: style_Halte_4,
                popuplayertitle: 'Halte',
                interactive: true,
    title: 'Halte<br />\
    <img src="styles/legend/Halte_4_0.png" /> Halte Ahmad Dahlan<br />\
    <img src="styles/legend/Halte_4_1.png" /> Halte Imam Bonjol<br />\
    <img src="styles/legend/Halte_4_2.png" /> Halte Permata Hijau<br />\
    <img src="styles/legend/Halte_4_3.png" /> Halte Semampir<br />\
    <img src="styles/legend/Halte_4_4.png" /> Halte Semeru<br />' });

lyr_Positronnolabels_0.setVisible(true);lyr_Jaringan_Transportasi_1.setVisible(true);lyr_JANGKAUAN800M_2.setVisible(true);lyr_JANGKAUAN400M_3.setVisible(true);lyr_Halte_4.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_Jaringan_Transportasi_1,lyr_JANGKAUAN800M_2,lyr_JANGKAUAN400M_3,lyr_Halte_4];
lyr_Jaringan_Transportasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_JANGKAUAN800M_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_JANGKAUAN400M_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_Halte_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'RATING': 'RATING', 'ALAMAT': 'ALAMAT', });
lyr_Jaringan_Transportasi_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_JANGKAUAN800M_2.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', });
lyr_JANGKAUAN400M_3.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', });
lyr_Halte_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'RATING': '', 'ALAMAT': '', });
lyr_Jaringan_Transportasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_JANGKAUAN800M_2.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_JANGKAUAN400M_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Halte_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'header label - always visible', 'REMARK': 'hidden field', 'RATING': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', });
lyr_Halte_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});