import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    // this.state = store.getState();
    this.state = {
      initialState: '',
    };
  }

  componentDidMount() {
    this.setState({ initialState: 'Hello From The Mushroom Kingdom!' });
  }

  render() {
    const { initialState } = this.state;
    return (
      <div className="app">
        <h1 className="title">{initialState}</h1>
      </div>
    );
  }
}

export default App;
