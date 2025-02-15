ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([400725.009297, 1529743.402078, 499567.031094, 1580994.820788]);
var wms_layers = [];

var format_LIMITESCOMMUNESBAS_0 = new ol.format.GeoJSON();
var features_LIMITESCOMMUNESBAS_0 = format_LIMITESCOMMUNESBAS_0.readFeatures(json_LIMITESCOMMUNESBAS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_LIMITESCOMMUNESBAS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCOMMUNESBAS_0.addFeatures(features_LIMITESCOMMUNESBAS_0);
var lyr_LIMITESCOMMUNESBAS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCOMMUNESBAS_0, 
                style: style_LIMITESCOMMUNESBAS_0,
                popuplayertitle: 'LIMITES COMMUNES BAS',
                interactive: true,
                title: '<img src="styles/legend/LIMITESCOMMUNESBAS_0.png" /> LIMITES COMMUNES BAS'
            });
var format_COMMUNESAVECPROJET_1 = new ol.format.GeoJSON();
var features_COMMUNESAVECPROJET_1 = format_COMMUNESAVECPROJET_1.readFeatures(json_COMMUNESAVECPROJET_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESAVECPROJET_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESAVECPROJET_1.addFeatures(features_COMMUNESAVECPROJET_1);
var lyr_COMMUNESAVECPROJET_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESAVECPROJET_1, 
                style: style_COMMUNESAVECPROJET_1,
                popuplayertitle: 'COMMUNES AVEC PROJET',
                interactive: false,
                title: '<img src="styles/legend/COMMUNESAVECPROJET_1.png" /> COMMUNES AVEC PROJET'
            });
var format_AICCRA_2 = new ol.format.GeoJSON();
var features_AICCRA_2 = format_AICCRA_2.readFeatures(json_AICCRA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_AICCRA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AICCRA_2.addFeatures(features_AICCRA_2);
var lyr_AICCRA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AICCRA_2, 
                style: style_AICCRA_2,
                popuplayertitle: 'AICCRA',
                interactive: true,
                title: '<img src="styles/legend/AICCRA_2.png" /> AICCRA'
            });
var format_P22RC_3 = new ol.format.GeoJSON();
var features_P22RC_3 = format_P22RC_3.readFeatures(json_P22RC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_P22RC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P22RC_3.addFeatures(features_P22RC_3);
var lyr_P22RC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P22RC_3, 
                style: style_P22RC_3,
                popuplayertitle: 'P22RC',
                interactive: true,
                title: '<img src="styles/legend/P22RC_3.png" /> P22RC'
            });
var format_OCPDEMOPLOT_4 = new ol.format.GeoJSON();
var features_OCPDEMOPLOT_4 = format_OCPDEMOPLOT_4.readFeatures(json_OCPDEMOPLOT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_OCPDEMOPLOT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCPDEMOPLOT_4.addFeatures(features_OCPDEMOPLOT_4);
var lyr_OCPDEMOPLOT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCPDEMOPLOT_4, 
                style: style_OCPDEMOPLOT_4,
                popuplayertitle: 'OCPDEMOPLOT',
                interactive: true,
                title: '<img src="styles/legend/OCPDEMOPLOT_4.png" /> OCPDEMOPLOT'
            });
var format_PACAO_5 = new ol.format.GeoJSON();
var features_PACAO_5 = format_PACAO_5.readFeatures(json_PACAO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PACAO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PACAO_5.addFeatures(features_PACAO_5);
var lyr_PACAO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PACAO_5, 
                style: style_PACAO_5,
                popuplayertitle: 'PACAO',
                interactive: true,
                title: '<img src="styles/legend/PACAO_5.png" /> PACAO'
            });
var format_PARIIS_6 = new ol.format.GeoJSON();
var features_PARIIS_6 = format_PARIIS_6.readFeatures(json_PARIIS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PARIIS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARIIS_6.addFeatures(features_PARIIS_6);
var lyr_PARIIS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARIIS_6, 
                style: style_PARIIS_6,
                popuplayertitle: 'PARIIS',
                interactive: true,
                title: '<img src="styles/legend/PARIIS_6.png" /> PARIIS'
            });
var format_SOLEVO_7 = new ol.format.GeoJSON();
var features_SOLEVO_7 = format_SOLEVO_7.readFeatures(json_SOLEVO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_SOLEVO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLEVO_7.addFeatures(features_SOLEVO_7);
var lyr_SOLEVO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLEVO_7, 
                style: style_SOLEVO_7,
                popuplayertitle: 'SOLEVO',
                interactive: true,
                title: '<img src="styles/legend/SOLEVO_7.png" /> SOLEVO'
            });
var format_OCPGIS_8 = new ol.format.GeoJSON();
var features_OCPGIS_8 = format_OCPGIS_8.readFeatures(json_OCPGIS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_OCPGIS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCPGIS_8.addFeatures(features_OCPGIS_8);
var lyr_OCPGIS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCPGIS_8, 
                style: style_OCPGIS_8,
                popuplayertitle: 'OCP GIS',
                interactive: true,
                title: '<img src="styles/legend/OCPGIS_8.png" /> OCP GIS'
            });
var format_DUNDALSOUF_9 = new ol.format.GeoJSON();
var features_DUNDALSOUF_9 = format_DUNDALSOUF_9.readFeatures(json_DUNDALSOUF_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DUNDALSOUF_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DUNDALSOUF_9.addFeatures(features_DUNDALSOUF_9);
var lyr_DUNDALSOUF_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DUNDALSOUF_9, 
                style: style_DUNDALSOUF_9,
                popuplayertitle: 'DUNDAL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DUNDALSOUF_9.png" /> DUNDAL SOUF'
            });
var format_PROVALECV_10 = new ol.format.GeoJSON();
var features_PROVALECV_10 = format_PROVALECV_10.readFeatures(json_PROVALECV_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PROVALECV_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVALECV_10.addFeatures(features_PROVALECV_10);
var lyr_PROVALECV_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVALECV_10, 
                style: style_PROVALECV_10,
                popuplayertitle: 'PROVALECV',
                interactive: true,
                title: '<img src="styles/legend/PROVALECV_10.png" /> PROVALECV'
            });
var format_AGRIJEUNE_11 = new ol.format.GeoJSON();
var features_AGRIJEUNE_11 = format_AGRIJEUNE_11.readFeatures(json_AGRIJEUNE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_AGRIJEUNE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIJEUNE_11.addFeatures(features_AGRIJEUNE_11);
var lyr_AGRIJEUNE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIJEUNE_11, 
                style: style_AGRIJEUNE_11,
                popuplayertitle: 'AGRIJEUNE',
                interactive: true,
                title: '<img src="styles/legend/AGRIJEUNE_11.png" /> AGRIJEUNE'
            });
var format_PDCVR_12 = new ol.format.GeoJSON();
var features_PDCVR_12 = format_PDCVR_12.readFeatures(json_PDCVR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PDCVR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDCVR_12.addFeatures(features_PDCVR_12);
var lyr_PDCVR_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDCVR_12, 
                style: style_PDCVR_12,
                popuplayertitle: 'PDCVR',
                interactive: true,
                title: '<img src="styles/legend/PDCVR_12.png" /> PDCVR'
            });
var format_DEKKILSOUF_13 = new ol.format.GeoJSON();
var features_DEKKILSOUF_13 = format_DEKKILSOUF_13.readFeatures(json_DEKKILSOUF_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DEKKILSOUF_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEKKILSOUF_13.addFeatures(features_DEKKILSOUF_13);
var lyr_DEKKILSOUF_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEKKILSOUF_13, 
                style: style_DEKKILSOUF_13,
                popuplayertitle: 'DEKKIL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DEKKILSOUF_13.png" /> DEKKIL SOUF'
            });
var format_RICOWAS_14 = new ol.format.GeoJSON();
var features_RICOWAS_14 = format_RICOWAS_14.readFeatures(json_RICOWAS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_RICOWAS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RICOWAS_14.addFeatures(features_RICOWAS_14);
var lyr_RICOWAS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RICOWAS_14, 
                style: style_RICOWAS_14,
                popuplayertitle: 'RICOWAS',
                interactive: true,
                title: '<img src="styles/legend/RICOWAS_14.png" /> RICOWAS'
            });
var format_SHEP2_15 = new ol.format.GeoJSON();
var features_SHEP2_15 = format_SHEP2_15.readFeatures(json_SHEP2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_SHEP2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHEP2_15.addFeatures(features_SHEP2_15);
var lyr_SHEP2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHEP2_15, 
                style: style_SHEP2_15,
                popuplayertitle: 'SHEP2',
                interactive: true,
                title: '<img src="styles/legend/SHEP2_15.png" /> SHEP2'
            });

lyr_LIMITESCOMMUNESBAS_0.setVisible(true);lyr_COMMUNESAVECPROJET_1.setVisible(true);lyr_AICCRA_2.setVisible(true);lyr_P22RC_3.setVisible(true);lyr_OCPDEMOPLOT_4.setVisible(true);lyr_PACAO_5.setVisible(true);lyr_PARIIS_6.setVisible(true);lyr_SOLEVO_7.setVisible(true);lyr_OCPGIS_8.setVisible(true);lyr_DUNDALSOUF_9.setVisible(true);lyr_PROVALECV_10.setVisible(true);lyr_AGRIJEUNE_11.setVisible(true);lyr_PDCVR_12.setVisible(true);lyr_DEKKILSOUF_13.setVisible(true);lyr_RICOWAS_14.setVisible(true);lyr_SHEP2_15.setVisible(true);
var layersList = [lyr_LIMITESCOMMUNESBAS_0,lyr_COMMUNESAVECPROJET_1,lyr_AICCRA_2,lyr_P22RC_3,lyr_OCPDEMOPLOT_4,lyr_PACAO_5,lyr_PARIIS_6,lyr_SOLEVO_7,lyr_OCPGIS_8,lyr_DUNDALSOUF_9,lyr_PROVALECV_10,lyr_AGRIJEUNE_11,lyr_PDCVR_12,lyr_DEKKILSOUF_13,lyr_RICOWAS_14,lyr_SHEP2_15];
lyr_LIMITESCOMMUNESBAS_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', });
lyr_COMMUNESAVECPROJET_1.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_AICCRA_2.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_P22RC_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', 'COM_COUVER': 'COM_COUVER', });
lyr_OCPDEMOPLOT_4.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PACAO_5.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', 'COM_COUVER': 'COM_COUVER', });
lyr_PARIIS_6.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_SOLEVO_7.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_OCPGIS_8.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DUNDALSOUF_9.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_PROVALECV_10.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'OBJECTID': 'OBJECTID', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_AGRIJEUNE_11.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_PDCVR_12.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DEKKILSOUF_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_RICOWAS_14.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_SHEP2_15.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'ZONE': 'ZONE', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', ' CAR': ' CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_LIMITESCOMMUNESBAS_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', });
lyr_COMMUNESAVECPROJET_1.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_AICCRA_2.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_P22RC_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', 'COM_COUVER': 'TextEdit', });
lyr_OCPDEMOPLOT_4.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PACAO_5.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', 'COM_COUVER': 'TextEdit', });
lyr_PARIIS_6.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_SOLEVO_7.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_OCPGIS_8.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DUNDALSOUF_9.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PROVALECV_10.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'OBJECTID': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_AGRIJEUNE_11.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_PDCVR_12.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DEKKILSOUF_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_RICOWAS_14.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_SHEP2_15.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'ZONE': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', ' CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_LIMITESCOMMUNESBAS_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'COMMUNE': 'inline label - always visible', 'MILIEU': 'hidden field', });
lyr_COMMUNESAVECPROJET_1.set('fieldLabels', {'REGION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'COMMUNE': 'header label - visible with data', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AICCRA_2.set('fieldLabels', {'id': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_P22RC_3.set('fieldLabels', {'id': 'hidden field', 'Nom': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', 'COM_COUVER': 'no label', });
lyr_OCPDEMOPLOT_4.set('fieldLabels', {'id': 'hidden field', 'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PACAO_5.set('fieldLabels', {'id': 'hidden field', 'Nom': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', 'COM_COUVER': 'hidden field', });
lyr_PARIIS_6.set('fieldLabels', {'id': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_SOLEVO_7.set('fieldLabels', {'id': 'hidden field', 'Nom': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_OCPGIS_8.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DUNDALSOUF_9.set('fieldLabels', {'id': 'hidden field', 'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PROVALECV_10.set('fieldLabels', {'id': 'hidden field', 'Nom': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'OBJECTID': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_AGRIJEUNE_11.set('fieldLabels', {'id': 'hidden field', 'Nom': 'hidden field', });
lyr_PDCVR_12.set('fieldLabels', {'id': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - always visible', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - always visible', 'TELEPHONE': 'header label - visible with data', });
lyr_DEKKILSOUF_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'inline label - always visible', 'DEPARTEMEN': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'CAR': 'header label - always visible', 'TELEPHONE': 'inline label - always visible', });
lyr_RICOWAS_14.set('fieldLabels', {'id': 'hidden field', 'NOM': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'header label - always visible', 'DEPARTEMEN': 'header label - always visible', 'COMMUNE': 'header label - always visible', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - always visible', 'TELEPHONE': 'header label - visible with data', });
lyr_SHEP2_15.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'OBJECTID': 'no label', 'REGION': 'header label - always visible', 'DEPARTEMEN': 'header label - always visible', 'COMMUNE': 'header label - always visible', 'MILIEU': 'hidden field', 'ZONE': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', ' CAR': 'header label - always visible', 'TELEPHONE': 'header label - always visible', });
lyr_SHEP2_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});