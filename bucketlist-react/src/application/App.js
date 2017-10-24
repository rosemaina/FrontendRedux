import React, { Component } from 'react';
import * as Common from '../common';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Common.Components.Header/>
          <Common.Components.Footer/>
          <Common.Components.Navigation/>
      </div>
    );
  }
}

export default App;
