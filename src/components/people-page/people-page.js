import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from "../person-details";
import ErrorInformation from '../error-information';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorInformation />
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
};
