import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store, { getClients, getSkills } from './store';
import Clients from './components/Clients';
import Skills from './components/Skills';

class App extends Component {
  componentDidMount() {
    // THIS FILLS UP THE STATE OBJECT ARRAYS WITH DATA TO USE FOR MAPPNG
    store.dispatch(getClients());
    store.dispatch(getSkills());
  }

  render() {
    const { clients, skills } = this.props;
    console.log(this.props);
    return (
      <div className="app">
        <Clients />
        <Skills />
        {/* <div className="clients">
          <h3>Clients</h3>
          {clients.clients.map((client) => {
            return <div key={client.id}>{client.name}</div>;
          })}
        </div> */}
        {/* <div className="skills">
          <h3>Skills</h3>
          {skills.skills.map((skill) => {
            return <div key={skill.id}>{skill.name}</div>;
          })}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
