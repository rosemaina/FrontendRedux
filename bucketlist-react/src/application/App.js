import React, { Component } from 'react';
import * as Common from '../common';
import * as Forms from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Common.Components.Header/>
          <Common.Components.Footer/>
          <Common.Components.Navigation/>
          <Forms.Components.RegisterForm/>
      </div>
    );
  }
}

export default App;
