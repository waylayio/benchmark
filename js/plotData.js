var formatTooltip = function(d) {
  //to do FIND a score
  // return "<h3>" + "Best score" +"</h3>"+ "<p>" + d.legend + "</p><br>"
  //return JSON.stringify(d)
}

var margin = { top: 100, right: 100, bottom: 100, left: 100}

if(window.innerWidth < 400) {
  margin = { top: 10, right: 10, bottom: 10, left: 10}
}

width = Math.min(1200, window.innerWidth - 10) - margin.left - margin.right,
height = Math.min(500, window.innerHeight - margin.top - margin.bottom - 20);
var colorscale = d3.scale.category10()

var radarChartOptions = {
 w: width,
 h: height,
 margin: margin,
 maxValue: 1,
 levels: 5,
 roundStrokes: true,
 color: colorscale,
 opacityArea: 0.3,  //The opacity of the area of the blob
 opacitySelectedArea: 0.9,  //The opacity of the selected area of the blob
 opacityCircles: 0.05,  //The opacity of the circles of each blob
};

RadarChart(".radarChart", data, radarChartOptions);

var svg = d3.select('.radarChart')
.selectAll('svg')
.append('svg')
.attr("width", width + 200)
.attr("height", height)

var text = svg.append("text")
.attr("class", "title")
.attr('transform', 'translate(0, 40)') 
.attr("x", width - 70)
.attr("y", 10)
.attr("font-size", "1.5em")
.attr("padding-bottom", "2.5em")
.attr("fill", "#404040")
.text("Platform Scores")

var legend = svg.append("g")
.attr("class", "legend")
.attr("height", 1.0)
.attr("width", 220)
.attr('transform', 'translate(10, 100)');

 legend.selectAll('rect')
 .data(data)
 .enter()
 .append("rect")
 .attr("x", width - 65)
 .attr("y", function(d, i){ return i * 20;})
 .attr("width", 10)
 .attr("height", 10)
 .style("fill", function(d, i){ return colorscale(i);});


 legend.selectAll('text')
 .data(data.map(x => x[0]))
 .enter()
 .append("a")
 .attr("xlink:href", function(d){ return "#" + d.legend.split(' ')[0].toLowerCase()})
 .on('mouseover', function (d,i){
   d3.selectAll(".radarArea")
    .transition().duration(200)
    .style("fill-opacity", radarChartOptions.opacityCircles); 
   //Bring back the hovered over blob
   d3.select("."+d.legend.split(' ')[0].toLowerCase())
    .transition().duration(200)
    .style("fill-opacity", radarChartOptions.opacitySelectedArea);
  })
  .on('mouseout', function(){
   d3.selectAll(".radarArea")
    .transition().duration(200)
    .style("fill-opacity", radarChartOptions.opacityArea);
  })
 .append("text")
 .attr("x", width - 52)
 .attr("y", function(d, i){ return i * 20 + 9;})
 .attr("font-size", "1em")
 .attr("fill", "#737373")
 .text(function(d) { return d.legend; }); 



RadarChart(".radarChartIndustries", industries, radarChartOptions);

var svg = d3.select('.radarChartIndustries')
.selectAll('svg')
.append('svg')
.attr("width", width + 200)
.attr("height", height)

var text = svg.append("text")
.attr("class", "title")
.attr('transform', 'translate(0, 40)') 
.attr("x", width - 70)
.attr("y", 10)
.attr("font-size", "1.5em")
.attr("padding-bottom", "2em")
.attr("fill", "#404040")
.text("Requirements")

var legend = svg.append("g")
.attr("class", "legend2")
.attr("height", 1.0)
.attr("width", 220)
.attr('transform', 'translate(10, 100)');

 legend.selectAll('rect')
 .data(industries)
 .enter()
 .append("rect")
 .attr("x", width - 65)
 .attr("y", function(d, i){ return i * 20;})
 .attr("width", 10)
 .attr("height", 10)
 .style("fill", function(d, i){ return colorscale(i);});

// Define the div for the tooltip
var divLegend = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

 legend.selectAll('text')
 .data(industries)
 .enter()
 .append("a")
 .attr("xlink:href", function(d){ return "#" + d[0].legend.split(' ')[0].toLowerCase()})
 .on('mouseover', function (d,i){
   d3.selectAll(".radarArea")
    .transition().duration(200)
    .style("fill-opacity", radarChartOptions.opacityCircles); 
   //Bring back the hovered over blob
   d3.select("."+d[0].legend.split(' ')[0].toLowerCase())
    .transition().duration(200)
    .style("fill-opacity", radarChartOptions.opacitySelectedArea);

  divLegend.transition()   
      .duration(200)    
      .style("opacity", .9);    
  divLegend.html(formatTooltip(d))  
      .style("left", (d3.event.pageX - 200) + "px")   
      .style("top", (d3.event.pageY - 50) + "px");

  })
  .on('mouseout', function(){
   d3.selectAll(".radarArea")
    .transition().duration(200)
    .style("fill-opacity", radarChartOptions.opacityArea);
    divLegend.transition()    
      .duration(500)    
      .style("opacity", 0); 
  })
 .append("text")
 .attr("x", width - 52)
 .attr("y", function(d, i){ return i * 20 + 9;})
 .attr("font-size", "1em")
 .attr("fill", "#737373")
 .text(function(d) { return d[0].legend; }); 