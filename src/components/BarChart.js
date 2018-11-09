import React, { Component } from 'react'
import * as d3 from 'd3';

export default class BarChart extends Component {
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
    this.createBarChart()
  }
  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    const node = this.node
    var dataset = [{"x": 0, "y": 6},{"x": 1, "y": 9},{"x": 2, "y": 6},
    {"x": 3, "y": 5},{"x": 4, "y": 2},{"x": 6, "y": 4},
    {"x": 7, "y": 2},{"x": 8, "y": 5},{"x": 9, "y": 2}]


    var width = 400,
        height = 400,
        padding = 30;

            // 2. SVG領域の設定
         var svg = d3.select(node)

         svg.attr("width", width).attr("height", height);

         // 3. 軸スケールの設定
         var xScale = d3.scaleBand()
           .rangeRound([padding, width - padding])
           .padding(0.1)
           .domain(dataset.map(function(d) { return d.x; }));

         var yScale = d3.scaleLinear()
           .domain([0, d3.max(dataset, function(d) { return d.y; })])
           .range([height - padding, padding]);

         // 4. 軸の表示
         svg.append("g")
           .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
           .call(d3.axisBottom(xScale));

         svg.append("g")
           .attr("transform", "translate(" + padding + "," + 0 + ")")
           .call(d3.axisLeft(yScale));

         // 5. バーの表示
         svg.append("g")
           .selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", function(d) { return xScale(d.x); })
           .attr("y", function(d) { return yScale(d.y); })
           .attr("width", xScale.bandwidth())
           .attr("height", function(d) { return height - padding - yScale(d.y); })
           .attr("fill", "pink");
    }


  render() {
    return <svg ref={node => this.node = node}>
    </svg>
  }
}
