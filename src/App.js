import React, { Component } from 'react';
import { Ninjas } from  './Ninjas';

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        name: 'Ryu',
        Age: 30,
        Belt: 'Black'
      }
    }
    render() {
      return (
        <div>
          <h1>Main</h1>

          <p>Welcome :)</p>
        
        <Ninjas name="Ryu" age="25" belt="Red" />

        <br/>

        <Ninjas name="Yoshi" age="30" belt="Black" />

        </div>
      );
    }
}

export default App;
