import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import ErrorInformation from "../error-information";
import ItemList from '../item-list';
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

import './app.css';
import PeoplePage from '../people-page/';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    isOpenRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState(({ isOpenRandomPlanet }) => {
      return {
        isOpenRandomPlanet: !isOpenRandomPlanet
      };
    });
  };

  render() {

    const { isOpenRandomPlanet } = this.state;

    const randomPlanet = isOpenRandomPlanet ? <RandomPlanet /> : null

    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          {randomPlanet}
          <button
            className="btn btn-lg btn-warning"
            style={{ marginBottom: "30px" }}
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
        </button>
          <PeoplePage />
        </div>
      </ErrorBoundry>
    )
  }
}