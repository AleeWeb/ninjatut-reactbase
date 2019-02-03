import React from 'react';

//Turn this into a Functional Component because the State is in the Class-Based App.js Root Component that is the Parent.
// This functional component is only concerned with UI and how data displays. It's a DUMB Component!

// Pass the props as a paramenter in Functional components. Class Based components use this.props.

const Ninjas = ({ ninjas }) => { 

    const ninjaList = ninjas.map(ninja => {
            return ninja.age > 20 ? (
                <div key={ninja.id} className="ninja-row">
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                </div>
            ) :null;
    })

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )

}

export default Ninjas
