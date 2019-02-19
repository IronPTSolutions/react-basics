
import React, { Component } from 'react';

export default class User extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card" style={{ width: "18em" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.name} ({this.props.age})</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.lastName}</h6>
          <p className="card-text">{this.props.abstract}</p>
        </div>
      </div>
    )
  }
}
