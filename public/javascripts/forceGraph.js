let simulation; // define globally for updates
let forceWidth;
let forceHeight;


function draw_force_main(transition){

    // HERE
    // need to create graph (links and nodes)
    // logic to add/remove nodes/links
    
    // get graph
    var graph = getGraph(forceWidth, forceHeight);
    
    // boundary edge constraint (account for icon)
    var simEdge = currentRadius + v_width_unit;

    // simulation constraints
    simulation = d3.forceSimulation().alpha(1).alphaDecay(0.1).velocityDecay(0.4)
    .force("link", d3.forceLink().strength(2).id(function(d) { return d.id; }))
    //.force("charge", d3.forceManyBody())
    .force("boundary", forceBoundary(simEdge, simEdge, forceWidth-simEdge, forceHeight-simEdge).strength(0.005))
    .force("collide", d3.forceCollide().radius(function(d){
        if(d.nodeType == 2){
            return d.radius + lineWidth;
        }
        return d.radius;
    }));
    //.force("center", d3.forceCenter(forceWidth / 2, forceHeight / 2));

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
        .links(graph.links)
        .distance(function(d){
            if(d.linkType == 1){
                return 100;
            }
            return edgeScales[d.linkScale](d.value);
        });

    // add links
    var link = svg.append("g")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "links")
      .attr("stroke-width", lineWidth)
      .style("stroke-opacity", 0.3)
      .attr("fill", "none")
      .attr("stroke", function(d){
        return d.colour;
      })
      .style("opacity", function(d){
        if(d.linkType == 1){
            return 0;
        }
        return 1;
      });

    // add nodes
    var node = svg.append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", "nodes")
    .attr("r", d => d.radius)
    .attr("filter", function(d){
        if(d.nodeType != 2){return "url(#specular)"}
        //return "url(#specular)";
    })
    .attr("fill", function(d){
        if(d.nodeType == 2){
            //if(theme == "dark"){return "var(--dark)"}
            //return "white" ;
        return "url(#middleCircleFill)";
        }
        
    })
    .attr("stroke", function(d){
        if(d.nodeType ==2){
            return "whitesmoke";
        }
        return d.colour;
        
    })
    .attr("stroke-width", lineWidth)
    .style("stroke-opacity", function(d){
        return 0.5;
    })
    .style("fill-opacity", function(d){
        return 1;
    })
    .attr("cursor", "pointer")
    .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

    // ticked function
    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    
        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }  
    
}


function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
