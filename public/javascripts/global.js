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
// -45.23018363188316, -21.517547377452868 5.486022412269971, -74.85233730668959 51.47573264168695, -2.9262719286836014
// -17.741710887396685, -46.17374349914809 32.78257194600529, -97.08654828152304
// -24.18893527847172, -44.44374016484675  39.154907715375444, -76.88485526922724 -42.02900654856109, 147.2135309809932
// 25.95869742150703, -80.18399025249953 39.290354045557145, -104.88676216053005 -34.121499329177965, 150.98326655237506
var multi_views = {"Canada":[{"loc":[-123.116226, 49.246292], "radius": 32, "tags":["Vancouver", "Victoria"]},
                            {"loc":[-74.65217687661148, 45.51990252147928], "radius": 29, "tags":["Montreal", "Ottawa"]}],
                   "California":[{"loc":[-122.431297, 37.773972], "radius": 40, "tags":["San Jose", "San Francisco", "Oakland"]}],
                   "Southwest":[{"loc":[-122.431297, 37.773972], "radius": 26, "tags":["San Francisco", "Oakland"]}],
                   "Midwest":[{"loc":[-104.88676216053005,  39.290354045557145], "radius": 35, "tags":["Denver", "Colorado Springs"]}],
                   "Northeast":[{"loc":[ -76.88485526922724,  39.154907715375444], "radius": 30, "tags":["Baltimore", 'Washington, D.C.']}],
                   "United Kingdom":[{"loc":[ -2.9262719286836014,  51.47573264168695], "radius": 26, "tags":["Cardiff", 'Bristol']}],
                   "Florida":[{"loc":[ -80.18399025249953,  25.95869742150703], "radius": 32, "tags":["Miami", 'Fort Lauderdale']}],
                   "Southeast":[{"loc":[ -80.18399025249953,  25.95869742150703], "radius": 26, "tags":["Miami", 'Fort Lauderdale']}],
                   "South":[{"loc":[ -97.08654828152304,  32.78257194600529], "radius": 32, "tags":["Dallas", 'Arlington', 'Fort Worth']}],
                   "NO Germany":[{"loc":[ 7.035311385098635,  51.34081411741906], "radius": 32, "tags":["Düsseldorf", "Essen", 'Dortmund']}],
                   "Japan":[{"loc":[ 135.484802,  34.672314], "radius": 25, "tags":["Osaka", "Kobe"]}],
                   "Australia":[{"loc":[ 150.98326655237506,  -34.121499329177965], "radius": 23, "tags":["Sydney", "Wollongong"]},
                                {"loc":[ 147.2135309809932,  -42.02900654856109], "radius": 26, "tags":["Hobart", "Launceston"]}],
                   "Middle East":[{"loc":[ 36.278336,  33.510414], "radius": 16, "tags":["Damascus", "Beirut"]},
                                {"loc":[ 49.957581,  26.551680], "radius": 20, "tags":["Bahrain", "Dammam"]}],
                   "South America":[{"loc":[-46.17374349914809,-17.741710887396685], "radius": 30, "tags":['Belo Horizonte','Brasília']},
                            {"loc":[-44.44374016484675,-24.18893527847172], "radius": 30, "tags":['São Paulo', 'Rio de Janeiro']},
                            {"loc":[ -74.85233730668959,  5.486022412269971], "radius": 30, "tags":["Bogota", "Medellín"]},
                            {"loc":[-58.381592, -34.603722], "radius": 22, "tags":['Buenos Aires']}]}// 51.34081411741906, 7.035311385098635

var map_settings = {"Central America":{"centre":[-85.587502, 11.934739],"scale":2400}, 
                    "South America":{"centre":[-50.63591, -25.30066],"scale":400}, 
                    "Norway":{"centre":[9.75224540, 60.91386880],"scale":2100},
                    "Florida":{"centre":[-82.452606, 27.964157],"scale":4500},
                    "Sweden":{"centre":[18.063240, 60.334591],"scale":1400},
                    "France":{"centre":[2.602089176702132, 46.350085021226434],"scale":2100}, // 46.350085021226434, 2.602089176702132
                    "Finland":{"centre":[27.67703, 63.39238],"scale":1800},
                    "Germany":{"centre":[10.682127, 51.110924],"scale":2600},
                    "Mexico":{"centre":[-100.125519, 24.951054],"scale":1300},
                    "Poland":{"centre":[21.010548200514503, 52.23038508332507],"scale":2800},
                    "Spain":{"centre":[-4.703790, 39.916775],"scale":2600},
                    "Southeast":{"centre":[-79.386330, 32.753746],"scale":1700},
                    "Northwest":{"centre":[-120.196483, 45.923064],"scale":1950},
                    "Midwest":{"centre":[-95.4994, 43.16358],"scale":1700},
                    "Japan":{"centre":[139.839478, 38.652832],"scale":1700},
                    "Middle East":{"centre":[37.355499, 33.109333],"scale":900},
                    "Great Lakes":{"centre":[-84.623177, 42.881832],"scale":2200},
                    "Australia":{"centre":[141.599503, -28.921230],"scale":800},
                    "South":{"centre":[-96.808891, 30.779167],"scale":1900},
                    "United Kingdom":{"centre":[-0.9879538443327394, 54.01320819700829],"scale":2400}, 
                    "Canada":{"centre":[-91.138451, 48.895077],"scale":700}};

var neighbours = {"Northeast":["Ohio", "Kentucky", "Illinois", "Virginia", "West Virginia", "Michigan", "Wisconsin", "Indiana"],
                  "California":["New Mexico", "Colorado", "Wyoming", "Oregon", "Nevada", "Arizona", "Utah", "Texas", "Idaho"],
                  "Florida":["Georgia", "Alabama", "Mississippi", "Louisiana"], "Canada":["Mexico"], "Australia":["Fiji", "Solomon Islands", "New Caledonia","Vanuatu", "Papua New Guinea", "Indonesia", "New Zealand"],"Norway": ["Aland", "Estonia", "Latvia", "Denmark", "Sweden", "Finland", "United Kingdom", "Lithuania"],
                  "Central America":["Jamaica", "Dominican Republic", "Mexico", "Colombia", "Haiti", "Venezuela"],
                  "South America":["Mexico", "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya","Falkland Islands", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "S. Sudan", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Uganda", "Zambia", "Zimbabwe", "Western Sahara", "United Republic of Tanzania",
                  "French Polynesia", "Pitcairn Islands", "South Georgia and the Islands", "Guinea Bissau", "Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Puerto Rico", "Montserrat", "Antilles", "Turks and Caicos", "Curacao"],
                  "Sweden": ["Germany", "Poland", "Norway", "Ireland", "Lithuania", "Belarus", "Estonia", "Latvia", "Denmark", "Finland", "United Kingdom", "Russia", "Iceland"],
                  "Finland": ["Norway",  "Estonia", "Sweden",  "Russia"],
                  "Japan": ["North Korea",  "South Korea", "China", "Russia"],
                  "Middle East": ["France", "India", "Afghanistan", "Kazakhstan", "Kyrgyzstan", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan", "Algeria", "Niger", "Yemen", "Oman", "Chad", "Eritrea", "Sudan", "Libya", "Tunisia", "Moldova", "Ukraine", "Germany", "Russia", "Italy",  "Greece", "Bosnia and Herzegovina", "Republic of Serbia", 'Albania', 'Montenegro', 'Austria','Slovenia','Croatia','Kosovo','Bulgaria','Romania','Macedonia','Hungary','Switzerland','Malta'],
                  "Mexico": ["Guinea Bissau", "Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Cuba",  "The Bahamas", "Honduras", "Nicaragua", "Belize", "Costa Rica", "El Salvador", "Guatemala"],
                  "France": ["Portugal", "Czech Republic", "Netherlands", "Luxembourg", "Poland", "Bosnia and Herzegovina", "Slovenia", "Slovakia", "Croatia", "Hungary", "Serbia", "United Kingdom",  "Spain", "Italy",  "Switzerland", "Belgium", "Austria", "Germany"],
                  "Poland": ["Romania", "Moldova","Netherlands", "Russia", "Austria", "Hungary", "France", "Ukraine", "Belarus", "Lithuania", "Germany", "Czech Republic", "Slovakia", "Denmark","Latvia"],
                  "Spain": ["Gibraltar","Algeria", "Morocco", "Tunisia", "France", "Portugal"],
                  "Italy": ["Kosovo", "Germany", "Montenegro", "Albania", "San Marino", "Andorra", "Turkey", "Bulgaria", "Macedonia", "Tunisia", "Algeria", "Spain", "Hungary", "Republic of Serbia", "Switzerland", "Austria", "Slovenia", "Bosnia and Herzegovina", "Croatia", "France",  "Greece", "Romania"],
                  "Germany": ["Russia", "Ukraine", "Lithuania", "Belarus", "Slovenia", "Romania", "Slovakia", "Hungary", "Italy", "Czech Republic","France", "Netherlands", "Austria", "Denmark", "Poland", "Switzerland",  "United Kingdom", "Luxembourg", "Belgium"],
                  "Southeast":["Nebraska", "Iowa", "New Jersey", "New York", "Pennsylvania", "Maryland", "Delaware", "Illinois", "Indiana", "Ohio", 'Texas', "Louisiana", "Oklahoma", "Arkansas", "Kansas", "Missouri"],
                  "South":["Tennessee", "Arizona", "Florida", "Utah", "Colorado", "Mississippi", "Kansas", "Missouri", "Alabama", "Georgia", "North Carolina", "South Carolina", "Illinois", "Kentucky", "Virginia", "West Virginia", "Indiana", "Maryland", "Ohio"], 
                  "Southwest":["Nebraska", "Colorado", "Oklahoma", "Kansas", "Oregon", "Idaho", "Wyoming", "New Mexico", "Texas"],
                  "Northwest":["California", "Nevada", "Utah", "Colorado"],
                  "Midwest":["Arkansas", "Arizona", "Idaho", "Montana", "Wyoming", "Utah", "Texas", "New Mexico", "Oklahoma", "Mississippi", "Maryland", "North Carolina", "Tennessee", "South Carolina", "Georgia", "Alabama", "Pennsylvania", "New York", "Ohio", "Kentucky", "Illinois", "Virginia", "West Virginia", "Michigan", "Wisconsin", "Indiana"], 
                  "Great Lakes":["Oklahoma","Virginia", "West Virginia", "Kentucky", "Connecticut", "Rhode Island", "District of Columbia", "Delaware", "North Dakota", "South Dakota", "Kansas", "Nebraska", "New Hampshire", "Vermont","New York", "Maryland", "Massachusetts", "Pennsylvania", "New Jersey", "Iowa", "Minnesota", "Missouri", "West Virginia"], 
                  "United Kingdom": ["Sweden", "Czech Republic", "Netherlands", "France",  "Luxembourg", "Belgium", "Germany", "Denmark", "Ireland"]};

var pads = {"Middle East":40, "Mexico":80, "Midwest": 50, "Northwest": 120, "Northeast": 25, "Spain":80,"Finland":40,"Switzerland":50,"United Kingdom":20,
"Germany": 30, "Italy": 40, "Sweden": 50, "South": 110, "Great Lakes": 2, "Southwest": 70, "California": 50, "Southeast":20,
"Central America": 20, "Florida": 20, "Poland":70, "United Kingdom":10, "South America": 40, "Australia":40};

let anchors = {"Los Angeles": "top", "San Francisco": "end", "Long Beach": "start", "Oakland": "start","Denver":"top", "St. Louis":"start","Santa Fe":"start",
 "Bergen": "end", "Umeå": "start", "Seattle":"start","New York City": "end",  "Boston": "start", "Portland": "end","San Antonio":"end","Eugene":"end",
  "Derby":'start', "Sapcote":'start', "Hartford":"end", "Trenton": "end", "Houston" : "start", "Dallas" : "start", "Richmond" : "start", "Cedar Rapids":"start", "Omaha":"end","DeKalb":"end",
  "Tampa" : "end", "New Orleans": "start", "Austin": "end", "Albuquerque":"end", "Corpus Christi":"start","Medellín":"end","Canberra":"end",
"Berlin":"start", "Essen":"top", "Dortmund":"start", "Waco":"end", "Little Rock":"start","Fort Worth":"end","Santa Cruz":"end","Taranto":"start",
"Santiago" : "end", "Rio de Janeiro":"start", "Belo Horizonte" : "start","Louisville":"end", "Montevideo":"start","Riverside":'top',"Milwaukee":"end",
"Lima": "end", "Bogata": "end", "Detroit": "start", "Cleveland":"start",  "Minneapolis":"start","Hamar":"start","Salvador":"start","Cagliari":"end",
"Salt Lake City":"top", "Washington":"start",'Asunción':'end','São Paulo':'end','Örebro':'end',"Topeka":"end","Sydney":'top',"Brisbane":"start","Mammoth Lakes":'start',
"Munich":"start",  "Hamburg":"start",  "Sacramento":"top", "Memphis":"end", 'Wrocław':'end',  'Sandviken':'start','Visby':'start',"Bari":"top","Bologna":"top",
"London":"start","Newcastle upon Tyne":"start","Birmingham":"end","Liverpool":"end","Belfast":"end", "Kansas City":"top","Weil am Rhein":"end","Salamanca":"end",
'Bonn': 'end','Stuttgart': 'end','Leipzig': 'start', 'Münster': 'top',"Buffalo":"end","Rochester":"top","Poznań":'end',"Wollongong":"start","Bolzano":"start",
"Regensburg":"start", "Schweinfurt":"start", "Siegen":"start", 'Kiel': 'start','Jena': 'end','Bremen': 'end','Saarbrücken': 'end',"Adelaide":'top', "Perth":'top',
'Osnabrück': 'end','Cologne': 'start','Schneeberg': 'start','Baton Rouge': 'top','Tulsa': 'top','Wichita Falls': 'end','Ludvika':'end',"New South Wales":"top",
'Louisville': 'top','Greensboro': 'end','Lexington': 'start', "Sarasota": "end",  'Katowice':'end',"Tarnów":'start',"Lublin":'start', 'Dalarna': 'top',
 'Orlando': 'start','Raleigh': 'start','Paducah': 'top','Jacksonville': 'start','Huntsville': 'end','Alexandria': 'start', "Sarpsborg":"start","Venice":"start","Rimini":"start",
 'Asheville': 'top','Bowling Green': 'end','Gainesville': 'start','Birmingham': 'end','Sanford': 'start','Providence': 'start','Bridgeport': 'start',"Phoenix":"start","Tucson":"start",
 'Worcester': 'end','New Haven': 'end','Erie':'end','Milan': 'top','Turin': 'top','Verona': 'top','Udine': 'start','Catania': 'start','Palermo': 'end',"Nashville":'end', "Huntsville":'end',
 'Birmingham': 'end','Nottingham': 'start','Edinburgh': 'start','Manchester': 'end', 'Baltimore': 'start',"New Jersey": "start",'Białystok':'start','Besançon':'start',"Olympia":"end",
 'Glasgow': 'end','Brighton': 'start','Reading': 'top','Bogota':"start",'Brasília':"top",'Caracas':'start','Porto Alegre':"end",'Poitiers':'top','Yutz':'top',
 'Recife':'start','Quito':'end','Teresina':'top','Oslo':'start','Trondheim':'start','Mo i Rana':'start','Stavanger':'end','Sundsvall':'start', 'Stockholm':'start', 'Gothenburg':'end', 'Malmö':'end',
 'Skellefteå':'start','Halmstad':'end','Gävle':'start','Karlskrona':'start','Philadelphia':'end','Ipswich':'start',"Słupsk":'end','Hämeenlinna':'end','Brest':'top', 'Lyon':'end','Grenoble':'start',
 'Tegucigalpa':'top','Guatemala City':'top','Managua':'end','Panama City':'start','San Pedro Sula':'top','Grand Rapids':'top',"Częstochowa":'start','Jyväskylä':'end','Kuopio':'start',"Melbourne":"start",
 'Flint':'start','Madison':'end','Traverse City':'start','Muncie':'start','Marquette':'top','Eureka':'start','Fort Lauderdale':'top','Turku':'end','Rouen':'top',"Launceston":"top","Córdoba":'end','Kipfenberg':'top',
 'Green Bay':'end','Bellingham':'top','Casper':'start','Billings':'start','Yakima':'top','Cheyenne':'start','Laramie':'end', 'Reno':'top', "Modesto":'start', 'Etne':'start','Sogndal':'end','Kobe':'end','Aachen':'end',
"Vancouver":"top","Montreal":"start","Ottawa":"end", 'Quebec City':'start', 'Edmonton':'top','Pittsburgh':'end',"Leeds":'start','Lappeenranta':'start','Lahti':'top','Tampere':'end',"Sapporo":'end',"Tel Aviv":"end",
'Bilbao':'end', 'Pamplona':'start','Vigo':'end','Norwich':'start', 'A Coruña':'end','Palma':'start','Bristol':'start','Cardiff':'end','Vitoria-Gasteiz':'end',"Zarautz":'start',"Algeciras":'end', 'Nagoya':'top', 'Tokyo':'start',"Yamaguchi":'top','Istanbul':'top','Augsburg':'end',
'Guadalajara':'end','Irapuato':'top','Cheltenham':'end','Tampico':'start','Monterrey':'start','Mexico City':'start',"Cancún":'start','Damascus':'top','Tbilisi':'top','Baku':'start', 'Dubai':'start','Damascus':'start','Beirut':'end','Bahrain':'start','Dammam':'end','Kuwait City':'start'};

 let radii = {'Washington, D.C.': 18,'Providence': 14,'Philadelphia': 26, 'New Jersey': 30, 'Pittsburgh': 24,'New York City': 30,'Boston': 22,'Bridgeport': 14,'New Brunswick': 20,'Minneapolis': 25,"Atlanta": 23,"Melbourne":28,"Granada‎":22,"Valencia":22,
 'Arvada': 20,'Greeley': 17,'Kansas City': 20,'Denver': 25,'Iowa City': 20,'Fargo': 20,'Omaha': 20,'St. Louis': 25,'Minot': 20,'Cedar Rapids': 23,'Saint Paul': 20,"Berlin":25,"Frankfurt":26, "Munich":22, "Hamburg":24,"Adelaide":23,
 'Pueblo': 20,'Colorado Springs': 20,'Columbia': 20,'Springfield': 20,'Des Moines': 20,'Cedar Rapids': 20,'Fort Collins': 20,'Olathe': 20,'Omaha': 20,'Sioux Falls': 20, 'Weil am Rhein':24, "Siegen": 22,"Raleigh":19,"Perth":22,
 'Milan': 28,'Rome': 30,'Turin': 27,'Verona': 25,'Udine': 20,'Naples': 25,'Florence': 25,'Catania': 25,'Palermo': 25,'Managua':22,"Kraków":26,'Łódź':24,"Tarnów":24,"Lyon":26,"Nashville":22,"Alexandria":22,"Phoenix":25,
 'Genoa': 27, 'Lecce':25, "Los Angeles":35, "San Francisco":30, "Oslo":30, "Bergen":29, "Stockholm": 37, 'San José':28,'Orlando': 19, 'Jacksonville': 20,"Paris":32,'Nice':26,"Toulouse":24,"Bordeaux":24, "Brest":23,"Tucson":22,
 'Guatemala City':25, 'San Salvador':25, "Chicago":25, "Detroit":24, "Cleveland":24, "Fort Wayne": 22, "Youngstown":18, "Portland":32, "Seattle":25,"Słupsk":23, 'Gdańsk':23,"Grenoble":22,"Strasbourg":22,"Santa Cruz":18,
 'Cheyenne':15,'Laramie':15, 'Toronto':28,'Asunción':16,"San Diego":27, "Sacramento":22, "Tampa":22, "Miami":22, 'Fort Lauderdale': 22,'Warsaw':30, "Katowice": 24,'Kuopio':24,'Hanover':25,'Stuttgart':23,"Schweinfurt":23,
 'Bogota': 22, 'Santiago': 30, "Newcastle upon Tyne":25, "London": 26, "Bristol": 20, "Birmingham":19, "Leeds": 21, "Brighton":18, "Glasgow":22, "Edinburgh":22, "Liverpool": 24,"Turku":24,'Jyväskylä':23,"Richmond":22,"Mammoth Lakes":19,
"Stavanger": 27, "Skien":26, "Sogndal":22, 'Trondheim':24, 'Hamar':22, 'Etne':22, 'Gothenburg':30, 'Dalarna': 18, 'Borlänge':18, 'Umeå': 26, 'Helsinki':30,'Oulu':26,'Hämeenlinna':20, 'Tampere': 22, 'Kouvola':18, 'Lahti':19,
'San Antonio':24, 'New Orleans':22,'Albuquerque':25, 'Houston':23, 'Tulsa':22, 'Austin':19, 'Sandviken':26, 'Helsingborg':28,'Linköping':24,'Ludvika':22,'Caracas':22,'Topeka':16, 'Mankato':18, "Canberra":16, "Brisbane":22,
"Venice":25,"Olympia":17,"Milwaukee":23, "Columbus":22, "Illinois":21,'Bilbao':17, 'Vitoria-Gasteiz':17,'Madrid':28,'Barcelona':30,"Zarautz":18,"León":17,"Algeciras":22,'Nagoya':17, 'Hamamatsu':17, 'Tokyo':28, 'Osaka':25,'Sapcote':16,"Derby":17,
'Mexico City':34, "Monterrey": 26, "Tijuana":26,'Irapuato':21, 'Guadalajara':22, "Colima":18,'Cheltenham':18,'Tel Aviv':24,'Istanbul':24,'Tehran':24,"Ankara":22,"California":22,'Cologne':22,'Dortmund':25,'Osnabrück':22,"Erfurt":23,"Leipzig":21,'Augsburg':18,
'Norwich':20,'Ipswich':18}



