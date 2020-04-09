import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './component/Home'
import Lijst from './component/Lijst'
import Toevoegen from './component/Toevoegen'
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
          <React.Fragment>
            <Switch>
              <Route exact path="/" render={ (props) => <Home data={ this.state.data } /> } />
              <Route exact path="/lijst" render={ (props) => <Lijst data={ this.state.data } /> } />
        	    <Route exact path="/toevoegen" render={ (props) => <Toevoegen /> } />
              <Route component={ NotFound } />
            </Switch>        
          </React.Fragment>
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
