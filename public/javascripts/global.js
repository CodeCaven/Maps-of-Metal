// SVG DEFINITIONS

// thrash icon
function get_thrash_icon(iconID, name){
    var icon_string = '<svg id="thrash' + iconID + '" width="32" height="32" viewBox="0 0 32 32" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' +
                      '<style type="text/css">' +
                      '.st0{fill:blue;fill-opacity:0.3;stroke:dodgerblue;stroke-width:0.5;stroke-opacity:0.3;stroke-linejoin:round;stroke-miterlimit:10;}' +
                      '.st1{fill:blue;fill-opacity:0.3;stroke:dodgerblue;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}' +
                      '.thrash{opacity:1;}' +
                      '</style>' + 
                      '<g class="st1">' + 
                      '<path class="thrash" d="M10,18V7c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v8"/>' + 
                      '<path class="thrash" d="M14,15v-1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v1"/>' +
                      '<path class="thrash" d="M18,15v-1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v1"/>' +
                      '<path class="thrash" d="M22,15V9c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v11"/>' +
                      '<path class="thrash" d="M10,16v4.6c0,0,0,0,0,0l-1.5-1.8c-0.8-0.9-2.2-1-3.1-0.1l0,0c-0.8,0.8-0.8,2-0.1,2.9l3.2,3.6' +
                      'c1.6,1.9,4,2.9,6.4,2.9h2.5H18h0.6c4.1,0,7.4-3.3,7.4-7.4V16"/>' +
                      '</g>';
                     
    return icon_string;
}

function create_light_filter(svg, colour){
    // light filter
    //** spec lighting filter **//
    var lightFilterSVG = svg.
    append("filter")
    .attr("id", "specular"+colour)
    .attr("primitiveUnits", "objectBoundingBox");

    var feSpecFilterSVG = lightFilterSVG
    .append("feSpecularLighting")
    .attr("result", "specOut")
    .attr("in", "SourceGraphic")
    .attr("lighting-color", colour)
    .attr("surfaceScale", "5") // was 1 for normal effect
    .attr("specularExponent", "30")
    .attr("specularConstant", "0.4");


    feSpecFilterSVG
    .append("fePointLight")
    .attr("x", "0.5") // was 0.25
    .attr("y", "0.5") // was 0.25
    .attr("z", "0.3");

    lightFilterSVG
    .append("feComposite")
    .attr("in", "SourceGraphic")
    .attr("in2", "specOut")
    .attr("operator", "arithmetic")
    .attr("k1", "0")
    .attr("k2", "1")
    .attr("k3", "1")
    .attr("k4", "0");

    return svg;
}

function create_light_filter_base(svg, colour){
  // light filter
  //** spec lighting filter **//
  var lightFilterSVG = svg.
  append("filter")
  .attr("id", "specular"+colour)
  .attr("primitiveUnits", "objectBoundingBox");

  var feSpecFilterSVG = lightFilterSVG
  .append("feSpecularLighting")
  .attr("result", "specOut")
  .attr("in", "SourceGraphic")
  .attr("lighting-color", colour)
  .attr("surfaceScale", "1") // was 1 for normal effect
  .attr("specularExponent", "30")
  .attr("specularConstant", "0.4");


  feSpecFilterSVG
  .append("fePointLight")
  .attr("x", "0.5") // was 0.25
  .attr("y", "0.5") // was 0.25
  .attr("z", "0.3");

  lightFilterSVG
  .append("feComposite")
  .attr("in", "SourceGraphic")
  .attr("in2", "specOut")
  .attr("operator", "arithmetic")
  .attr("k1", "0")
  .attr("k2", "1")
  .attr("k3", "1")
  .attr("k4", "0");

  return svg;
}

function create_circle_fill(svg, color, baseColor){
  var gradFill = svg
    .append('defs')
    .append('radialGradient')
    .attr('id', 'circleGradFill')
    .attr('cx', '100%')
    .attr('cy', '0%')
    .attr('r', '400%')
    .attr('fx', '100%')
    .attr('fy', '0%');

    gradFill.append('stop')
    .attr('offset', '0%')
    .style('stop-color', color)
    .style('stop-opacity', 1);

    gradFill.append('stop')
    .attr('offset', '100%')
    .style('stop-color', baseColor)
    .style('stop-opacity', 1);

    return svg;
}

function create_circle_fill_spiral(svg, color, baseColor){
    var gradFill = svg
      .append('defs')
      .append('radialGradient')
      .attr('id', 'circleGradFillSpiral')
      .attr('spreadMethod', 'reflect')
      .attr('cx', '75%')
      .attr('cy', '25%')
      .attr('r', '33%')
      .attr('fx', '64%')
      .attr('fy', '18%')
      .attr('fr', '17%');
  
      gradFill.append('stop')
      .attr('offset', '0%')
      .style('stop-color', color)
      .style('stop-opacity', 1);
  
      gradFill.append('stop')
      .attr('offset', '100%')
      .style('stop-color', baseColor)
      .style('stop-opacity', 1);
  
      return svg;
  }

function create_label_fill(svg, baseColor){
    var gradFill = svg
      .append('defs')
      .append('radialGradient')
      .attr('id', 'tagGradFill')
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', '100%')
      .attr('fx', '50%')
      .attr('fy', '50%');
  
      gradFill.append('stop')
      .attr('offset', '30%')
      .style('stop-color', baseColor)
      .style('stop-opacity', 1);
  
      gradFill.append('stop')
      .attr('offset', '100%')
      .style('stop-color', "black")
      .style('stop-opacity', 1);
  
      return svg;
  }

function create_gradient_filter(svg, color){
    var gradFill = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'middleCircleFill')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')

        gradFill.append('stop')
        .attr('offset', '0%')
        .style('stop-color', color) //whitesmoke
        .style('stop-opacity', 1);

        gradFill.append('stop')
        .attr('offset', '20%')
        .style('stop-color', 'grey')//lightgrey
        .style('stop-opacity', 1);

        gradFill.append('stop')
        .attr('offset', '40%')
        .style('stop-color', color) //grey
        .style('stop-opacity', 1);

        gradFill.append('stop')
        .attr('offset', '60%')
        .style('stop-color', 'grey') //whitesmoke
        .style('stop-opacity', 1);

        gradFill.append('stop')
        .attr('offset', '80%')
        .style('stop-color', color)//lightgrey
        .style('stop-opacity', 1);

        gradFill.append('stop')
        .attr('offset', '100%')
        .style('stop-color', 'grey') //grey
        .style('stop-opacity', 1);


    return svg;
}

function create_gradient_filter_boundary(svg, color){
  var gradFill = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'boundaryStrokeGrad')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')

      gradFill.append('stop')
      .attr('offset', '0%')
      .style('stop-color', "black") //whitesmoke
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '10%')
      .style('stop-color', color)//lightgrey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '20%')
      .style('stop-color', "black") //grey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '30%')
      .style('stop-color', color) //whitesmoke
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '40%')
      .style('stop-color', "black")//lightgrey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '50%')
      .style('stop-color', color) //grey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '60%')
      .style('stop-color', "black") //whitesmoke
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '70%')
      .style('stop-color', color)//lightgrey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '80%')
      .style('stop-color', "black") //grey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '90%')
      .style('stop-color', color)//lightgrey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '100%')
      .style('stop-color', "black") //grey
      .style('stop-opacity', 1);

  return svg;
}

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    // drag functions
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// -45.23018363188316, -21.517547377452868
// -17.741710887396685, -46.17374349914809
// -24.18893527847172, -44.44374016484675  39.154907715375444, -76.88485526922724
var multi_views = {"Canada":[{"loc":[-123.116226, 49.246292], "radius": 32, "tags":["Vancouver", "Victoria"]},
                            {"loc":[-74.65217687661148, 45.51990252147928], "radius": 29, "tags":["Montreal", "Ottawa"]}],
                   "California":[{"loc":[-122.431297, 37.773972], "radius": 40, "tags":["San Jose", "San Francisco", "Oakland"]},
                            {"loc":[-74.65217687661148, 45.51990252147928], "radius": 29, "tags":["Montreal", "Ottawa"]}],
                    "Northeast":[{"loc":[ -76.88485526922724,  39.154907715375444], "radius": 30, "tags":["Baltimore", 'Washington, D.C.']}],
                   "South America":[{"loc":[-46.17374349914809,-17.741710887396685], "radius": 30, "tags":['Belo Horizonte','Brasília']},
                            {"loc":[-44.44374016484675,-24.18893527847172], "radius": 30, "tags":['São Paulo', 'Rio de Janeiro']},
                            {"loc":[-58.381592, -34.603722], "radius": 25, "tags":['Buenos Aires', "Montevideo"]}]}

var map_settings = {"Central America":{"centre":[-85.587502, 11.934739],"scale":2400}, 
                    "Norway":{"centre":[10.75224540, 65.91386880],"scale":900},
                    "Germany":{"centre":[9.682127, 51.110924],"scale":2600},
                    "Canada":{"centre":[-97.138451, 52.895077],"scale":700}};

var neighbours = {"Northeast":["Ohio", "Kentucky", "Illinois", "Virginia", "West Virginia", "Michigan", "Wisconsin", "Indiana"],
                  "California":["New Mexico", "Colorado", "Wyoming", "Oregon", "Nevada", "Arizona", "Utah", "Texas", "Idaho"],
                  "Florida":["Georgia", "Alabama", "Mississippi", "Louisiana"], "Canada":[], "Australia":["Fiji", "Solomon Islands", "New Caledonia","Vanuatu", "Papua New Guinea", "Indonesia", "New Zealand"],"Norway": ["Faroe Islands", "Estonia", "Latvia", "Denmark", "Sweden", "Finland", "United Kingdom", "Russia", "Iceland"],
                  "Central America":["Jamaica", "Dominican Republic", "Mexico", "Colombia", "Haiti", "Venezuela"],
                  "South America":["Mexico", "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya","Falkland Islands", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Uganda", "Zambia", "Zimbabwe", "Western Sahara", "United Republic of Tanzania",
                  "French Polynesia", "Pitcairn Islands", "South Georgia and the Islands", "Guinea Bissau", "Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Puerto Rico", "Montserrat", "Antilles", "Turks and Caicos", "Curacao"],
                  "Sweden": ["Germany", "Poland", "Norway", "Ireland", "Lithuania", "Belarus", "Faroe Islands", "Estonia", "Latvia", "Denmark", "Finland", "United Kingdom", "Russia", "Iceland"],
                  "Finland": ["Norway",  "Estonia", "Sweden",  "United Kingdom", "Russia"],
                  "Spain": ["Switzerland", "Western Sahara", "Libya", "Andorra","Morocco", "Mali", "Mauritania", "Tunisia", "Algeria", "France", "Kosovo", "Hungary", "Republic of Serbia", "Macedonia", "Portugal",  "Italy", "Montenegro", "Albania", "San Marino", "Austria", "Slovenia", "Bosnia and Herzegovina", "Croatia"],
                  "Italy": ["Kosovo", "Germany", "Montenegro", "Albania", "San Marino", "Andorra", "Turkey", "Bulgaria", "Macedonia", "Tunisia", "Algeria", "Spain", "Hungary", "Republic of Serbia", "Switzerland", "Austria", "Slovenia", "Bosnia and Herzegovina", "Croatia", "France",  "Greece", "Romania"],
                  "Germany": ["Russia", "Ukraine", "Lithuania", "Belarus", "Slovenia", "Romania", "Slovakia", "Hungary", "Italy", "Czech Republic","France", "Netherlands", "Austria", "Denmark", "Poland", "Switzerland",  "United Kingdom", "Luxembourg", "Belgium"],
                  "Southeast":["New Jersey", "New York", "Pennsylvania", "Maryland", "Delaware", "Illinois", "Indiana", "Ohio", 'Texas', "New Mexico", "Louisiana", "Oklahoma", "Arkansas", "Colorado", "Kansas", "Missouri"],
                  "South":["California", "Arizona", "Florida", "Nevada", "Utah", "Colorado", "Mississippi", "Kansas", "Missouri", "Alabama", "Georgia", "North Carolina", "South Carolina", "Illinois", "Kentucky", "Virginia", "West Virginia", "Indiana", "Maryland", "Ohio"], 
                  "Southwest":["Nebraska", "Colorado", "Oklahoma", "Kansas", "Oregon", "Idaho", "Wyoming", "New Mexico", "Texas"],
                  "Northwest":["Kansas", "Missouri","Iowa", "Minnesota", "California", "Nevada", "Utah", "Colorado", "Nebraska", "North Dakota", "South Dakota"],
                  "Midwest":["Arkansas", "Arizona", "Idaho", "Montana", "Oregon", "Washington", "Wyoming", "California", "Nevada", "Utah", "Texas", "New Mexico", "Oklahoma", "Mississippi", "Maryland", "North Carolina", "Tennessee", "South Carolina", "Georgia", "Alabama", "Pennsylvania", "New York", "Ohio", "Kentucky", "Illinois", "Virginia", "West Virginia", "Michigan", "Wisconsin", "Indiana"], 
                  "Great Lakes":["Colorado", "Oklahoma", "Virginia", "West Virginia", "Kentucky", "Connecticut", "Rhode Island", "District of Columbia", "Delaware", "North Dakota", "South Dakota", "Kansas", "Nebraska", "New Hampshire", "Vermont", "Maine", "New York", "Maryland", "Massachusetts", "Pennsylvania", "New Jersey", "Iowa", "Minnesota", "Missouri", "West Virginia"], 
                  "United Kingdom": ["Norway", "Netherlands", "France", "Poland", "Czech Republic", "Luxembourg", "Belgium", "Germany", "Sweden", "Denmark", "Ireland"]};

var pads = {"Midwest": 50, "Northwest": 120, "Northeast": 20, "Spain":80,"Finland":40,"Switzerland":50,"United Kingdom":20,
"Germany": 30, "Italy": 20, "Sweden": 50, "South": 110, "Great Lakes": 20, "Southwest": 70, "California": 50, "Southeast":20,
"Central America": 20, "Florida": 20, "Poland":10, "United Kingdom":10, "South America": 40, "Australia":40};

let anchors = {"Los Angeles": "end", "San Francisco": "end", "Long Beach": "start", "Oakland": "start","Denver":"end", "St. Louis":"start","Santa Fe":"start",
 "Bergen": "end", "Umeå": "start", "Seattle":"start","New York City": "end",  "Boston": "start", "Portland": "top","San Antonio":"end",
  "Hartford":"start", "Trenton": "end", "Houston" : "start", "Dallas" : "start", "Atlanta": "start", "Richmond" : "start", "Cedar Rapids":"start", "Omaha":"end",
  "Miami" : "start", "Tampa" : "end", "New Orleans": "start", "Austin": "end", "Albuquerque":"end", "Corpus Christi":"start",
   "Helsinki":"start", "Berlin":"start", "Essen":"end", "Dortmund":"end", "Waco":"end","Düsseldorf": "end",  "Little Rock":"start","Fort Worth":"end",
"Santiago" : "end", "Rio de Janeiro":"start", "Belo Horizonte" : "start","Louisville":"end", "Montevideo":"start",
"Lima": "end", "Bogata": "end", "Detroit": "start", "Cleveland":"start",  "Minneapolis":"start",
"San Diego":"start",  "Salt Lake City":"end", "Washington":"start",'Asunción':'end','São Paulo':'end',
"Munich":"start",  "Hamburg":"start",  "Sacramento":"start", "Memphis":"end", "Nashville":"end", 
"London":"start","Newcastle upon Tyne":"start","Birmingham":"end","Liverpool":"end","Belfast":"end", "Kansas City":"end","Colorado Springs":"end","Weil am Rhein":"end",
'Bonn': 'end','Stuttgart': 'end','Leipzig': 'start', 'Münster': 'end',
"Regensburg":"start", "Schweinfurt":"start", "Siegen":"start", 'Kiel': 'start','Jena': 'end','Bremen': 'end','Saarbrücken': 'end',
'Osnabrück': 'end','Cologne': 'end','Schneeberg': 'start','Baton Rouge': 'top','Tulsa': 'top','Arlington': 'end','Wichita Falls': 'end',
'Louisville': 'top','Greensboro': 'top','Lexington': 'start',
 'Orlando': 'start','Raleigh': 'start','Paducah': 'top','Jacksonville': 'start','Huntsville': 'end','Alexandria': 'start',
 'Asheville': 'top','Bowling Green': 'end','Gainesville': 'start','Birmingham': 'end','Sanford': 'start','Providence': 'start','Bridgeport': 'top',
 'Worcester': 'end','New Haven': 'end','Erie':'end','Milan': 'top','Turin': 'top','Verona': 'top','Udine': 'start','Catania': 'start','Palermo': 'end',
 'Birmingham': 'end','Nottingham': 'start','Edinburgh': 'start','Manchester': 'end', 'Baltimore': 'start',
 'Aberdeen': 'start','Glasgow': 'end','Brighton': 'start','Reading': 'top','Bogota':"end",'Brasília':"top",'Caracas':'start','Porto Alegre':"start",
 'Recife':'start','Quito':'end','Teresina':'top','Oslo':'start','Trondheim':'start','Mo i Rana':'start','Stavanger':'end','Sundsvall':'start', 'Stockholm':'start', 'Gothenburg':'end', 'Malmö':'end',
 'Skellefteå':'start','Halmstad':'end','Borlänge':'end','Gävle':'start','Karlskrona':'start','Philadelphia':'end',
 'Tegucigalpa':'top','Guatemala City':'top','Managua':'end','Panama City':'start','San Pedro Sula':'top','Grand Rapids':'top',
 'Fort Wayne':'top','Flint':'top','Madison':'end','Traverse City':'top','Muncie':'start','Marquette':'top','Eureka':'end',
 'Green Bay':'end','Bellingham':'top','Casper':'start','Billings':'start','Yakima':'top','Cheyenne':'start','Laramie':'end', 'Sheridan':'start', 'Reno':'top', "Modesto":'start',
"Vancouver":"top","Montreal":"start","Ottawa":"end", 'Quebec City':'top', 'Edmonton':'top','Washington, D.C.':'end','Pittsburgh':'end'};

 let radii = {'Washington, D.C.': 18,'Providence': 14,'Philadelphia': 25,'Pittsburgh': 22,'New York City': 30,'Boston': 20,'Bridgeport': 14,'New Brunswick': 20,'Minneapolis': 25,
 'Arvada': 20,'Greeley': 17,'Kansas City': 20,'Denver': 35,'Iowa City': 20,'Fargo': 20,'Omaha': 20,'St. Louis': 25,'Minot': 20,'Cedar Rapids': 23,'Saint Paul': 20,
 'Pueblo': 20,'Colorado Springs': 20,'Columbia': 20,'Springfield': 20,'Des Moines': 20,'Cedar Rapids': 20,'Fort Collins': 20,'Olathe': 20,'Omaha': 20,'Sioux Falls': 20,
 'Milan': 25,'Rome': 30,'Turin': 25,'Verona': 25,'Udine': 20,'Naples': 25,'Florence': 25,'Catania': 25,'Palermo': 25,
 'Genoa': 25, 'Lecce':25, "Los Angeles":40, "San Francisco":30, "Oslo":30, "Bergen":25, "Stockholm": 30, 'San José':28,
 'Guatemala City':25, 'San Salvador':25, "Chicago":25, "Detroit":22, "Cleveland":22, "Fort Wayne": 22, "Youngstown":18, "Portland":32, "Seattle":32,
 'Cheyenne':15,'Laramie':15, 'Toronto':28,'Asunción':16,"San Diego":27, "Sacramento":22, "Tampa":32, "Miami":25}



