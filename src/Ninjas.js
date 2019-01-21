import React, { Component } from 'react';

export class Ninjas extends React.Component {
    render(){
       // Destructuring Props
        const { ninjas } = this.props; // This is the SAME as const ninjas = this.props.ninjas;

        // The Map function will return these HTML elements for each seperate object
            //    in the ninjas state array.  

        const ninjaList = ninjas.map(ninja => {
            return (
                <div key={ninja.id} className="ninja-row"> {/* Avoid error for key */}
                    <div>Name: { ninja.name }</div>  {/* We're cycling through ninja for each prop for the new array */}
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div> 
                </div>
            )
        })

        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
    }
}