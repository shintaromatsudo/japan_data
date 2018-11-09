import React, { Component } from 'react'
import * as d3 from 'd3';


export default class LineChart extends Component {
  constructor(props){
    super(props)
    this.createLineChart = this.createLineChart.bind(this)
  }

  componentDidMount() {
    this.createLineChart()
  }
  componentDidUpdate() {
    this.createLineChart()
  }

  createLineChart() {
    const _self = this;
    const node = this.node
    var width = 500,
        height = 400,
        margin = 50,
        x = d3.scaleLinear()
            .domain([0, 9])
            .range([margin, width - margin]),
        y = d3.scaleLinear()
            .domain([0, 9])
            .range([height - margin, margin]);

        d3.range(10).map(function(i){
            return {x: i, y: Math.sin(i) + 5};
        })

    var line = d3.line()
            .x(function(d){return x(d.x);})
            .y(function(d){return y(d.y);});

    var svg = d3.select(node)

    svg.attr("height", height)
        .attr("width", width);

     svg.selectAll("path")
            .data(_self.props.data)
        .enter()
            .append("path")
            .attr("class", "line")
            .attr("d", function(d){return line(d);});

    renderAxes(svg);

    function renderAxes(svg){
        var xAxis = d3.axisBottom()
                .scale(x.range([0, quadrantWidth()]))
                .scale(x);

        var yAxis = d3.axisLeft()
                .scale(y.range([quadrantHeight(), 0]))
                .scale(y);

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", function(){
                return "translate(" + xStart()
                    + "," + yStart() + ")";
            })
            .call(xAxis);

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", function(){
                return "translate(" + xStart()
                    + "," + yEnd() + ")";
            })
            .call(yAxis);
    }

    function xStart(){ return margin;}
    function yStart(){ return height - margin;}
    //function xEnd(){ return width - margin;}
    function yEnd(){ return margin;}
    function quadrantWidth(){ return width - 2 * margin;}
    function quadrantHeight(){ return height - 2 * margin;}
  }

  render() {
    return <svg ref={node => this.node = node}>
    </svg>
  }
}
