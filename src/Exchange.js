import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default class Exchange extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      exchange_1: "",

      exchange_2: "",

      displayResult: false,

    };

    this.handleChange = this.handleChange.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {

    this.setState({

      displayResult: true,

    });

  }

  render() {

    return (

      <>

        <Helmet>

          <title>Exchange Performance</title>

        </Helmet>

        <div>

          <h2>Exchange Performance</h2>

          <label>Exchange 1: <input value={this.state.exchange_1} onChange={this.handleChange} /></label>

          <label>Exchange 2: <input value={this.state.exchange_2} onChange={this.handleChange} /></label>

          <br><Button onClick={this.handleClick}>Calculate Performance</Button>

            {this.performance}

        </div>

      </>

    );

  }

}
