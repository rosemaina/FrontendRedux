import React, { Component } from 'react';
import * as Common from '../common';
import * as Auth from '../Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Common.Components.Header/>
          <Common.Components.Footer/>
          <Auth.components.RegisterContainer/>
          {/* <Forms.Components.RegisterForm/> */}
      </div>
    );
  }
}

export default App;
