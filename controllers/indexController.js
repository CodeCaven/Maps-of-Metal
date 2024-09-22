const fs = require('fs');

// Display HomePage.
exports.genres = function(req, res) {
    
    // band data structures per genre
    let thrashBandsJson = fs.readFileSync("./public/jsons/thrash-bands.json", 'utf8');
    let blackBandsJson = fs.readFileSync("./public/jsons/black-bands.json", 'utf8');
    let deathBandsJson = fs.readFileSync("./public/jsons/death-bands.json", 'utf8');
    let powerBandsJson = fs.readFileSync("./public/jsons/power-bands.json", 'utf8');
    let speedBandsJson = fs.readFileSync("./public/jsons/speed-bands.json", 'utf8');
    let heavyBandsJson = fs.readFileSync("./public/jsons/heavy-bands.json", 'utf8');
   
    // geojson 4 maps
    let mapPlaces = fs.readFileSync("./public/jsons/ne_10m_populated_places.json", 'utf8');
    let mapStates = fs.readFileSync("./public/jsons/ne_10m_admin_1_states_provinces_scale_rank_reduced30.json", 'utf8');
    let mapBoundaries = fs.readFileSync("./public/jsons/ne_10m_admin_0_countries_reduced.json", 'utf8');
    let mapStatesBack = fs.readFileSync("./public/jsons/ne_10m_admin_1_states_provinces_scale_rank_reduced30.json", 'utf8');
    let mapBoundariesBack = fs.readFileSync("./public/jsons/ne_10m_admin_0_countries_reduced.json", 'utf8');
    let usCounties = fs.readFileSync("./public/jsons/gz_2010_us_050_00_500k_reduced10.json", 'utf8');
    let usStates = fs.readFileSync("./public/jsons/gz_2010_us_040_00_500k_reduced10.json", 'utf8');
    let canadaDivs = fs.readFileSync("./public/jsons/canada-divisions_reduced3.json", 'utf8');
    let germanDivs = fs.readFileSync("./public/jsons/german-divisions_reduced2.json", 'utf8');
    let ausDivs = fs.readFileSync("./public/jsons/SA4_2021_AUST_GDA2020_reduced05.json", 'utf8');
    let ukDivs = fs.readFileSync("./public/jsons/uk-divisions-reduced4.json", 'utf8');
    let germanStates = fs.readFileSync("./public/jsons/german-states_reduced2.json", 'utf8');

    // map datastructures
    let metalContinents = fs.readFileSync("./public/jsons/metal_continents.json", 'utf8');
    let usStateData = fs.readFileSync("./public/jsons/us_state_data.json", 'utf8');
    let worldRegions = fs.readFileSync("./public/jsons/world-regions.json", 'utf8');

    // BELOW should be handled with power metal in 'world-regions', test and check
    // "Guinea Bissau" "Swaziland" "Somaliland"  added to world regions (Africa) since Deathy Metal processing
    // "S. Sudan" is south sudan in the geojson "Cabo Verde" is "Cape Verde"(changed in json) 'stans removed from'south asia' will become central asia
    
    res.render('index', { ejs_thrash_bands: thrashBandsJson, 
                          ejs_black_bands: blackBandsJson,
                          ejs_death_bands: deathBandsJson,  
                          ejs_power_bands: powerBandsJson,
                          ejs_heavy_bands: heavyBandsJson,
                          ejs_speed_bands: speedBandsJson,  
                          ejs_continents: metalContinents,
                          ejs_state_data: usStateData,
                          ejs_places: mapPlaces,
                          ejs_states: mapStates,
                          ejs_states_back:mapStatesBack,
                          ejs_counties: usCounties,
                          ejs_us_states: usStates,
                          ejs_can_divs: canadaDivs,
                          ejs_uk_divs: ukDivs,
                          ejs_german_divs: germanDivs,
                          ejs_aus_divs: ausDivs,
                          ejs_german_states: germanStates,
                          ejs_world_regions: worldRegions,
                          ejs_map_countries_back: mapBoundariesBack,
                          ejs_map_countries: mapBoundaries});

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};