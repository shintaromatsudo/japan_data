import React, { Component } from 'react'
import * as d3 from 'd3';
import h17 from '../data/h17';
import h22 from '../data/h22';

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

  createBarChart(a) {
    console.log(h22);
    const node = this.node;
    var dataset = h17

    var width = 800,
        height = 400,
        padding = 50;

            // 2. SVG領域の設定
         var svg = d3.select(node)

         svg.attr("width", width).attr("height", height);

         // 3. 軸スケールの設定
         var xScale = d3.scaleBand()
           .rangeRound([padding, width - padding])
           .padding(0.1)
           .domain(dataset.map(function(d) { return d.prefecture; }));

         var yScale = d3.scaleLinear()
           .domain([0, d3.max(dataset, function(d) { return d.H17; })])
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
           .attr("x", function(d) { return xScale(d.prefecture); })
           .attr("y", function(d) { return yScale(d.H17); })
           .attr("width", xScale.bandwidth())
           .attr("height", function(d) { return height - padding - yScale(d.H17); })
           .attr("fill", "pink");
    }


  render() {
    return <svg ref={node => this.node = node}>
    </svg>
  }
}
