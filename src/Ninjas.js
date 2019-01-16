import React, { Component } from 'react';

export class Ninjas extends React.Component {
    render(){
       // Destructuring Props
        const { name, age, belt } = this.props;

        return(
            
            <div className="ninja">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div> 
            </div>
        )
    }
}