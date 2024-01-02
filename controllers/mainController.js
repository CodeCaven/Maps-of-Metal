const fs = require('fs');

// Display HomePage.
exports.genres = function(req, res) {
    
    // read json file
    let thrashBandsJson = fs.readFileSync("./public/jsons/thrash-bands.json", 'utf8');
    let thrashBandsLookup = fs.readFileSync("./public/jsons/thrash-lookup.json", 'utf8');
    
    res.render('main', { ejs_thrash_bands: thrashBandsJson, 
                          ejs_thrash_lookup: thrashBandsLookup});

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};