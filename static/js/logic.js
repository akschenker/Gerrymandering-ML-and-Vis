// Creating map object
var mymap = L.map("map").setView([38.7128, -103.0059], 5);

  // Adding tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
}).addTo(mymap);

// Alaska map
var alaska = L.map("alaskaMap", { zoomControl:false }).setView([64.2008, -149], 3);

// Adding tile layer
var layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
maxZoom: 18,
id: 'mapbox.streets',
accessToken: API_KEY
});
layer.addTo(alaska);

// Hawaii map
var hawaii = L.map("hawaiiMap", { zoomControl:false }).setView([19.8968, -159.58], 4);

// Adding tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
}).addTo(hawaii);

// Style functions
function onEachFeature(feature, layer, cong) {
    var congInfo = Object.values(feature.properties.member[cong])[0];
    layer.bindPopup(`<b>District:</b> ${congInfo.district}<br><b>Name:</b> ${congInfo.name}<br><b>Party:</b> ${congInfo.party}`);
};

function partyColors(feature, cong) {
    switch (Object.values(feature.properties.member[cong])[0].party) {
        case 'Republican': return {color: "#ff0000", className: `cong${cong}`};
        case 'Democrat':   return {color: "#0000ff", className: `cong${cong}`};
        default:           return {color: "#800080", className: `cong${cong}`};
    }
};

var shapeGroup = L.layerGroup();
var alaskaGroup = L.layerGroup();
var hawaiiGroup = L.layerGroup();

// function initialize() {
//     // 86th congress

//     // 91st congress

//     // 96th congress
    
//     // 101st congress

//     // 106th congress

//     // 111th congress
// }

function createMap(cong) {
    if (cong === "86th (1959-1961)") {
        mymap.removeLayer(shapeGroup);
        alaska.removeLayer(alaskaGroup);
        hawaii.removeLayer(hawaiiGroup);
        shapeGroup = L.layerGroup();
        alaskaGroup = L.layerGroup();
        hawaiiGroup = L.layerGroup();
        L.geoJSON.ajax('congressional-district-boundaries/86/California_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Arizona_81_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Tennessee_83_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/New_York_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(alaskaGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Wyoming_51_to_97.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Michigan_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Wisconsin_73_to_88.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Rhode_Island_73_to_88.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Minnesota_74_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/South_Dakota_73_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Utah_64_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Montana_66_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Florida_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Vermont_73_to_97.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Nevada_42_to_97.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/West_Virginia_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Pennsylvania_84_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Massachusetts_78_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/North_Carolina_78_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Oregon_78_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Kansas_78_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Virginia_83_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Louisiana_63_to_90.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Iowa_78_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Maine_73_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Nebraska_78_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/New_Hampshire_48_to_91.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Alabama_73_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/South_Carolina_73_to_88.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Hawaii_86_to_91.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(hawaiiGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/New_Mexico_78_to_90.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Texas_86_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Oklahoma_83_to_90.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Kentucky_85_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Idaho_66_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Georgia_73_to_88.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Ohio_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Indiana_78_to_89.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Missouri_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Illinois_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Delaware_18_to_97.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Arkansas_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Colorado_68_to_88.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/North_Dakota_73_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Maryland_83_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Connecticut_73_to_88.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/New_Jersey_73_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Washington_86_to_86.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/86/Mississippi_85_to_87.geojson',{style: feature => partyColors(feature, "86"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "86")}).addTo(shapeGroup);
        shapeGroup.addTo(mymap);
        alaskaGroup.addTo(alaska);
        hawaiiGroup.addTo(hawaii);
    }
    else if (cong === "91st (1969-1971)") {
        mymap.removeLayer(shapeGroup);
        alaska.removeLayer(alaskaGroup);
        hawaii.removeLayer(hawaiiGroup);
        shapeGroup = L.layerGroup();
        alaskaGroup = L.layerGroup();
        hawaiiGroup = L.layerGroup();
        L.geoJSON.ajax('congressional-district-boundaries/91/Maine_88_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Kansas_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Virginia_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/California_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Minnesota_88_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Wisconsin_89_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Arkansas_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Washington_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Maryland_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(alaskaGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/South_Dakota_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Wyoming_51_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Utah_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Oklahoma_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Illinois_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Texas_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/New_Mexico_91_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Colorado_89_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Iowa_88_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Vermont_73_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Arizona_90_to_91.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Rhode_Island_89_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/West_Virginia_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/New_York_91_to_91.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Alabama_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Nevada_42_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Louisiana_91_to_91.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Florida_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Idaho_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Missouri_91_to_91.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Oregon_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Tennessee_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Kentucky_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/New_Hampshire_48_to_91.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/North_Dakota_88_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Hawaii_86_to_91.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(hawaiiGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Michigan_89_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Pennsylvania_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/South_Carolina_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Delaware_18_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Mississippi_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Indiana_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Ohio_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Nebraska_91_to_97.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Georgia_89_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Montana_90_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/New_Jersey_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Massachusetts_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/North_Carolina_91_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/91/Connecticut_89_to_92.geojson',{style: feature => partyColors(feature, "91"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "91")}).addTo(shapeGroup);
        shapeGroup.addTo(mymap);
        alaskaGroup.addTo(alaska);
        hawaiiGroup.addTo(hawaii);
    }
    else if (cong === "96th (1979-1981)") {
        mymap.removeLayer(shapeGroup);
        alaska.removeLayer(alaskaGroup);
        hawaii.removeLayer(hawaiiGroup);
        shapeGroup = L.layerGroup();
        alaskaGroup = L.layerGroup();
        hawaiiGroup = L.layerGroup();
        L.geoJSON.ajax('congressional-district-boundaries/96/Maine_88_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/South_Carolina_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Washington_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Louisiana_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Michigan_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Oklahoma_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/California_94_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Mississippi_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/New_York_94_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(alaskaGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Montana_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Wyoming_51_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Hawaii_92_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(hawaiiGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Iowa_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Oregon_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Connecticut_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/West_Virginia_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Texas_94_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Minnesota_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Kentucky_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/New_Mexico_91_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Florida_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Georgia_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Vermont_73_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Nevada_42_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Pennsylvania_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Tennessee_95_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Wisconsin_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Idaho_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Alabama_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/New_Jersey_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/New_Hampshire_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Kansas_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Massachusetts_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/North_Carolina_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Delaware_18_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Virginia_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Rhode_Island_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Maryland_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Colorado_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Nebraska_91_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Arkansas_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/North_Dakota_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Missouri_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Indiana_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Arizona_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Illinois_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Utah_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/South_Dakota_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/96/Ohio_93_to_97.geojson',{style: feature => partyColors(feature, "96"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "96")}).addTo(shapeGroup);
        shapeGroup.addTo(mymap);
        alaskaGroup.addTo(alaska);
        hawaiiGroup.addTo(hawaii);
    }
    else if (cong === "101st (1989-1991)") {
        mymap.removeLayer(shapeGroup);
        alaska.removeLayer(alaskaGroup);
        hawaii.removeLayer(hawaiiGroup);
        shapeGroup = L.layerGroup();
        alaskaGroup = L.layerGroup();
        hawaiiGroup = L.layerGroup();
        L.geoJSON.ajax('congressional-district-boundaries/101/Wisconsin_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Georgia_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Minnesota_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/North_Dakota_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/New_Jersey_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Pennsylvania_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Hawaii_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(hawaiiGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Iowa_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(alaskaGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Alaska_86_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Maine_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/District_Of_Columbia_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Vermont_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Rhode_Island_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/South_Carolina_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Michigan_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Virginia_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Texas_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Alabama_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Arizona_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Louisiana_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Montana_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/California_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Tennessee_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Connecticut_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/North_Carolina_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Maryland_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Delaware_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Nevada_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Ohio_100_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Wyoming_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Colorado_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/New_Hampshire_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/South_Dakota_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Illinois_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Mississippi_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/New_Mexico_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Idaho_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/New_York_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Nebraska_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Kansas_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Massachusetts_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/West_Virginia_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Florida_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Washington_99_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Oklahoma_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Utah_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/New_York_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Oregon_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Arkansas_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Missouri_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Kentucky_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/101/Indiana_98_to_102.geojson',{style: feature => partyColors(feature, "101"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "101")}).addTo(shapeGroup);
        shapeGroup.addTo(mymap);
        alaskaGroup.addTo(alaska);
        hawaiiGroup.addTo(hawaii);
    }
    else if (cong === "106th (1999-2001)") {
        mymap.removeLayer(shapeGroup);
        alaska.removeLayer(alaskaGroup);
        hawaii.removeLayer(hawaiiGroup);
        shapeGroup = L.layerGroup();
        alaskaGroup = L.layerGroup();
        hawaiiGroup = L.layerGroup();
        L.geoJSON.ajax('congressional-district-boundaries/106/New_York_106_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Nevada_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Alaska_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(alaskaGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Alaska_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/New_Mexico_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Minnesota_104_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/New_Hampshire_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Mississippi_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Louisiana_105_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Maine_104_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Florida_105_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/South_Carolina_104_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Ohio_105_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Texas_105_to_106.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/South_Dakota_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Hawaii_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(hawaiiGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/North_Dakota_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/California_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Arizona_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Oregon_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Tennessee_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Kentucky_105_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Wisconsin_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Colorado_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Michigan_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Kansas_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Illinois_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Iowa_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Georgia_105_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/West_Virginia_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Oklahoma_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Nebraska_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Maryland_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/New_Jersey_106_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Massachusetts_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Vermont_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Arkansas_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Delaware_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Virginia_106_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/North_Carolina_106_to_106.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Indiana_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Montana_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Wyoming_103_to_112.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Washington_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Alabama_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Utah_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Missouri_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Pennsylvania_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Rhode_Island_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Idaho_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/106/Connecticut_103_to_107.geojson',{style: feature => partyColors(feature, "106"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "106")}).addTo(shapeGroup);
        shapeGroup.addTo(mymap);
        alaskaGroup.addTo(alaska);
        hawaiiGroup.addTo(hawaii);
    }
    else if (cong === "111th (2009-2011)") {
        mymap.removeLayer(shapeGroup);
        alaska.removeLayer(alaskaGroup);
        hawaii.removeLayer(hawaiiGroup);
        shapeGroup = L.layerGroup();
        alaskaGroup = L.layerGroup();
        hawaiiGroup = L.layerGroup();
        L.geoJSON.ajax('congressional-district-boundaries/111/Arkansas_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Alaska_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(alaskaGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Alaska_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Massachusetts_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Virginia_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Kentucky_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Maryland_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Nebraska_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Oklahoma_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/West_Virginia_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Iowa_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Michigan_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/South_Carolina_104_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Kansas_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Illinois_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Colorado_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Wisconsin_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/North_Carolina_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Connecticut_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Idaho_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Rhode_Island_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Alabama_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Utah_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Missouri_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Washington_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/North_Dakota_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Indiana_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/New_Jersey_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Georgia_110_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Pennsylvania_109_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Texas_110_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Maine_109_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Louisiana_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Mississippi_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Minnesota_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Ohio_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Florida_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/New_Hampshire_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Vermont_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Nevada_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/New_Mexico_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Tennessee_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Delaware_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Oregon_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/California_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Montana_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Hawaii_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(hawaiiGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Wyoming_103_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/New_York_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/South_Dakota_108_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        L.geoJSON.ajax('congressional-district-boundaries/111/Arizona_109_to_112.geojson',{style: feature => partyColors(feature, "111"), 
            onEachFeature: (feature, layer) => onEachFeature(feature, layer, "111")}).addTo(shapeGroup);
        shapeGroup.addTo(mymap);
        alaskaGroup.addTo(alaska);
        hawaiiGroup.addTo(hawaii);
    }
    else if (cong === "Timelapse") {
        runTimelapse();
    }
}

function runTimelapse() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function timelapse(ms) {
        createMap("86th (1959-1961)");
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "86th (1959-1961)";
        }).style('background-color','orange');
        await sleep(ms);
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "86th (1959-1961)";
        }).style('background-color',null);
        createMap("91st (1969-1971)");
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "91st (1969-1971)";
        }).style('background-color','orange');
        await sleep(ms);
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "91st (1969-1971)";
        }).style('background-color',null);
        createMap("96th (1979-1981)");
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "96th (1979-1981)";
        }).style('background-color','orange');
        await sleep(ms);
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "96th (1979-1981)";
        }).style('background-color',null);
        createMap("101st (1989-1991)");
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "101st (1989-1991)";
        }).style('background-color','orange');
        await sleep(ms);
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "101st (1989-1991)";
        }).style('background-color',null);
        createMap("106th (1999-2001)");
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "106th (1999-2001)";
        }).style('background-color','orange');
        await sleep(ms);
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "106th (1999-2001)";
        }).style('background-color',null);
        createMap("111th (2009-2011)");  
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "111th (2009-2011)";
        }).style('background-color','orange');
        await sleep(ms);
        d3.selectAll("button")
        .filter(function(){ 
          return d3.select(this).text() == "111th (2009-2011)";
        }).style('background-color',null);  
    } 
    timelapse(8000);
}

// Change map based on button click
d3.selectAll("button").on("click", function () {
    createMap(d3.select(this).text())
});