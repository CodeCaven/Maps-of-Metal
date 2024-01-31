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
        .attr('offset', '50%')
        .style('stop-color', 'whitesmoke')//lightgrey
        .style('stop-opacity', 1);

        gradFill.append('stop')
        .attr('offset', '100%')
        .style('stop-color', color) //grey
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


