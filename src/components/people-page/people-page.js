import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from "../person-details";
import ErrorInformation from '../error-information';
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(item) => (`${item.name} (${item.birthYear})`)}

      </ItemList>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  };
};
