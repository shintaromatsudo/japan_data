import React, { Component } from 'react';
import 'whatwg-fetch'

export default class Graph1 extends Component {
  constructor() {
     super();
     this.state = {
       data: "",
       params:{
         name: "",
         mail: ""
       }
     };
  }

  componentDidMount() {
    this.reconstructionData();
  }

  reconstructionData() {
    fetch('http://127.0.0.1:5000/p', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        name: this.state.name,
        mail: this.state.mail,
      })
    }).then(function(response) {
      return response.json()
    }).then(function(data) {
      this.setState({
         data: data
      });
    });
  }

  render() {
    return(
      <div>{this.state.data}</div>
    )
  }
}
