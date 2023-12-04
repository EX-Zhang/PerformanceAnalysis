import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default class Performance extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      exchange_1: "",

      exchange_2: "",

    };
  }

  calculatePerformance() {

    this.performance = <div>Exchange 1: this.state.exchange_1, Exchange 2: this.state.exchange_2</div>;

  }

  checkInputValue() {

  }

  render() {

    return (

      <>

        <Helmet>

          <title>Performance Analysis</title>

        </Helmet>

        <div>

          <h2>Performance</h2>

          <label>Exchange 1: <input value={this.state.exchange_1} onChange={this.checkInputValue()} /></label>

          <label>Exchange 2: <input value={this.state.exchange_2} onChange={this.checkInputValue()} /></label>

          <button onClick={this.calculatePerformance()}>Calculate Performance</button>

          {this.performance}

        </div>

      </>

    );

  }

}
