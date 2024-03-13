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
  .attr("x", "0.25") // was 0.25
  .attr("y", "0.25") // was 0.25
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

function create_circle_fill(svg, color){
  var gradFill = svg
    .append('defs')
    .append('radialGradient')
    .attr('id', 'circleGradLFill')
    .attr('cx', '50%')
    .attr('cy', '50%')
    .attr('r', '500%')
    .attr('fx', '50%')
    .attr('fy', '50%');

    gradFill.append('stop')
    .attr('offset', '0%')
    .style('stop-color', color)
    .style('stop-opacity', 1);

    gradFill.append('stop')
    .attr('offset', '100%')
    .style('stop-color', 'whitesmoke')
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

function create_gradient_filter_view(svg, color){
  var gradFill = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'middleCircleFillView')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')

      gradFill.append('stop')
      .attr('offset', '0%')
      .style('stop-color', color) //whitesmoke
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '33%')
      .style('stop-color', 'grey')//lightgrey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '66%')
      .style('stop-color', color) //grey
      .style('stop-opacity', 1);

      gradFill.append('stop')
      .attr('offset', '100%')
      .style('stop-color', 'grey') //grey
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

function rectCollide() {
    var nodes,sizes,masses;
    var strength = 1;
    var iterations = 1;
    var nodeCenterX;
    var nodeMass;
    var nodeCenterY;

  function force() {

    var node;
      var i = -1;
      while (++i < iterations){iterate();}
    function iterate(){
          var quadtree = d3.quadtree(nodes, xCenter, yCenter);
          var j = -1
          while (++j < nodes.length){
            node = nodes[j];
            nodeMass = masses[j];
            nodeCenterX = xCenter(node);
            nodeCenterY = yCenter(node);
            quadtree.visit(collisionDetection);
            }
        }

    function collisionDetection(quad, x0, y0, x1, y1) {
        var updated = false;
        var data = quad.data;
        if(data){
          if (data.index > node.index) {

            let xSize = (node.width + data.width) / 2;
            let ySize = (node.height + data.height) / 2;
            let dataCenterX = xCenter(data);
            let dataCenterY = yCenter(data);
            let dx = nodeCenterX - dataCenterX;
            let dy = nodeCenterY - dataCenterY;
            let absX = Math.abs(dx);
            let absY = Math.abs(dy);
            let xDiff = absX - xSize;
            let yDiff = absY - ySize;

            if(xDiff < 0 && yDiff < 0){
              //collision has occurred

              //separation vector
              let sx = xSize - absX;
              let sy = ySize - absY;
              if(sx < sy){
                if(sx > 0){
                  sy = 0;
                }
              }else{
                if(sy > 0){
                  sx = 0;
                }
              }
              if (dx < 0){
                sx = -sx;
              }
              if(dy < 0){
                sy = -sy;
              }

              let distance = Math.sqrt(sx*sx + sy*sy);
              let vCollisionNorm = {x: sx / distance, y: sy / distance};
              let vRelativeVelocity = {x: data.vx - node.vx, y: data.vy - node.vy};
              let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;              
              if (speed < 0){
                      //negative speed = rectangles moving away
              }else{
                var collisionImpulse = 2*speed / (masses[data.index] + masses[node.index]);
                if(Math.abs(xDiff) < Math.abs(yDiff)){
                    //x overlap is less
                    data.vx -= (collisionImpulse * masses[node.index] * vCollisionNorm.x);
                    node.vx += (collisionImpulse * masses[data.index] * vCollisionNorm.x);
                  }else{
                    //y overlap is less
                    data.vy -= (collisionImpulse * masses[node.index] * vCollisionNorm.y);
                    node.vy += (collisionImpulse * masses[data.index] * vCollisionNorm.y);
                  }
                  
                updated = true;
              }
            }
          }
        }
      return updated
  }
  }//end force

  function xCenter(d) { return d.x + d.vx + sizes[d.index][0] / 2 }
  function yCenter(d) { return d.y + d.vy + sizes[d.index][1] / 2 }

  force.initialize = function (_) {
      sizes = (nodes = _).map(function(d){return [d.width,d.height]})
      masses = sizes.map(function (d) { return d[0] * d[1] })
  }

force.size = function (_) {
        return (arguments.length
             ? (size = typeof _ === 'function' ? _ : constant(_), force)
             : size)
    }

force.strength = function (_) {
    return (arguments.length ? (strength = +_, force) : strength)
    }

force.iterations = function (_) {
    return (arguments.length ? (iterations = +_, force) : iterations)
    }

return force
}

var pads = {"Midwest": 50, "Northwest": 120, "Northeast": 20, "Spain":80,"Finland":40,"Switzerland":50,"United Kingdom":20,
"Germany": 30, "Italy": 20, "Sweden": 50, "South": 110, "Great Lakes": 20, "Southwest": 70, "California": 50, "Southeast":20,
"Central America": 20};

let anchors = {"Los Angeles": "end", "San Francisco": "end", "Long Beach": "start", "Oakland": "start","Denver":"end", "St. Louis":"start","Santa Fe":"start",
 "Bergen": "end", "Umeå": "start", "Seattle":"start","New York City": "start",  "Boston": "start", "Portland": "top","San Antonio":"end",
  "Hartford":"start", "Trenton": "end", "Houston" : "start", "Dallas" : "start", "Atlanta": "start", "Richmond" : "start", "Cedar Rapids":"start", "Omaha":"end",
  "Miami" : "start", "Tampa" : "end", "New Orleans": "start", "Austin": "end", "Albuquerque":"end", "Corpus Christi":"start",
   "Helsinki":"start", "Berlin":"start", "Essen":"end", "Dortmund":"end", "Waco":"end","Düsseldorf": "end",  "Little Rock":"start","Fort Worth":"end",
"Santiago" : "end", "Rio de Janeiro":"start", "Belo Horizonte" : "start","Louisville":"end",
"Lima": "end", "Bogata": "end", "Detroit": "start", "Cleveland":"start",  "Minneapolis":"start",
"San Diego":"end",  "Salt Lake City":"end", "Washington":"start",
"Munich":"start",  "Hamburg":"start",  "Sacramento":"start", "Memphis":"end", "Nashville":"end", 
"London":"start","Newcastle upon Tyne":"start","Birmingham":"end","Liverpool":"end","Belfast":"end", "Kansas City":"end","Colorado Springs":"end","Weil am Rhein":"end",
'Bonn': 'end','Stuttgart': 'end','Leipzig': 'start', 'Münster': 'end',
"Regensburg":"start", "Schweinfurt":"start", "Siegen":"start", 'Kiel': 'start','Jena': 'end','Bremen': 'end','Saarbrücken': 'end',
'Osnabrück': 'end','Cologne': 'end','Schneeberg': 'start','Baton Rouge': 'top','Tulsa': 'top','Arlington': 'end','Wichita Falls': 'end',
'Louisville': 'top','Greensboro': 'top','Lexington': 'start',
 'Orlando': 'start','Raleigh': 'start','Paducah': 'top','Jacksonville': 'start','Huntsville': 'end','Alexandria': 'start',
 'Asheville': 'top','Bowling Green': 'end','Gainesville': 'start','Birmingham': 'end','Sanford': 'start','Washington, D.C.': 'end','Providence': 'start','Bridgeport': 'start',
 'Worcester': 'end','New Haven': 'end','Erie':'end','Milan': 'top','Turin': 'top','Verona': 'top','Udine': 'start','Catania': 'start','Palermo': 'end',
 'Birmingham': 'end','Nottingham': 'start','Edinburgh': 'start','Manchester': 'end',
 'Aberdeen': 'start','Glasgow': 'end','Brighton': 'start','Reading': 'top','Bogota':"end",'Brasília':"top",'Caracas':'start','Porto Alegre':"start",
 'Recife':'start','Quito':'end','Teresina':'top','Oslo':'start','Trondheim':'start','Mo i Rana':'start','Stavanger':'end','Sundsvall':'start', 'Stockholm':'start', 'Gothenburg':'end', 'Malmö':'end',
 'Skellefteå':'start','Halmstad':'end','Borlänge':'end','Gävle':'start','Karlskrona':'start',
 'Tegucigalpa':'top','Guatemala City':'top','Managua':'end','Panama City':'start','San Pedro Sula':'top','Grand Rapids':'top',
 'Fort Wayne':'top','Flint':'top','Madison':'end','Traverse City':'top','Muncie':'start','Marquette':'top','Eureka':'end',
 'Green Bay':'end','Bellingham':'top','Casper':'start','Billings':'start','Yakima':'top','Cheyenne':'start','Laramie':'end', 'Sheridan':'start', 'Reno':'top', "Modesto":'start'};

 let radii = {'Washington, D.C.': 18,'Providence': 20,'Philadelphia': 28,'Pittsburgh': 22,'New York City': 28,'Boston': 20,'Bridgeport': 17,'New Brunswick': 20,'Minneapolis': 25,
 'Arvada': 20,'Greeley': 17,'Kansas City': 20,'Denver': 35,'Iowa City': 20,'Fargo': 20,'Omaha': 20,'St. Louis': 25,'Minot': 20,'Cedar Rapids': 23,'Saint Paul': 20,
 'Pueblo': 20,'Colorado Springs': 20,'Columbia': 20,'Springfield': 20,'Des Moines': 20,'Cedar Rapids': 20,'Fort Collins': 20,'Olathe': 20,'Omaha': 20,'Sioux Falls': 20,
 'Milan': 25,'Rome': 30,'Turin': 25,'Verona': 25,'Udine': 20,'Naples': 25,'Florence': 25,'Catania': 25,'Palermo': 25,
 'Genoa': 25, 'Lecce':25, "Los Angeles":30, "San Francisco":30, "Oslo":30, "Bergen":25, "Stockholm": 30, 'San José':28,
 'Guatemala City':25, 'San Salvador':25, "Chicago":25, "Detroit":22, "Cleveland":22, "Fort Wayne": 22, "Youngstown":18, "Portland":32, "Seattle":32,
 'Cheyenne':15,'Laramie':15}



