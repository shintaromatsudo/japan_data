import React, { Component } from 'react';
import './css/App.css';

//import Map1 from './components/Map';
import Graph1 from './components/Graph1';
import Graph2 from './components/Graph2';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

const data =[
        [{x: 0, y: 6},{x: 1, y: 9},{x: 2, y: 6},
        {x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4},
        {x: 7, y: 2},{x: 8, y: 5},{x: 9, y: 2}]
    ];

export default class App extends Component {

  render() {
    return (

            <div className="container-fluid">

                <div className="row">
                    <div className="col-xs-6" >
                      <div className="top-left" id="">
                        <LineChart  data={data} />
                      </div>
                      <div className="bottom-left" id="">
                        <BarChart  data={data} />
                      </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="right" id="">
                            <Graph2/>
                            <Graph1/>
                        </div>
                    </div>
                </div>

            </div>
    );
  }
}
