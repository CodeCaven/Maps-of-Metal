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
// -17.741710887396685, -46.17374349914809 32.78257194600529, -97.08654828152304 41.05539314235577, -73.16056222266681
// -24.18893527847172, -44.44374016484675  39.154907715375444, -76.88485526922724 -42.02900654856109, 147.2135309809932
// 25.95869742150703, -80.18399025249953 39.290354045557145, -6.536913845087203, 107.21709400898749, -74.98932576902578
var multi_views = {"Canada":[{"loc":[-123.116226, 49.246292], "radius": 32, "tags":["Vancouver", "Victoria"]},
                            {"loc":[-74.65217687661148, 45.51990252147928], "radius": 29, "tags":["Montreal", "Ottawa"]}],
                   "Southwest":[{"loc":[-122.431297, 37.773972], "radius": 37, "tags":["San Francisco","San Jose"]}], // "San Jose", , "Oakland" // can be CALIFORNIA too
                   "BLACK Southwest":[{"loc":[-122.431297, 37.773972], "radius": 28, "tags":["San Francisco","Oakland"]}], // removed shorts , "Oakland"
                   "BLACK Brazil":[{"loc":[-46.502222012480885, -23.751400556216666], "radius": 26, "tags":['São Paulo', "Santos"]}],// -23.751400556216666, -46.502222012480885
                   "Midwest":[{"loc":[-104.88676216053005,  39.290354045557145], "radius": 35, "tags":["Denver", "Colorado Springs"]}],
                   "THRASH Northeast":[{"loc":[ -76.88485526922724,  39.154907715375444], "radius": 30, "tags":["Baltimore", 'Washington, D.C.']},
                                //{"loc":[ -73.16056222266681,  41.05539314235577], "radius": 23, "tags":["Long Island", 'Bridgeport']},// removed shorts
                                {"loc":[ -71.2648711576945,  42.09195435040254], "radius": 28, "tags":["Boston", 'Providence']},
                                {"loc":[ -74.98932576902578,  39.93995510384212], "radius": 26, "tags":['Philadelphia', 'New Jersey']}],
                   "DEATH Northeast":[{"loc":[ -76.88485526922724,  39.154907715375444], "radius": 30, "tags":["Baltimore", 'Washington, D.C.']},
                                {"loc":[ -71.2648711576945,  42.09195435040254], "radius": 28, "tags":["Boston", 'Providence']}],
                   "BLACK Northeast":[{"loc":[ -71.2648711576945,  42.09195435040254], "radius": 28, "tags":["Boston", 'Providence']}],
                   "Northeast":[{"loc":[ -76.88485526922724,  39.154907715375444], "radius": 30, "tags":["Baltimore", 'Washington, D.C.']},
                                {"loc":[ -72.97716108550239,  41.087216947468434], "radius": 23, "tags":["Long Island"]}],// , 'New Haven' removed shorts
                   "United Kingdom":[{"loc":[ -2.9262719286836014,  51.47573264168695], "radius": 26, "tags":["Cardiff", 'Bristol']}],
                   "THRASH Italy":[{"loc":[ 10.773033184863754,  43.71804196778421], "radius": 25, "tags":["Florence", 'Pisa']}],// 43.71804196778421, 10.773033184863754
                   "Florida":[{"loc":[ -80.18399025249953,  25.95869742150703], "radius": 32, "tags":["Miami", 'Fort Lauderdale']}],
                   "Southeast":[{"loc":[ -80.18399025249953,  25.95869742150703], "radius": 26, "tags":["Miami", 'Fort Lauderdale']}],
                   "South":[{"loc":[ -97.08654828152304,  32.78257194600529], "radius": 32, "tags":["Dallas", 'Arlington', 'Fort Worth']}],
                   "HEAVY Germany":[{"loc":[ 7.035311385098635,  51.34081411741906], "radius": 32, "tags":["Düsseldorf", "Essen"]}], // , 'Dortmund' removed shorts
                   "Japan":[{"loc":[ 135.484802,  34.672314], "radius": 25, "tags":["Osaka", "Kobe"]}],// -33.71405288841591, -59.61414288809401
                   "Argentina":[{"loc":[ -59.61414288809401,  -33.71405288841591], "radius": 32, "tags":['Buenos Aires', "Rosario"]}],
                   "Switzerland":[{"loc":[ 7.663563991861752,  47.521574776224504], "radius": 29, "tags":["Basel", "Liestal"]},
                                  {"loc":[7.652629072424938,   46.72481623084177], "radius": 25, "tags":["Thun", "Spiez"]}],// -19.3036839930471, -70.25695751408225
                   "Chile":[{"loc":[ -71.11237226026695,  -33.259161001816715], "radius": 32, "tags":["Santiago"]}, // 'Valparaíso', removed shorts
                                  {"loc":[-70.25695751408225,   -19.3036839930471], "radius": 25, "tags":['Iquique', "Arica"]}],
                   "Netherlands":[{"loc":[ 4.379864637344544,  51.99452040597082], "radius": 33, "tags":["The Hague", "Rotterdam"]}],// 51.99452040597082, 4.379864637344544
                   "THRASH Sweden":[{"loc":[ 12.517292382989,  57.87234834345384], "radius": 30, "tags":['Gothenburg','Trollhättan','Borås']},
                              {"loc":[ 17.71931872790887,  59.33162966448431], "radius": 30, "tags":['Stockholm','Uppsala']}],
                   "Sweden":[{"loc":[ 12.517292382989,  57.87234834345384], "radius": 28, "tags":['Gothenburg','Borås']}],
                   "Indonesia":[{"loc":[ 107.21709400898749,  -6.536913845087203], "radius": 32, "tags":["Jakata", "Bandung"]}],//57.87234834345384, 12.517292382989
                   "Southeast Asia":[{"loc":[ 107.21709400898749,  -6.536913845087203], "radius": 28, "tags":["Jakata", "Bandung"]},
                                    //{"loc":[ 105.73407405349023,  11.26707236413902], "radius": 24, "tags":["Ho Chi Minh City", "Phnom Penh"]}, // removed shorts
                                    {"loc":[ 102.88363298097761,  2.243946045630279], "radius": 31, "tags":["Singapore", "Kuala Lumpur"]}],
                   "Australia":[{"loc":[ 150.98326655237506,  -34.121499329177965], "radius": 23, "tags":["Sydney", "Wollongong"]},
                                {"loc":[ 147.2135309809932,  -42.02900654856109], "radius": 26, "tags":["Hobart", "Launceston"]}],
                   "Africa":[{"loc":[ 28.965562315303508,  -27.639415661554715], "radius": 28, "tags":["Johannesburg", "Bloemfontein", "Durban"]}],
                   "South Asia":[{"loc":[ 73.36686601754629,  18.975856865983314], "radius": 26, "tags":["Mumbai"]}, // pune removed shorts
                                {"loc":[ 91.0486002595479,  23.21572482149919], "radius": 25, "tags":["Chittagong", "Dhaka"]}], // 23.21572482149919, 91.0486002595479, 91.0486002595479
                   "Middle East":[//{"loc":[ 36.278336,  33.510414], "radius": 16, "tags":["Damascus", "Beirut"]}, //removed shorts
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
                    "Brazil":{"centre":[-41.882778, -15.793889],"scale":850},
                    "Colombia":{"centre":[-75.063644, 4.824335],"scale":2100},
                    "Chile":{"centre":[-74.673676, -37.047487],"scale":700},
                    "Argentina":{"centre":[-54.27243, -40.71959],"scale":700},
                    "North Asia":{"centre":[137.383331, 37.916668],"scale":750},
                    "Netherlands":{"centre":[6.197070, 52.127956],"scale":7000},
                    "Southeast":{"centre":[-79.386330, 32.753746],"scale":1700},
                    "California":{"centre":[-120.931297, 36.873972],"scale":2400},
                    "Northwest":{"centre":[-120.196483, 45.923064],"scale":1950},
                    "Northeast":{"centre":[-72.435242, 42.730610],"scale":2600},
                    "Midwest":{"centre":[-95.4994, 43.16358],"scale":1700},
                    "Southeast Asia":{"centre":[111.773456, 5.980408],"scale":800},
                    "Portugal":{"centre":[-14.92547, 37.26568],"scale":2500},
                    "The Baltic States":{"centre":[25.105078, 57.046285],"scale":2900},
                    "Switzerland":{"centre":[8.50635, 46.85048],"scale":10000},
                    "Japan":{"centre":[139.839478, 38.652832],"scale":1700},
                    "Malaysia":{"centre":[108.59869662921119,  6.358388924280981],"scale":2500}, // 4.958388924280981, 108.09869662921119
                    "Indonesia":{"centre":[111.116666, 0.100000],"scale":1200},
                    "Middle East":{"centre":[37.355499, 33.109333],"scale":900},
                    "Africa":{"centre":[28.755339950451578, 3.546388302609268],"scale":350}, // 10.546388302609268, 22.755339950451578
                    "Great Lakes":{"centre":[-84.623177, 42.881832],"scale":2200},
                    "Australia":{"centre":[141.599503, -28.921230],"scale":800},
                    "South":{"centre":[-96.808891, 30.779167],"scale":1900},
                    "South Asia":{"centre":[84.069710, 20.679079],"scale":800},
                    "United Kingdom":{"centre":[-0.9879538443327394, 54.01320819700829],"scale":2400},
                    "Western Europe":{"centre":[2.9879538443327394, 49.01320819700829],"scale":1300},
                    "Northern Europe":{"centre":[9.75224540, 60.91386880],"scale":800},
                    "North America":{"centre":[-100.991531, 39.742043],"scale":800}, 
                    "Southern Europe":{"centre":[12.496366, 41.902782],"scale":1500}, 
                    "Canada":{"centre":[-91.138451, 48.895077],"scale":700}};

var neighbours = {"Northeast":["Ohio", "Kentucky", "Virginia", "West Virginia", "Michigan"],
                  "California":["Wyoming", "Oregon", "Nevada", "Arizona", "Utah", "Idaho","New Mexico","Colorado"],
                  "Florida":["Georgia", "Alabama", "Mississippi", "Louisiana"], "Canada":["Mexico"], "Australia":["Fiji", "Solomon Islands", "New Caledonia","Vanuatu", "Papua New Guinea", "Indonesia", "New Zealand"],"Norway": ["Aland", "Estonia", "Latvia", "Denmark", "Sweden", "Finland", "United Kingdom", "Lithuania"],
                  "Central America":["Jamaica", "Dominican Republic", "Mexico", "Colombia", "Haiti", "Venezuela"],
                  "South America":["Mexico", "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Djibouti", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya","Falkland Islands", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "S. Sudan", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Uganda", "Zambia", "Zimbabwe", "Western Sahara", "United Republic of Tanzania",
                  "French Polynesia", "Pitcairn Islands", "South Georgia and the Islands", "Guinea Bissau", "Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Puerto Rico", "Montserrat", "Antilles", "Turks and Caicos", "Curaçao"],
                  "Sweden": ["Germany", "Poland", "Norway", "Ireland", "Lithuania", "Belarus", "Estonia", "Latvia", "Denmark", "Finland", "United Kingdom", "Russia", "Iceland"],
                  "Finland": ["Norway",  "Estonia", "Sweden",  "Russia"],
                  "Greece": ["Italy",  "Turkey", "Macedonia",  "Bulgaria", 'Albania'],
                  "Portugal": ["Spain",  "Morocco", 'Algeria'],
                  "Denmark": ["Sweden",  "Germany"],
                  "Hungary": ["Slovakia",  "Austria","Ukraine","Romania","Slovenia","Croatia","Republic of Serbia","Czech Republic"],
                  "Brazil": ["Argentina",  "Uruguay", 'Paraguay','Chile','Ecuador','Colombia','France','Peru','Bolivia','Venezuela','Guyana','Suriname'],
                  "Chile": ["Falkland Islands","Argentina", "Uruguay", 'Paraguay','Brazil','Peru','Bolivia'],
                  "Colombia": ['Honduras','Nicaragua','Ecuador','Venezuela','Guyana','Suriname','Panama','Costa Rica','Brazil','Peru','Bolivia',
                    "Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Grenada", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago","Montserrat", "Antilles", "Turks and Caicos", "Curaçao","Netherlands",
                  ],
                  "Argentina": ["South Georgia and the Islands","Falkland Islands","Chile", "Uruguay", 'Paraguay','Brazil','Peru','Bolivia'],
                  "The Baltic States": ["Germany", "Norway", "Poland","Russia","Denmark", "Aland", 'Finland','Sweden','Belarus'],
                  "Eastern Europe": ["Republic of Serbia", "Bosnia and Herzegovina", "Italy","Germany","Sweden","Austria","Kazakhstan","Czech Republic", "Slovenia","Croatia","Russia",  "Poland", 'Lithuania', 'Latvia','Romania','Hungary','Slovakia'],
                  "Southeast Asia": [ "Northern Mariana Islands", "Guam", "Palau", "Solomon Islands", "Taiwan", "Papua New Guinea",  "Australia", 'India', 'Sri Lanka','China','Japan','Bangladesh','Nepal','Bhutan'],
                  "Switzerland": ["Italy",  "France", 'Germany', 'Austria','Liechtenstein'],
                  "North Asia": ["Russia",  "India","Myanmar","Laos","Vietnam","Thailand","Philippines","Hong Kong S.A.R."],
                  "Netherlands": ["Germany", "Belgium","France"],
                  "Japan": ["North Korea",  "South Korea", "China", "Russia"],
                  "South Asia": ["Brunei", "Taiwan", "Laos", "Singapore", "Thailand", "Vietnam", "Philippines", "Myanmar","Cambodia","China", "Afghanistan", "Kyrgyzstan","Tajikistan", "Turkmenistan", "Uzbekistan","Bahrain","Iran","Iraq","Kuwait","Armenia","Georgia","Oman","Qatar", "Saudi Arabia","Yemen","Azerbaijan","United Arab Emirates","Somaliland","Somalia","Ethiopia","Malaysia","Indonesia"],
                  "Malaysia": ["Myanmar","Cambodia","Indonesia",  "Thailand", "Vietnam", "Philippines", "Singapore","Brunei"],
                  "Indonesia": ["Laos", "Cambodia","Myanmar", "Ashmore and Cartier Islands", "India", "Palau", "Kiribati", "East Timor", "Singapore", "Malaysia",  "Australia", "Philippines","Brunei","Thailand","Vietnam"],
                  "Middle East": ["France", "India", "Afghanistan", "Kazakhstan", "Kyrgyzstan", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan", "Algeria", "Niger", "Yemen", "Oman", "Chad", "Eritrea", "Sudan", "Libya", "Tunisia", "Moldova", "Ukraine", "Germany", "Russia", "Italy",  "Greece", "Bosnia and Herzegovina", "Republic of Serbia", 'Albania', 'Montenegro', 'Austria','Slovenia','Croatia','Kosovo','Bulgaria','Romania','Macedonia','Hungary','Switzerland','Malta'],
                  "Africa": ["Suriname", "Guyana", "Columbia", "Venezuela", "Cape Verde", "Anguilla", "Antigua and Barbuda", "Barbados", "Dominica",  "Grenada", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Montserrat", "Antilles", "Turks and Caicos", "Curaçao", "Bolivia", "Uruguay", "Paraguay", "Argentina", "Spain","Brazil", "Portugal", "France", "India", "Afghanistan", "Kazakhstan", "Kyrgyzstan", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan" ,"Russia", "Moldova", "Ukraine", "Germany", "Italy",  "Greece", "Bosnia and Herzegovina", "Republic of Serbia", 'Albania', 'Montenegro', 'Austria','Slovenia','Croatia','Kosovo','Bulgaria','Romania','Macedonia','Hungary','Switzerland','Malta',
                  "Bahrain","Cyprus","Egypt","Iran","Iraq","Israel","Jordan","Kuwait","Lebanon","Armenia","Georgia","Oman","West Bank","Qatar","Afghanistan",
                  "Bangladesh","Bhutan","Maldives","Nepal","Pakistan","Sri Lanka","Singapore","Philippines","Brunei","Malaysia","Vietnam","Laos","Cambodia","Indonesia","Thailand","Taiwan","Myanmar",
                  "China", "Mongolia", "Saudi Arabia","Syria","Turkey","United Arab Emirates","Yemen","Azerbaijan"],
                  "Mexico": ["Guinea Bissau", "Anguilla", "Antigua and Barbuda", "Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "United States Virgin Islands", "British Virgin Islands", "Cayman Islands", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Cuba",  "The Bahamas", "Honduras", "Nicaragua", "Belize", "Costa Rica", "El Salvador", "Guatemala"],
                  "France": ["Portugal", "Czech Republic", "Netherlands", "Luxembourg", "Poland", "Bosnia and Herzegovina", "Slovenia", "Slovakia", "Croatia", "Hungary", "Serbia", "United Kingdom",  "Spain", "Italy",  "Switzerland", "Belgium", "Austria", "Germany"],
                  "Poland": ["Romania", "Moldova","Netherlands", "Russia", "Austria", "Hungary", "France", "Ukraine", "Belarus", "Lithuania", "Germany", "Czech Republic", "Slovakia", "Denmark","Latvia"],
                  "Spain": ["Gibraltar","Algeria", "Morocco", "Tunisia", "France", "Portugal"],
                  "Italy": ["Kosovo", "Germany", "Montenegro", "Albania", "San Marino", "Andorra", "Turkey", "Bulgaria", "Macedonia", "Tunisia", "Algeria", "Spain", "Hungary", "Republic of Serbia", "Switzerland", "Austria", "Slovenia", "Bosnia and Herzegovina", "Croatia", "France",  "Greece", "Romania"],
                  "Germany": ["Russia", "Ukraine", "Lithuania", "Belarus", "Slovenia", "Romania", "Slovakia", "Hungary", "Italy", "Czech Republic","France", "Netherlands", "Austria", "Denmark", "Poland", "Switzerland",  "United Kingdom", "Luxembourg", "Belgium"],
                  "Southeast":["Nebraska", "Iowa", "New Jersey", "New York", "Pennsylvania", "Maryland", "Delaware", "Illinois", "Indiana", "Ohio", 'Texas', "Louisiana", "Oklahoma", "Arkansas", "Kansas", "Missouri"],
                  "South":["Tennessee", "Arizona", "Florida", "Utah", "Colorado", "Mississippi", "Kansas", "Missouri", "Alabama", "Georgia", "North Carolina", "South Carolina", "Illinois", "Kentucky", "Virginia", "West Virginia", "Indiana", "Maryland", "Ohio"], 
                  "Southwest":["South Dakota","Nebraska", "Colorado", "Oklahoma", "Kansas", "Oregon", "Idaho", "Wyoming", "New Mexico", "Texas"],
                  "Northwest":["California", "Nevada", "Utah", "Colorado"],
                  "Midwest":["Arkansas", "Arizona", "Idaho", "Montana", "Wyoming", "Utah", "Texas", "New Mexico", "Oklahoma", "Mississippi", "Maryland", "North Carolina", "Tennessee", "South Carolina", "Georgia", "Alabama", "Pennsylvania", "New York", "Ohio", "Kentucky", "Illinois", "Virginia", "West Virginia", "Michigan", "Wisconsin", "Indiana"], 
                  "Great Lakes":["Oklahoma","Virginia", "West Virginia", "Kentucky", "Connecticut", "Rhode Island", "District of Columbia", "Delaware", "North Dakota", "South Dakota", "Kansas", "Nebraska", "New Hampshire", "Vermont","New York", "Maryland", "Massachusetts", "Pennsylvania", "New Jersey", "Iowa", "Minnesota", "Missouri", "West Virginia"], 
                  "United Kingdom": ["Sweden", "Czech Republic", "Netherlands", "France",  "Luxembourg", "Belgium", "Germany", "Denmark", "Ireland"]};

var pads = {"Hungary":50, "Brazil":10, "Eastern Europe":50, "Southeast Asia":40, "Greece":20, "Central Asia":20, "The Balkans":40,"The Baltic States":50,"Central Europe":50, "Middle East":40, "Mexico":80, "Midwest": 50, "Northwest": 120, "Northeast": 25, "Spain":80,"Finland":40,"Switzerland":50,"United Kingdom":20,
"Germany": 30, "Italy": 40, "Sweden": 50, "South": 110, "Great Lakes": 2, "Southwest": 70, "California": 50, "Southeast":20,
"Central America": 20, "Florida": 20, "Poland":70, "United Kingdom":10, "South America": 40, "Australia":40};

let anchors = {"Los Angeles": "end", "Long Beach": "start", "Oakland": "start","Denver":"top", "St. Louis":"top","Santa Fe":"start",
 "Bergen": "end", "Umeå": "start", "Seattle":"end","New York City": "end",  "Albany":"top", "Boston": "start", "Portland": "end","Amarillo":"top",
  "Derby":'start', "Sapcote":'start', "Hartford":"end", "Trenton": "end",  "Dallas" : "start", "Cedar Rapids":"top", "Omaha":"end","DeKalb":"end",
  "Tampa" : "end", "Austin": "top", "Albuquerque":"start", "Corpus Christi":"start","Medellín":"end","Canberra":"end","Phnom Penh":'top',
"Berlin":"start", "Essen":"top", "Dortmund":"top", "Waco":"end", "Little Rock":"start","Fort Worth":"end","Santa Cruz":"end","Taranto":"start",
"Santiago" : "start", "Rio de Janeiro":"start", "Belo Horizonte" : "start","Louisville":"end", "Montevideo":"start","Riverside":'top',"Milwaukee":"end",
"Lima": "end", "Bogata": "end", "Detroit": "start",  "Minneapolis":"top","Hamar":"start","Fargo":"start",'Ulm':'start',
"Salt Lake City":"top", "Washington":"start",'Asunción':'end','São Paulo':'end','Örebro':'top',"Topeka":"end","Sydney":'top',"Brisbane":"end","Mammoth Lakes":'start',
"Munich":"start",  "Hamburg":"end",  "Sacramento":"top", "Memphis":"end", 'Wrocław':'end',  'Sandviken':'start','Visby':'start',"Bari":"start","Bologna":"start",
"London":"start","Newcastle upon Tyne":"start","Liverpool":"end","Belfast":"end", "Kansas City":"top","Salamanca":"end","Syracuse":"top",
'Bonn': 'end','Stuttgart': 'end','Leipzig': 'start', 'Münster': 'top',"Buffalo":"end","Rochester":"top","Poznań":'end',"Wollongong":"start","Bolzano":"start","Lecce":'end',
"Regensburg":"start", "Schweinfurt":"start", "Siegen":"start", 'Kiel': 'start','Jena': 'end','Bremen': 'end',"Adelaide":'top', "Perth":'top',
'Osnabrück': 'end','Cologne': 'start','Schneeberg': 'start','Baton Rouge': 'end','Tulsa': 'start','Wichita Falls': 'end','Ludvika':'end',"New South Wales":"top",
'Louisville': 'top','Greensboro': 'end','Lexington': 'start', "Sarasota": "end",  'Katowice':'end',"Tarnów":'start',"Lublin":'start', 'Dalarna': 'top',"Mumbai":"end","Pune":"start",
 'Orlando': 'top','Raleigh': 'start','Paducah': 'top','Jacksonville': 'start','Huntsville': 'end','Alexandria': 'top', "Sarpsborg":"start","Venice":"start","Rimini":"start",
 'Asheville': 'top','Bowling Green': 'end','Gainesville': 'end','Sanford': 'start','Bridgeport': 'top',"Phoenix":"top","Tucson":"top","El Paso":"start",
 'Worcester': 'end','New Haven': 'end','Erie':'end','Milan': 'top','Turin': 'top','Verona': 'top','Udine': 'start','Catania': 'start','Palermo': 'end',"Nashville":'end', "Huntsville":'end',
 'Birmingham': 'end','Nottingham': 'start','Edinburgh': 'start','Manchester': 'end', 'Baltimore': 'start',"New Jersey": "start",'Białystok':'top','Besançon':'start',
 'Glasgow': 'end','Brighton': 'start','Bogota':"start",'Brasília':"top",'Caracas':'start','Porto Alegre':"end",'Poitiers':'top','Yutz':'top','Long Island':'start',"Southampton":"start",
 'Recife':'end','Quito':'end','Oslo':'start','Trondheim':'start','Mo i Rana':'start','Stavanger':'end','Sundsvall':'start', 'Stockholm':'start', 'Gothenburg':'end', 'Malmö':'end',
 'Skellefteå':'start','Halmstad':'end','Gävle':'start','Karlskrona':'start','Philadelphia':'end','Ipswich':'top',"Słupsk":'end','Hämeenlinna':'end','Brest':'top', 'Lyon':'end','Grenoble':'start','Arlington':'top',
 'Tegucigalpa':'top','Guatemala City':'top','Managua':'end','Panama City':'end','San Pedro Sula':'top','Grand Rapids':'top',"Częstochowa":'start','Jyväskylä':'end','Kuopio':'start',"Melbourne":"start",'Erfurt':'start',
 'Flint':'start','Madison':'end','Traverse City':'start','Muncie':'start','Marquette':'top','Eureka':'end','Fort Lauderdale':'top','Turku':'end','Rouen':'end',"Launceston":"top","Córdoba":'top','Kipfenberg':'top',
 'Green Bay':'end','Bellingham':'top','Casper':'start','Billings':'start','Yakima':'top','Cheyenne':'start','Laramie':'end', 'Reno':'top', "Modesto":'start', 'Etne':'start','Sogndal':'end','Kobe':'end',"Hoogeveen":'start',
"Vancouver":"top","Montreal":"start","Ottawa":"end", 'Quebec City':'top', 'Edmonton':'top','Pittsburgh':'start',"Leeds":'end','Lappeenranta':'start','Lahti':'top','Tampere':'end',"Sapporo":'top',"Tel Aviv":"end","Mauritius":'top',
'Bilbao':'end', 'Pamplona':'start','Vigo':'start','Norwich':'start', 'A Coruña':'start','Cardiff':'end','Vitoria-Gasteiz':'end',"Zarautz":'start',"Algeciras":'end', 'Nagoya':'top', 'Tokyo':'top',"Yamaguchi":'top','Istanbul':'top','Augsburg':'end',
'Guadalajara':'end','Irapuato':'top','Cheltenham':'end','Tampico':'top','Monterrey':'start', "Cancún":'start','Damascus':'top','Tbilisi':'top','Baku':'start','Damascus':'start','Beirut':'end','Bahrain':'start','Dammam':'end','Kuwait City':'start',
'Jakata':'top','Semarang':'top','Bukittinggi':'start',"Medan":"start","Samarinda":'top','Kuala Terengganu':'top','Johor Bahru':'end','Sandakan':'top','Ipoh':'top','Pahang':'start',"Alor Setar":'top',"Nijverdal":'start',"Zwolle":'end',
"Tawau":'end','Sibu':'end','Harare':'top',"Johannesburg":'top',"Durban":'start',"Bloemfontein":'end','Cape Town':'end','Port Elizabeth':'start', 'Tunis':'start', 'Tripoli':'start', 'Algiers':'top', 'Cairo':'start','Nairobi':'start',
'Rawalpindi':'end','Lahore':'end',"Chittagong":'start','Karachi':'top','Guwahati':'start','Kolkata':'end', 'Dhaka':'top','Maldives':'end','Colombo':'start', 'The Hague':'top', 'Amsterdam':'top', 'Sneek':'top','Groningen':'start',"Winterswijk":'start',
 'Tilburg':'end', 'North Brabant':'start','Heerlen':'start', 'Funchal':'start', 'Lisbon':'end', 'Porto':'end','Aveiro':'end', 'Leiria':'end','Weinfelden':'start','Geneva':'start','Lausanne':'end','Bielefeld':'top',
'Heraklion':'start','Athens':'start', 'Larissa':'top','Ioannina':'top', 'Volos':'start', 'Serres':'start','Thessaloniki':'end',"Chania":'end','Basel':'top','Zurich':'end','Hinwil':'start','Chur':'start','Massagno':'start','Sion':'top','Bern':'top','Lucerne':'start',
'Thun':'top','Kerzers':'top','Ulaanbaatar':'top','Beijing':'end',"Malang":"top", "Tai'an":'end','Nanchang':'end','Shanghai':'start','Taipei':'start',"Jinzhou":'top','Seoul':'top','Hong Kong':'top',"Gomel":'start',"Cēsis":'start',
'Denpasar':'start','Quezon City':'start','Cebu City':'start', 'Bangkok':'end','Chișinău':'end','Kiev':'top','Mykolaiv':'start','Minsk':'top',"Grodno":'top','Kharkiv':'start','Rivne':'end','Dnipro':'end','Nuremberg':'start',
'Tallinn':'end', 'Vilnius':'start','Kaunas':'end','Riga':'end','Tartu':'start','Curitiba':'end', "Teresina":"start","Santa Maria":"end","Natal":"end","Criciúma":"start","Ji-Paraná":"start",'Valparaíso':'end','Arica':'top','Pennsylvania':'top',"Agrigento":'end',
"Concepción":'start',"Copiapó":'end',"Puerto Montt":'start','Rosario':'top','Salta':'start','Neuquén':'end','Bahía Blanca':'start','Rio Grande':'end','Manizales':'end','Cali':'end','Pasto':'end',"Bucaramanga":'start','Cartagena':'end',"Columbus":'start',
'Copenhagen':'top','Roskilde':'end','Aarhus':'end','Esbjerg':'start','Aalborg':'end','Odense':'top','Kolding':'top','Næstved':'start',"Ringsted":'start',"Slagelse":'top',"Macerata":'start','Pisa':'end','Washington, D.C.':'end',"Florence":"start","San Francisco":'end',
'Rome':'end','Naples':'end','Borås':'start','Trollhättan':'top','Västerås':'end','Uppsala':'top','Linköping':'start','Växjö':'start','Karlstad':'end',"Falkenberg":'end',"Swansea":'end','Mielec':'start','Toruń':'end','Gdańsk':'start','Warsaw':'start',"Fond du Lac":'end',
'Szerencs':'start','Nagyatád':'start','Helsingborg':'end','Östersund':'end','Nagykanizsa':'start','Zalaegerszeg':'start','Szombathely':'start','Veszprém':'start','Szigetvár':'start', 'Szeged':'start','Debrecen':'end','Miskolc':'end','Perzów':'start','Łódź':'top','Zielona Góra':'top','Olsztyn':'start','Dukla':'start',
'Hanover':'end', 'Frankfurt':'start','Skien':'end','Helsinki':'start','Rovaniemi':'start','Paris':'start',"León":'end',"Weil am Rhein":'start', 'Los Mochis':'end','Bradford':'top', 'New Haven':'top','Belém':'end','Karlsruhe':'top',
'Bollnäs':'top','Falun':'end', 'Flagstaff':'top', 'Las Vegas':'top'};

 let radii = {'Washington, D.C.': 18,'Providence': 14,'Philadelphia': 22, 'Hartford':22, 'Buffalo':22,'New Jersey': 23, 'Pittsburgh': 24,'New York City': 29,'Boston': 22,'Bridgeport': 14,'New Brunswick': 20,'Minneapolis': 25,"Atlanta": 23,"Melbourne":28,"Granada‎":22,"Valencia":22,
 'Arvada': 20,'Greeley': 17,'Kansas City': 20,'Denver': 25,'Iowa City': 20,'Fargo': 20,'Omaha': 20,'St. Louis': 25,'Minot': 20,'Cedar Rapids': 23,'Saint Paul': 20,"Berlin":25,"Frankfurt":23, "Munich":22, "Hamburg":27,"Adelaide":23,
 'Pueblo': 20,'Colorado Springs': 20,'Columbia': 20,'Springfield': 20,'Des Moines': 20,'Cedar Rapids': 20,'Fort Collins': 20,'Olathe': 20,'Omaha': 20,'Sioux Falls': 20, 'Weil am Rhein':24, "Siegen": 22,"Raleigh":19,"Perth":22,"Gomel":21,
 'Milan': 28,'Rome': 28,'Turin': 27,'Verona': 23,'Udine': 20,'Naples': 25,'Florence': 20,'Catania': 22,'Palermo': 22,'Managua':22,"Kraków":26,'Łódź':24,"Tarnów":24,"Lyon":26,"Nashville":22,"Alexandria":22,"Phoenix":25,"Casablanca":22,'Nuremberg':22,
 'Genoa': 25, 'Lecce':20, "Los Angeles":35, "San Francisco":30, "Oslo":30, "Bergen":29, "Stockholm": 30, 'San José':28,'Orlando': 19, 'Jacksonville': 20,"Paris":32,'Nice':26,"Toulouse":24,"Bordeaux":24, "Brest":23,"Tucson":22,"Zwolle":25,'Duisburg':18,
 'Guatemala City':25, 'San Salvador':25, "Chicago":28, "Detroit":24, "Cleveland":24, "Fort Wayne": 22, "Youngstown":18, "Portland":32, "Seattle":25,"Słupsk":23, 'Gdańsk':23,"Grenoble":22,"Strasbourg":22,"Santa Cruz":18,'Heerlen':22,'Grand Rapids':22,
 'Cheyenne':15,'Laramie':15, 'Toronto':28,'Asunción':16,"San Diego":27, "Sacramento":18, "Tampa":20, "Miami":22, 'Fort Lauderdale': 22,'Warsaw':30, "Katowice": 24,'Kuopio':24,'Hanover':22,'Stuttgart':25,"Schweinfurt":23,"Enschede":22,'Saarbrücken':22,
 'Bogota': 27, 'Santiago': 30, "Newcastle upon Tyne":25, "London": 23, "Bristol": 20, "Birmingham":25, "Leeds": 21, "Brighton":17, "Glasgow":22, "Edinburgh":22, "Liverpool": 24,"Turku":24,'Jyväskylä':23,"Richmond":22,"Mammoth Lakes":19,'Karlsruhe':24,
"Stavanger": 27, "Skien":26, "Sogndal":22, 'Trondheim':24, 'Hamar':22, 'Etne':22, 'Gothenburg':22, 'Dalarna': 18, 'Borlänge':18, 'Umeå': 26, 'Helsinki':30,'Oulu':26,'Hämeenlinna':20, 'Tampere': 22, 'Kouvola':18, 'Lahti':19,"Tunis":21,"Tripoli":17,
'San Antonio':22, 'New Orleans':22,'Albuquerque':25, 'Houston':23, 'Tulsa':22, 'Austin':19, 'Sandviken':26, 'Helsingborg':22,'Linköping':24,'Ludvika':22,'Caracas':22,'Topeka':16, 'Mankato':18, "Canberra":16, "Brisbane":22,"Cape Town":24,"Port Elizabeth":18,
"Venice":23,"Olympia":17,"Milwaukee":23, "Columbus":20, "Illinois":21,'Bilbao':17, 'Vitoria-Gasteiz':17,'Madrid':28,'Barcelona':30,"Zarautz":18,"León":17,"Algeciras":22,'Nagoya':17, 'Hamamatsu':17, 'Tokyo':25, 'Osaka':25,'Sapcote':16,"Derby":17,'Taipei':23,
'Mexico City':34, "Monterrey": 26, "Tijuana":26,'Irapuato':21, 'Guadalajara':22, "Colima":18,'Cheltenham':18,'Tel Aviv':24,'Istanbul':24,'Tehran':24,"Ankara":22,"California":22,'Cologne':22,'Dortmund':22,'Osnabrück':22,"Erfurt":23,"Leipzig":21,'Augsburg':18,
'Norwich':20,'Ipswich':18, "Semarang":24,'Bukittinggi':23, "Malang":20,'Kuala Lumpur':27,'Ipoh':24,'Kota Kinabalu':24,"Sandakan":24,"Alor Setar":22, 'Bangalore':23,'New Delhi':25,'Guwahati':22,'Karachi':22,'Amsterdam':28, 'The Hague':22, "Rotterdam":22,'Groningen':24,
'Porto':29,'Lisbon':29,"Viseu":17, 'Faro':22, 'Leiria':22, 'Athens':30, 'Kerzers':24, 'Sion':24,'Thessaloniki':24, 'Ioannina':22,'Chania':20, "Tai'an":22, 'North Brabant':27, 'Utrecht':24,'Lausanne':24,'Seoul':24,'Beijing':24, "Bern":23,"Zurich":30,"Geneva":24, "Hinwil":18,
'Quezon City':24,'Cebu City':24,'Bangkok':24,"Kiev":28,"Kharkiv":28,"Minsk":28, "Lviv":24,'Chișinău':22,'Mykolaiv':22,"Grodno":22,'Tallinn':29,'Riga':27,'Vilnius':27,'Kaunas':22,'Tartu':22,"Cēsis":21,"Medellín":23,'Manizales':23,'Cali':25,'Pasto':24,
'Belo Horizonte':25,'Rio de Janeiro':25,'Porto Alegre':23,'Recife':22,'Brasília':24,'Curitiba':24,'São Paulo':26,"Puerto Montt":26,"Concepción":22,"Copiapó":22,'Salta':26,'Neuquén':23,'Bahía Blanca':25,'Rio Grande':21,"Bucaramanga":22,"Indianapolis":21,
'Copenhagen':29,'Roskilde':22,'Aarhus':26,'Esbjerg':23,'Aalborg':22,"Slagelse":18,"Rimini":18,'Pisa':29,"Bologna":23,"Malmö":23,'Växjö':23,"Falkenberg":18,'Manchester':18,"Reading":18,'Nottingham':19,'Calgary':22,'Winnipeg':22,'Pennsylvania':22,'Karlskrona':22,
"Budapest":32,'Szeged':25,'Szombathely':23,'Zalaegerszeg':23,'Veszprém':25,'Nagykanizsa':22,'Debrecen':21,'Miskolc':23,'Olsztyn':23,'Perzów':18,'Wrocław':23,'Zielona Góra':22,'Lublin':22,'Mielec':22,'Dukla':18,"Rochester":22,'Washington, D.C.':22,'Karlstad':22,
"Amarillo":22,"El Paso":22}



