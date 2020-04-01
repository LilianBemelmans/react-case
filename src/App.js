import React, { Component } from 'react';
import Header from './component/Header';
import Body from './component/Body';

import API from './lib/API';
import './App.css';

export default class App extends Component{

  constructor(props){
    super(props);
      this.state = {
      loaded: false,
      data: []
    }
  }

  //API
  componentDidMount() {
    API.fetchData()
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
          loaded: true
        });
      })
  }  

  render() {
    if(this.state.loaded) {
      return(
        <React.Fragment>
          <Header></Header>
          {/*<Body></Body>*/}
          <div className="row" style={{marginLeft: 40, padding: 20}}>
            Cards
          {
          }
          </div>
        </React.Fragment>
      );
    }
    else {
      return(
        <div><h1>Loading Smoelenboek</h1></div>
      );
    }
  }
}
