import React, { Component } from 'react';
import './App.css';
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Cirlces";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 1
    };
  }

  handleSelectedCircle = (circle) => {
    this.setState({selectedCircle: circle});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">PROJECT 4 ASSESSMENT</header>
        <main>
          <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleSelectedCircle={this.handleSelectedCircle}
          />
          <Circles 
            selectedCircle={this.state.selectedCircle}
          />
        </main>
      </div>
    );
  }
}

export default App;