var penpromise= d3.json("classData.json")
penpromise.then(function(data)
{
   everyday(data) 
}),
function(error)
{
    console.log("negative ghost rider")
}
var screen={width:800,height:800}
var drawpoints=function(AllQuizes, xScale, yScale)
{
    d3.selectAll("svg *")
    .remove()
    d3.select("svg")
    .attr("height",screen.height)
    .attr("width",screen.width)
    d3.select('svg')
    .selectAll("circle")
    .data(AllQuizes)
    .enter()
    .append("circle")
    .attr("cx",function(d){return xScale(d.x)})
    .attr("cy",function(d){return yScale(d.y)})
    .attr("r",12)
    .attr("fill", function(d){ return "blue"})    
}
var quizscale = function(data)
{
var xScale=
d3.scaleLinear()
 xScale.domain(
 [
     d3.min(data,function(d){return d.x}),
     d3.max(data,function(d){return d.x})
 ]
 )
xScale.range([100,screen.width-50])
 return xScale
}

var THEYScale = function(data)
{
var yScale=
d3.scaleLinear()
 yScale.domain(
 [
    d3.min(data,function(d){return d.y}),
     d3.max(data,function(d){return d.y})
 ]
 )
yScale.range([100,screen.height-400])
return yScale  
}
var everyday= function(data)
{       var dataDay= 
            d3.range(38)
            d3.select(".spanpen")
              .selectAll("button")
              .data(dataDay)
              .enter()
              .append("button")
              .text(function(d) {return d})
              .on("click", function(d)
    {   
    var firstPerson= function(data,day)
        {
            var obj= {}
            obj.x= day
            obj.y= data.quizes[d].grade
            return obj         
        }
 var AllQuizes = data.map(firstPerson)
        drawpoints(AllQuizes, quizscale(AllQuizes), THEYScale(AllQuizes))
        })
}
