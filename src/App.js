import React, { Component } from 'react';
import { Ninjas } from  './Ninjas';

class App extends Component {
  state = {
    ninjas: [   // This state is an Array that contains different objects { }
      {name:'Ryu', age: 30, belt: 'black', id: 1},
      {name:'Yoshi', age: 20, belt: 'green', id: 2},
      {name:'Crysyal', age: 25, belt: 'pink', id: 3}
    ]
  }
    render() {
      return (
        <div>
          <h1>Main</h1>

          <p>Welcome :)</p>
            {/* Pass the State Array object "ninjas" as a prop (ninjas=) to the Ninjas component. */}
        <Ninjas ninjas={this.state.ninjas} />

        </div>
      );
    }
}

export default App;
