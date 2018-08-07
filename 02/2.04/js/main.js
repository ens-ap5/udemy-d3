/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 100)
	.attr("r", 50)
	.attr("fill", "blue");

var box = svg.append("rect")
						.attr("x", 200)
						.attr("y", 200)
						.attr("width", 100)
						.attr("height", 40)
						.attr("fill", "white")
						.attr("stroke", "red")
						.attr("stroke-width", 2);
