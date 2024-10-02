var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bengaluru_1 = new ol.format.GeoJSON();
var features_bengaluru_1 = format_bengaluru_1.readFeatures(json_bengaluru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bengaluru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bengaluru_1.addFeatures(features_bengaluru_1);
var lyr_bengaluru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bengaluru_1, 
                style: style_bengaluru_1,
                popuplayertitle: "bengaluru",
                interactive: true,
                title: '<img src="styles/legend/bengaluru_1.png" /> bengaluru'
            });

        var lyr_SatelliteImage_2 = new ol.layer.Tile({
            'title': 'Satellite Image',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Trees_3 = new ol.format.GeoJSON();
var features_Trees_3 = format_Trees_3.readFeatures(json_Trees_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_3.addFeatures(features_Trees_3);
var lyr_Trees_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trees_3, 
                style: style_Trees_3,
                popuplayertitle: "Trees",
                interactive: true,
                title: '<img src="styles/legend/Trees_3.png" /> Trees'
            });

lyr_OSMStandard_0.setVisible(true);lyr_bengaluru_1.setVisible(true);lyr_SatelliteImage_2.setVisible(true);lyr_Trees_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_bengaluru_1,lyr_SatelliteImage_2,lyr_Trees_3];
lyr_bengaluru_1.set('fieldAliases', {'KGISWardID': 'KGISWardID', 'KGISWardCode': 'KGISWardCode', 'LGD_WardCode': 'LGD_WardCode', 'KGISWardNo': 'KGISWardNo', 'KGISWardName': 'KGISWardName', 'KGISTownCode': 'KGISTownCode', });
lyr_Trees_3.set('fieldAliases', {'id': 'id', '@id': '@id', 'addr:street': 'addr:street', 'amenity': 'amenity', 'astrology:nakshatra': 'astrology:nakshatra', 'circumference': 'circumference', 'contributed_by': 'contributed_by', 'denotation': 'denotation', 'description': 'description', 'diameter_crown': 'diameter_crown', 'fixme': 'fixme', 'genus': 'genus', 'height': 'height', 'leaf_cycle': 'leaf_cycle', 'leaf_type': 'leaf_type', 'name': 'name', 'name:botanical': 'name:botanical', 'name:en': 'name:en', 'name:hi': 'name:hi', 'name:kn': 'name:kn', 'natural': 'natural', 'noname': 'noname', 'note': 'note', 'operator': 'operator', 'religion': 'religion', 'source': 'source', 'species': 'species', 'species:en': 'species:en', 'species:wikidata': 'species:wikidata', 'species:wikipedia': 'species:wikipedia', 'survey:date': 'survey:date', 'taxon': 'taxon', 'taxon:wikipedia': 'taxon:wikipedia', 'tourism': 'tourism', 'type': 'type', 'wikipedia': 'wikipedia', });
lyr_bengaluru_1.set('fieldImages', {'KGISWardID': 'Range', 'KGISWardCode': 'TextEdit', 'LGD_WardCode': 'Range', 'KGISWardNo': 'TextEdit', 'KGISWardName': 'TextEdit', 'KGISTownCode': 'TextEdit', });
lyr_Trees_3.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'addr:street': 'TextEdit', 'amenity': 'TextEdit', 'astrology:nakshatra': 'TextEdit', 'circumference': 'TextEdit', 'contributed_by': 'TextEdit', 'denotation': 'TextEdit', 'description': 'TextEdit', 'diameter_crown': 'TextEdit', 'fixme': 'TextEdit', 'genus': 'TextEdit', 'height': 'TextEdit', 'leaf_cycle': 'TextEdit', 'leaf_type': 'TextEdit', 'name': 'TextEdit', 'name:botanical': 'TextEdit', 'name:en': 'TextEdit', 'name:hi': 'TextEdit', 'name:kn': 'TextEdit', 'natural': 'TextEdit', 'noname': 'TextEdit', 'note': 'TextEdit', 'operator': 'TextEdit', 'religion': 'TextEdit', 'source': 'TextEdit', 'species': 'TextEdit', 'species:en': 'TextEdit', 'species:wikidata': 'TextEdit', 'species:wikipedia': 'TextEdit', 'survey:date': 'DateTime', 'taxon': 'TextEdit', 'taxon:wikipedia': 'TextEdit', 'tourism': 'TextEdit', 'type': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_bengaluru_1.set('fieldLabels', {'KGISWardID': 'no label', 'KGISWardCode': 'no label', 'LGD_WardCode': 'no label', 'KGISWardNo': 'no label', 'KGISWardName': 'no label', 'KGISTownCode': 'no label', });
lyr_Trees_3.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'addr:street': 'header label - visible with data', 'amenity': 'no label', 'astrology:nakshatra': 'no label', 'circumference': 'no label', 'contributed_by': 'no label', 'denotation': 'no label', 'description': 'no label', 'diameter_crown': 'no label', 'fixme': 'no label', 'genus': 'no label', 'height': 'no label', 'leaf_cycle': 'no label', 'leaf_type': 'no label', 'name': 'no label', 'name:botanical': 'no label', 'name:en': 'no label', 'name:hi': 'no label', 'name:kn': 'no label', 'natural': 'no label', 'noname': 'no label', 'note': 'no label', 'operator': 'no label', 'religion': 'no label', 'source': 'no label', 'species': 'no label', 'species:en': 'no label', 'species:wikidata': 'no label', 'species:wikipedia': 'no label', 'survey:date': 'no label', 'taxon': 'no label', 'taxon:wikipedia': 'no label', 'tourism': 'no label', 'type': 'no label', 'wikipedia': 'no label', });
lyr_Trees_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});