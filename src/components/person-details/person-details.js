import React, { Component } from 'react';

import './person-details.css';

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState === true) {
      return
    }

    if (this.props.personId !== prevProps.personId) {

      this.updatePerson();

    };
  }

  updatePerson() {
    this.setState({
      loading: true
    })
    const { personId } = this.props;

    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        });
      });

  }

  render() {

    if (!this.state.person) {
      return <span>Select a person from the list</span>
    }

    const { loading, person: { id, name, gender, birthYear, eyeColor } } = this.state;

    const content = (
      <React.Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );

    return (

      <div className="person-details card">
        {loading ? <Spinner /> : content}
      </div>
    )
  }
}