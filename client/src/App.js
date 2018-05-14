import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Initialize state
  state = { institutions: [] }

  // Fetch decisions after first mount
  componentDidMount() {
    this.getInstitutions();
  }

  getInstitutions = () => {
    // Get the passwords and store them in state
    fetch('/decisions/institutions/')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { institutions } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="institutions">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {institutions.map((institution, index) =>
                <li key={index}>
                  {institution}
                </li>
              )}
            </ul>
      </div>
    );
  }
}

export default App;
