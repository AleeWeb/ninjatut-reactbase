import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [ // The State Object contains this Array that contains different objects { } inside
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  // Pass in the new ninja as a parameter that is created from the form in from AddNinja component to 
  //add to the ninjas array in the root component 

  addNinja = (ninja) => {
    ninja.id = Math.random();

    //Copy the current State array and add the new Ninjas from the form in AddNinja.js
    let ninjas = [...this.state.ninjas, ninja]; // ... is spreading the state array above to put individual objects in the new copied array
    this.setState({
      ninjas: ninjas
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />  {/*Passing a Function as a Prop.*/}
      </div>
    );
  }
}

export default App;
