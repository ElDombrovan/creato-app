import React from 'react';
import './App.scss';
import { Grid } from "./Grid.js";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>H1 tag</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Grid  />
    </div>
  );
}

export default App;
