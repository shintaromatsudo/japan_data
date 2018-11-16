import React, {Component} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import japandata from '../data/japan';

export default class Map extends Component {
  constructor(props){
      super(props)
      this.createMap = this.createMap.bind(this)
    }

  componentDidMount() {
    this.createMap()
  }
  componentDidUpdate() {
    this.createMap()
  }

  createMap(){
    const node = this.node
    var width  = 1000,
        height = 800;

    /* 地図投影の指定 */
    var projection = d3.geoMercator()
                    .scale(1400)
                    .center([136, 35.5])
                    .translate([width / 5, height / 2]);

    /* 地形データをSVGに変換するための入れ物 */
    var path = d3.geoPath()
        .projection(projection);

    /* 描画領域の指定 */
    var svg = d3.select(node)

    svg.attr("width", width)
        .attr("height", height);

    var mapLayer = g.append('g')
        .classed('map-layer', true);
    /* 描画用の変数定義 */
    var geometries = topojson.feature(japandata, japandata.objects.japan).features;

    /* 描画 */
    var countries =  svg.append("g").selectAll(".prefecture").data(geometries);

    countries
      .enter().insert("path")
        .attr("class", "prefecture")
        .attr("d", path)
        .style("fill", "pink")
        .style("stroke", "black")
        .style("stroke-width", "1px")

  }


  render() {
    return(
      <svg ref={node => this.node = node}>
      </svg>
    );
  }
}
