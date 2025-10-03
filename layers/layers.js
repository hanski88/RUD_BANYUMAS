var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINDESABANYUMAS_1 = new ol.format.GeoJSON();
var features_ADMINDESABANYUMAS_1 = format_ADMINDESABANYUMAS_1.readFeatures(json_ADMINDESABANYUMAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINDESABANYUMAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINDESABANYUMAS_1.addFeatures(features_ADMINDESABANYUMAS_1);
var lyr_ADMINDESABANYUMAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINDESABANYUMAS_1, 
                style: style_ADMINDESABANYUMAS_1,
                popuplayertitle: 'ADMIN DESA BANYUMAS',
                interactive: false,
                title: '<img src="styles/legend/ADMINDESABANYUMAS_1.png" /> ADMIN DESA BANYUMAS'
            });
var format_ADMINKECAMATANBANYUMAS_2 = new ol.format.GeoJSON();
var features_ADMINKECAMATANBANYUMAS_2 = format_ADMINKECAMATANBANYUMAS_2.readFeatures(json_ADMINKECAMATANBANYUMAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINKECAMATANBANYUMAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINKECAMATANBANYUMAS_2.addFeatures(features_ADMINKECAMATANBANYUMAS_2);
var lyr_ADMINKECAMATANBANYUMAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINKECAMATANBANYUMAS_2, 
                style: style_ADMINKECAMATANBANYUMAS_2,
                popuplayertitle: 'ADMIN KECAMATAN BANYUMAS',
                interactive: false,
                title: '<img src="styles/legend/ADMINKECAMATANBANYUMAS_2.png" /> ADMIN KECAMATAN BANYUMAS'
            });
var format_TitikSampling_3 = new ol.format.GeoJSON();
var features_TitikSampling_3 = format_TitikSampling_3.readFeatures(json_TitikSampling_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSampling_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSampling_3.addFeatures(features_TitikSampling_3);
var lyr_TitikSampling_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSampling_3, 
                style: style_TitikSampling_3,
                popuplayertitle: 'Titik Sampling',
                interactive: true,
                title: '<img src="styles/legend/TitikSampling_3.png" /> Titik Sampling'
            });
var format_SungaiGarisBanyumasBarat_4 = new ol.format.GeoJSON();
var features_SungaiGarisBanyumasBarat_4 = format_SungaiGarisBanyumasBarat_4.readFeatures(json_SungaiGarisBanyumasBarat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiGarisBanyumasBarat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiGarisBanyumasBarat_4.addFeatures(features_SungaiGarisBanyumasBarat_4);
var lyr_SungaiGarisBanyumasBarat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiGarisBanyumasBarat_4, 
                style: style_SungaiGarisBanyumasBarat_4,
                popuplayertitle: 'Sungai Garis Banyumas Barat',
                interactive: false,
                title: '<img src="styles/legend/SungaiGarisBanyumasBarat_4.png" /> Sungai Garis Banyumas Barat'
            });
var format_SungaiGarisBanyumas_5 = new ol.format.GeoJSON();
var features_SungaiGarisBanyumas_5 = format_SungaiGarisBanyumas_5.readFeatures(json_SungaiGarisBanyumas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiGarisBanyumas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiGarisBanyumas_5.addFeatures(features_SungaiGarisBanyumas_5);
var lyr_SungaiGarisBanyumas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiGarisBanyumas_5, 
                style: style_SungaiGarisBanyumas_5,
                popuplayertitle: 'Sungai Garis Banyumas',
                interactive: false,
                title: '<img src="styles/legend/SungaiGarisBanyumas_5.png" /> Sungai Garis Banyumas'
            });
var format_SungaiLineKotaPurwokerto_6 = new ol.format.GeoJSON();
var features_SungaiLineKotaPurwokerto_6 = format_SungaiLineKotaPurwokerto_6.readFeatures(json_SungaiLineKotaPurwokerto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiLineKotaPurwokerto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiLineKotaPurwokerto_6.addFeatures(features_SungaiLineKotaPurwokerto_6);
var lyr_SungaiLineKotaPurwokerto_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiLineKotaPurwokerto_6, 
                style: style_SungaiLineKotaPurwokerto_6,
                popuplayertitle: 'Sungai Line Kota Purwokerto',
                interactive: false,
                title: '<img src="styles/legend/SungaiLineKotaPurwokerto_6.png" /> Sungai Line Kota Purwokerto'
            });
var format_SungaiPolyBanyumasBarat_7 = new ol.format.GeoJSON();
var features_SungaiPolyBanyumasBarat_7 = format_SungaiPolyBanyumasBarat_7.readFeatures(json_SungaiPolyBanyumasBarat_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiPolyBanyumasBarat_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiPolyBanyumasBarat_7.addFeatures(features_SungaiPolyBanyumasBarat_7);
var lyr_SungaiPolyBanyumasBarat_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiPolyBanyumasBarat_7, 
                style: style_SungaiPolyBanyumasBarat_7,
                popuplayertitle: 'Sungai Poly Banyumas Barat',
                interactive: false,
                title: '<img src="styles/legend/SungaiPolyBanyumasBarat_7.png" /> Sungai Poly Banyumas Barat'
            });
var format_SungaiPolyBanyumas_8 = new ol.format.GeoJSON();
var features_SungaiPolyBanyumas_8 = format_SungaiPolyBanyumas_8.readFeatures(json_SungaiPolyBanyumas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiPolyBanyumas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiPolyBanyumas_8.addFeatures(features_SungaiPolyBanyumas_8);
var lyr_SungaiPolyBanyumas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiPolyBanyumas_8, 
                style: style_SungaiPolyBanyumas_8,
                popuplayertitle: 'Sungai Poly Banyumas',
                interactive: false,
                title: '<img src="styles/legend/SungaiPolyBanyumas_8.png" /> Sungai Poly Banyumas'
            });
var format_SungaiPolyKotaPurwokerto_9 = new ol.format.GeoJSON();
var features_SungaiPolyKotaPurwokerto_9 = format_SungaiPolyKotaPurwokerto_9.readFeatures(json_SungaiPolyKotaPurwokerto_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiPolyKotaPurwokerto_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiPolyKotaPurwokerto_9.addFeatures(features_SungaiPolyKotaPurwokerto_9);
var lyr_SungaiPolyKotaPurwokerto_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiPolyKotaPurwokerto_9, 
                style: style_SungaiPolyKotaPurwokerto_9,
                popuplayertitle: 'Sungai Poly Kota Purwokerto',
                interactive: false,
                title: '<img src="styles/legend/SungaiPolyKotaPurwokerto_9.png" /> Sungai Poly Kota Purwokerto'
            });
var format_JalanBanyumas_10 = new ol.format.GeoJSON();
var features_JalanBanyumas_10 = format_JalanBanyumas_10.readFeatures(json_JalanBanyumas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBanyumas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBanyumas_10.addFeatures(features_JalanBanyumas_10);
var lyr_JalanBanyumas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanBanyumas_10, 
                style: style_JalanBanyumas_10,
                popuplayertitle: 'Jalan Banyumas',
                interactive: false,
    title: 'Jalan Banyumas<br />\
    <img src="styles/legend/JalanBanyumas_10_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JalanBanyumas_10_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JalanBanyumas_10_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JalanBanyumas_10_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JalanBanyumas_10_4.png" /> Jalan Setapak<br />' });
var format_JalanKotaPurwokerto_11 = new ol.format.GeoJSON();
var features_JalanKotaPurwokerto_11 = format_JalanKotaPurwokerto_11.readFeatures(json_JalanKotaPurwokerto_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKotaPurwokerto_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKotaPurwokerto_11.addFeatures(features_JalanKotaPurwokerto_11);
var lyr_JalanKotaPurwokerto_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKotaPurwokerto_11, 
                style: style_JalanKotaPurwokerto_11,
                popuplayertitle: 'Jalan Kota Purwokerto',
                interactive: false,
    title: 'Jalan Kota Purwokerto<br />\
    <img src="styles/legend/JalanKotaPurwokerto_11_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JalanKotaPurwokerto_11_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/JalanKotaPurwokerto_11_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JalanKotaPurwokerto_11_3.png" /> Jalan Setapak<br />' });
var format_JalanBanyumasBarat_12 = new ol.format.GeoJSON();
var features_JalanBanyumasBarat_12 = format_JalanBanyumasBarat_12.readFeatures(json_JalanBanyumasBarat_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBanyumasBarat_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBanyumasBarat_12.addFeatures(features_JalanBanyumasBarat_12);
var lyr_JalanBanyumasBarat_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanBanyumasBarat_12, 
                style: style_JalanBanyumasBarat_12,
                popuplayertitle: 'Jalan Banyumas Barat',
                interactive: false,
    title: 'Jalan Banyumas Barat<br />\
    <img src="styles/legend/JalanBanyumasBarat_12_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JalanBanyumasBarat_12_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/JalanBanyumasBarat_12_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JalanBanyumasBarat_12_3.png" /> Jalan Setapak<br />' });
var format_ADMINKABUPATENBANYUMAS_13 = new ol.format.GeoJSON();
var features_ADMINKABUPATENBANYUMAS_13 = format_ADMINKABUPATENBANYUMAS_13.readFeatures(json_ADMINKABUPATENBANYUMAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINKABUPATENBANYUMAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINKABUPATENBANYUMAS_13.addFeatures(features_ADMINKABUPATENBANYUMAS_13);
var lyr_ADMINKABUPATENBANYUMAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINKABUPATENBANYUMAS_13, 
                style: style_ADMINKABUPATENBANYUMAS_13,
                popuplayertitle: 'ADMIN KABUPATEN BANYUMAS',
                interactive: true,
                title: '<img src="styles/legend/ADMINKABUPATENBANYUMAS_13.png" /> ADMIN KABUPATEN BANYUMAS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINDESABANYUMAS_1.setVisible(true);lyr_ADMINKECAMATANBANYUMAS_2.setVisible(true);lyr_TitikSampling_3.setVisible(true);lyr_SungaiGarisBanyumasBarat_4.setVisible(true);lyr_SungaiGarisBanyumas_5.setVisible(true);lyr_SungaiLineKotaPurwokerto_6.setVisible(true);lyr_SungaiPolyBanyumasBarat_7.setVisible(true);lyr_SungaiPolyBanyumas_8.setVisible(true);lyr_SungaiPolyKotaPurwokerto_9.setVisible(true);lyr_JalanBanyumas_10.setVisible(true);lyr_JalanKotaPurwokerto_11.setVisible(true);lyr_JalanBanyumasBarat_12.setVisible(true);lyr_ADMINKABUPATENBANYUMAS_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINDESABANYUMAS_1,lyr_ADMINKECAMATANBANYUMAS_2,lyr_TitikSampling_3,lyr_SungaiGarisBanyumasBarat_4,lyr_SungaiGarisBanyumas_5,lyr_SungaiLineKotaPurwokerto_6,lyr_SungaiPolyBanyumasBarat_7,lyr_SungaiPolyBanyumas_8,lyr_SungaiPolyKotaPurwokerto_9,lyr_JalanBanyumas_10,lyr_JalanKotaPurwokerto_11,lyr_JalanBanyumasBarat_12,lyr_ADMINKABUPATENBANYUMAS_13];
lyr_ADMINDESABANYUMAS_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_ADMINKECAMATANBANYUMAS_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', });
lyr_TitikSampling_3.set('fieldAliases', {'SOURCETHM': 'SOURCETHM', 'HOR': 'HOR', 'SOLUM': 'SOLUM', 'DRAINASE': 'DRAINASE', 'TEKSTUR': 'TEKSTUR', 'PH': 'PH', 'KTK': 'KTK', 'KB': 'KB', 'USDA': 'USDA', 'PROPORSI': 'PROPORSI', 'LANDFORM': 'LANDFORM', 'BI': 'BI', 'LERENG': 'LERENG', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'xcoord_2': 'xcoord_2', 'ycoord_2': 'ycoord_2', 'Tonase': 'Tonase', 'ton/ha 2': 'ton/ha 2', 'Titik P': 'Titik P', 'N Total': 'N Total', 'P Tersedia': 'P Tersedia', 'K Tersedia': 'K Tersedia', 'B.Timur': 'B.Timur', 'L.Selatan': 'L.Selatan', 'D Urea': 'D Urea', 'D SP-36': 'D SP-36', 'D KCL': 'D KCL', 'BO Tanah': 'BO Tanah', 'pH ( H2O )': 'pH ( H2O )', });
lyr_SungaiGarisBanyumasBarat_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SungaiGarisBanyumas_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SungaiLineKotaPurwokerto_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SungaiPolyBanyumasBarat_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SungaiPolyBanyumas_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SungaiPolyKotaPurwokerto_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JalanBanyumas_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanKotaPurwokerto_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanBanyumasBarat_12.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINKABUPATENBANYUMAS_13.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'KABUPATEN': 'KABUPATEN', });
lyr_ADMINDESABANYUMAS_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_ADMINKECAMATANBANYUMAS_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_TitikSampling_3.set('fieldImages', {'SOURCETHM': 'TextEdit', 'HOR': 'TextEdit', 'SOLUM': 'TextEdit', 'DRAINASE': 'TextEdit', 'TEKSTUR': 'TextEdit', 'PH': 'TextEdit', 'KTK': 'TextEdit', 'KB': 'TextEdit', 'USDA': 'TextEdit', 'PROPORSI': 'TextEdit', 'LANDFORM': 'TextEdit', 'BI': 'TextEdit', 'LERENG': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'xcoord_2': 'TextEdit', 'ycoord_2': 'TextEdit', 'Tonase': 'TextEdit', 'ton/ha 2': 'TextEdit', 'Titik P': 'TextEdit', 'N Total': 'TextEdit', 'P Tersedia': 'TextEdit', 'K Tersedia': 'TextEdit', 'B.Timur': 'TextEdit', 'L.Selatan': 'TextEdit', 'D Urea': 'TextEdit', 'D SP-36': 'TextEdit', 'D KCL': 'TextEdit', 'BO Tanah': 'TextEdit', 'pH ( H2O )': 'TextEdit', });
lyr_SungaiGarisBanyumasBarat_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SungaiGarisBanyumas_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SungaiLineKotaPurwokerto_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SungaiPolyBanyumasBarat_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SungaiPolyBanyumas_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SungaiPolyKotaPurwokerto_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JalanBanyumas_10.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JalanKotaPurwokerto_11.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JalanBanyumasBarat_12.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINKABUPATENBANYUMAS_13.set('fieldImages', {'KDPPUM': 'TextEdit', 'KABUPATEN': 'TextEdit', });
lyr_ADMINDESABANYUMAS_1.set('fieldLabels', {'KDPPUM': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', });
lyr_ADMINKECAMATANBANYUMAS_2.set('fieldLabels', {'KDPPUM': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', });
lyr_TitikSampling_3.set('fieldLabels', {'SOURCETHM': 'inline label - always visible', 'HOR': 'inline label - always visible', 'SOLUM': 'inline label - always visible', 'DRAINASE': 'inline label - always visible', 'TEKSTUR': 'inline label - always visible', 'PH': 'inline label - always visible', 'KTK': 'inline label - always visible', 'KB': 'inline label - always visible', 'USDA': 'inline label - always visible', 'PROPORSI': 'inline label - always visible', 'LANDFORM': 'inline label - always visible', 'BI': 'inline label - always visible', 'LERENG': 'inline label - always visible', 'DESA': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'xcoord': 'hidden field', 'ycoord': 'hidden field', 'xcoord_2': 'hidden field', 'ycoord_2': 'hidden field', 'Tonase': 'inline label - always visible', 'ton/ha 2': 'inline label - always visible', 'Titik P': 'inline label - always visible', 'N Total': 'inline label - always visible', 'P Tersedia': 'inline label - always visible', 'K Tersedia': 'inline label - always visible', 'B.Timur': 'inline label - always visible', 'L.Selatan': 'inline label - always visible', 'D Urea': 'inline label - always visible', 'D SP-36': 'inline label - always visible', 'D KCL': 'inline label - always visible', 'BO Tanah': 'inline label - always visible', 'pH ( H2O )': 'inline label - always visible', });
lyr_SungaiGarisBanyumasBarat_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SungaiGarisBanyumas_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SungaiLineKotaPurwokerto_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SungaiPolyBanyumasBarat_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SungaiPolyBanyumas_8.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SungaiPolyKotaPurwokerto_9.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JalanBanyumas_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanKotaPurwokerto_11.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanBanyumasBarat_12.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINKABUPATENBANYUMAS_13.set('fieldLabels', {'KDPPUM': 'no label', 'KABUPATEN': 'no label', });
lyr_ADMINKABUPATENBANYUMAS_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});