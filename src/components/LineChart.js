import React, { Component } from 'react'
import * as d3 from 'd3';
import data from '../data/p';

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
    console.log(data[0]);
    const node = this.node;
    var dataset = [
       ['H17', 5628],
       ['H22', 5506],
       ['H27', 5382],
       ['H28', 5352],
       ['H29', 5320],

     ];

     var width = 500; // グラフの幅
     var height = 400; // グラフの高さ
     var margin = { "top": 30, "bottom": 60, "right": 30, "left": 60 };

     // 2. SVG領域の設定
     var svg = d3.select(node).attr("width", width).attr("height", height);

     // 3. 軸スケールの設定
     var xScale = d3.scaleBand()
       .rangeRound([margin.left, width - margin.left])
       .padding(0.1)
       .domain(dataset.map(function(d) { return d[0]; }));

     var yScale = d3.scaleLinear()
       .domain([0, d3.max(dataset, function(d) { return d[1]; })])
       .range([height - margin.bottom, margin.top]);

     // 4. 軸の表示
     var axisx = d3.axisBottom(xScale).ticks(5);
     var axisy = d3.axisLeft(yScale).ticks(5);

     svg.append("g")
       .attr("transform", "translate(" + 0 + "," + (height - margin.bottom) + ")")
       .call(axisx)
       .append("text")
       .attr("fill", "black")
       .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
       .attr("y", 35)
       .attr("text-anchor", "middle")
       .attr("font-size", "10pt")
       .attr("font-weight", "bold");

     svg.append("g")
       .attr("transform", "translate(" + margin.left + "," + 0 + ")")
       .call(axisy)
       .append("text")
       .attr("fill", "black")
       .attr("text-anchor", "middle")
       .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
       .attr("y", -35)
       .attr("transform", "rotate(-90)")
       .attr("font-weight", "bold")
       .attr("font-size", "10pt");

     // 5. ラインの表示
     svg.append("path")
       .datum(dataset)
       .attr("fill", "none")
       .attr("stroke", "pink")
       .attr("stroke-width", 1.5)
       .attr("d", d3.line()
         .x(function(d) { return xScale(d[0]); })
         .y(function(d) { return yScale(d[1]); }));
  }

  render() {
    return <svg ref={node => this.node = node}>
    </svg>
  }
}
