import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nabvar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">CardsJJ</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cards">Cards</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nabvar;