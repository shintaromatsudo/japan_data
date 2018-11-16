import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './css/App.css';

import Map from './components/Map';
//import Graph1 from './components/Graph1';
//import Graph2 from './components/Graph2';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Button from './components/button';

export default class App extends Component {

  render() {
    return (

            <div className="App">
            <AppBar />
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6}>
                    <div className="left">
                      <div className="top-left" id="">
                        <Button />
                        <LineChart />
                      </div>
                      <div className="bottom-left" id="">
                        <BarChart />
                      </div>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="right" id="">

                            <Map />
                        </div>
                    </Grid>
                </Grid>
            <Footer />
            </div>
    );
  }
}
