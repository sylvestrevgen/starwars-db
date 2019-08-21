import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorInformation from "../error-information";

import './app.css';
import PeoplePage from '../people-page/';

export default class App extends Component {
  
  state = {
    isOpenRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState(({ isOpenRandomPlanet }) => {
      return {
        isOpenRandomPlanet: !isOpenRandomPlanet
      };
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {

    if(this.state.hasError) {
      return <ErrorInformation />
    }

    const { isOpenRandomPlanet } = this.state;

    const randomPlanet = isOpenRandomPlanet ? <RandomPlanet /> : null

    return (
      <div className="container">
        <Header />
        {randomPlanet}
        <button 
          className="btn btn-lg btn-warning" 
          style={{ marginBottom: "30px"}} 
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PeoplePage />
      </div>
    )
  }
}