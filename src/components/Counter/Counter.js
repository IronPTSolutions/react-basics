
import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0
    }
  }

  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onClickCountDown = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="Counter">
        <button className="btn btn-danger btn-sm" onClick={this.onClickCountDown.bind(this)}>-</button>
        <span className="badge" style={{width: '30px'}}>{this.state.count}</span>
        <button className="btn btn-primary btn-sm" onClick={this.onClickCountUp.bind(this)}>+</button>
      </div>
    )
  }
}