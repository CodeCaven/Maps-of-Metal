const fs = require('fs');

// Display HomePage.
exports.genres = function(req, res) {
    
    // read json file
    let thrashBandsJson = fs.readFileSync("./public/jsons/thrash-bands-50km.json", 'utf8');
    let thrashBandsLookup = fs.readFileSync("./public/jsons/thrash-lookup.json", 'utf8');
    let mapJson = fs.readFileSync("./public/jsons/countries.geo.json", 'utf8');
    
    res.render('index', { ejs_thrash_bands: thrashBandsJson, 
                          ejs_thrash_lookup: thrashBandsLookup,
                          ejs_world_map: mapJson});

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};