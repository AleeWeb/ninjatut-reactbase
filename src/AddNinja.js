import React, { Component } from 'react';

class AddNinja extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [

            ]
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={} />

                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={} />

                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={} />

                    <button>Submit</button>
                </form>
            </div>

        )

    }
}

