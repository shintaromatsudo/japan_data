import React, {Component} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

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
        height = 650;


    /* --------------------
      描画のための準備
    -------------------- */

    /* 地図投影の指定 */
    var projection = d3.geoMercator()
                    .scale(1300)
                    .center([139.883565, 37.565725]);

    /* 地形データをSVGに変換するための入れ物 */
    var path = d3.geoPath()
        .projection(projection);

    /* 描画領域の指定 */
    var svg = d3.select(node).append("svg")
        .attr("width", width)
        .attr("height", height);

    /* --------------------
      データファイルの読み込み
    -------------------- */

    /* --------------------
      地図の描画
    -------------------- */
    d3.json("../data/japan.topojson",matsu);

    function matsu(_error, _topojson){


          if (_error){ console.log(_error); }

          /* 描画用の変数定義 */
          var geometries = topojson.feature(_topojson, _topojson.objects.japan).features;

          /* 描画 */
          var countries =  svg.append("g").selectAll(".prefecture").data(geometries);

          countries
              .enter().insert("path")
                  .attr("class", "prefecture")
                  .attr("d", path)
                  .style("fill", "black")
                  .style("stroke", "#FFF")
                  .style("stroke-width", "1px")


    };
  }

  render() {
    return<svg ref={node => this.node = node}>
      </svg>
  }
}
