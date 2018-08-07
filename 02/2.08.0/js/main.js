/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/


d3.json("data/buildings.json").then(function(data) {
  // convert heights to integers
  data.forEach(function(d) {
    d.height = +d.height;
  });;

  // draw bar chart
  var svg = d3.select("#chart-area").append("svg")
              .attr("width", 500)
              .attr("height", 600);

  var bars = svg.selectAll("rect").data(data);
  bars.enter()
    .append("rect")
      .attr("y", 50)
      .attr("x", function(d, i) {
        return i * 50 + 100;
      })
      .attr("width", 25)
      .attr("height", function(d) {
        return d.height;
      })
      .attr("fill", "grey");

  // labels
  var labels = svg.selectAll("text").data(data);
  labels.enter()
    .append("text")
      .attr("y", function(d, i) {
        return i * 25 + 450;
      })
      .attr("x", function(d, i) {
        return i * 50 + 100;
      })
      .style("font-family", "Arial")
      .style("font-size", "20px")
      .text(function(d) {
        return d.name;
      });
});
