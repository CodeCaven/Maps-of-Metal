const fs = require('fs');

// Display HomePage.
exports.genres = function(req, res) {
    
    // band data structures 
    let thrashBandsJson = fs.readFileSync("./public/jsons/thrash-bands.json", 'utf8');
    let thrashBandsLookup = fs.readFileSync("./public/jsons/thrash-lookup.json", 'utf8');
    let blackBandsJson = fs.readFileSync("./public/jsons/black-bands.json", 'utf8');
    let blackBandsLookup = fs.readFileSync("./public/jsons/black-lookup.json", 'utf8');
   
    // geojson 4 maps
    let mapPlaces = fs.readFileSync("./public/jsons/ne_10m_populated_places.json", 'utf8');
    let mapStates = fs.readFileSync("./public/jsons/ne_10m_admin_1_states_provinces_scale_rank.json", 'utf8');
    let usCounties = fs.readFileSync("./public/jsons/gz_2010_us_050_00_500k.json", 'utf8');

    // map datastructures
    let metalContinents = fs.readFileSync("./public/jsons/metal_continents.json", 'utf8');
    let usStateData = fs.readFileSync("./public/jsons/us_state_data.json", 'utf8');
    
    res.render('index', { ejs_thrash_bands: thrashBandsJson, 
                          ejs_thrash_lookup: thrashBandsLookup,
                          ejs_black_bands: blackBandsJson, 
                          ejs_black_lookup: blackBandsLookup,
                          ejs_continents: metalContinents,
                          ejs_state_data: usStateData,
                          ejs_places: mapPlaces,
                          ejs_states: mapStates,
                          ejs_counties: usCounties});

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};