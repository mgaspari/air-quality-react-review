import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //when app is started, send fetch request to 'https://data.cityofnewyork.us/resource/ah89-62h9.json' to get data, and store in state.

  //Based on selected filter, display filtered data without destroying original data.  Set filter to 'Bronx' initially.  The filters will each be a borough.

  //Pass in state data and filter to render in List component

  render() {
    return (
      <div className="App">
        <Filter />
        <List />
      </div>
    );
  }
}

export default App;
