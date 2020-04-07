import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './component/Home'
import Lijst from './component/Lijst'
import NotFound from './component/NotFound'

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
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Home }exact />
            <Route path="/lijst" component={ Lijst } />            
            <Route component={ NotFound } />          
          </Switch>        
        </BrowserRouter>
      );
    }
    else {
      return(
        <div><h1>Loading Smoelenboek</h1></div>
      );
    }
  }
}
