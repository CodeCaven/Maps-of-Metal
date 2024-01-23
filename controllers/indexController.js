const fs = require('fs');

// Display HomePage.
exports.genres = function(req, res) {
    
    // read json file  ne_10m_roads ne_10m_rivers_lake_centerlines
    let thrashBandsJson = fs.readFileSync("./public/jsons/thrash-bands.json", 'utf8');
    let thrashBandsLookup = fs.readFileSync("./public/jsons/thrash-lookup.json", 'utf8');
    let mapJson = {};//fs.readFileSync("./public/jsons/ne_10m_admin_0_countries.json", 'utf8');
    let mapPlaces = fs.readFileSync("./public/jsons/ne_10m_populated_places.json", 'utf8');
    let mapStates = fs.readFileSync("./public/jsons/ne_10m_admin_1_states_provinces_scale_rank.json", 'utf8');
    let mapRoads = {};//fs.readFileSync("./public/jsons/ne_10m_roads.json", 'utf8');
    let mapUrban = {};//fs.readFileSync("./public/jsons/ne_10m_urban_areas.json", 'utf8');
    let mapWater = {};//fs.readFileSync("./public/jsons/ne_10m_rivers_lake_centerlines.json", 'utf8');
    let usCounties = fs.readFileSync("./public/jsons/gz_2010_us_050_00_500k.json", 'utf8');
    
    res.render('index', { ejs_thrash_bands: thrashBandsJson, 
                          ejs_thrash_lookup: thrashBandsLookup,
                          ejs_world_map: mapJson,
                          ejs_places: mapPlaces,
                          ejs_states: mapStates,
                          ejs_roads: mapRoads,
                          ejs_urban: mapUrban,
                          ejs_water: mapWater,
                          ejs_counties: usCounties});

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};