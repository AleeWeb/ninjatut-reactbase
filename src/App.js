import React, { Component } from 'react';
import { Ninjas } from  './Ninjas';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>

        <p>Welcome :)</p>
      
       <Ninjas />
      </div>
    );
  }
}

export default App;
