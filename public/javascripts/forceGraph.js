let simulation; // define globally for updates

function draw_force_main(graph){

    console.log(graph);

    // HERE: projection for lat/long
   
    // simulation constraints
    simulation = d3.forceSimulation().alpha(1).alphaDecay(0.1).velocityDecay(0.4);
    simulation.force("link", d3.forceLink().strength(2).id(function(d) { return d.id; }))
    .force("collide", 30);
    

    simulation
      .nodes(graph.nodes);
      //.on("tick", ticked);

    simulation.force("link")
        .links(graph.links)
        .distance(40);

    // add links
    var link = svg.append("g")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "links")
      .attr("stroke-width", 5)
      .style("stroke-opacity", 0.3)
      .attr("fill", "none")
      .attr("stroke", "red");

    // add nodes
    var node = svg.append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", "nodes")
    .attr("r", 30)
    .attr("stroke", "blue")
    .attr("stroke-width", 5)
    .style("stroke-opacity", 0.5)
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
    //if (!event.active) simulation.alphaTarget(0.3).restart();
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
