import React, { Component } from 'react';

class AddNinja extends React.Component {
    state= {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value         // e is the event object in parameter above. 
        })                                     // target is the onChange={} function below     
    }                                         // value is the text in between labels and id are the ids duh!

    handleSubmit = (e) => {
        e.preventDefault();   // Prevents form refresh on the page.
       // console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> {/* Use onSubmit to capture both the click event on the button and the user presses enter on the form.  */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>

        )

    }
}

export default AddNinja;