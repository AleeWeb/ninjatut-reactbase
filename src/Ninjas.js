import React, { Component } from 'react';

export class Ninjas extends React.Component {
    render(){
       // Destructuring Props
        const { ninjas } = this.props;

        const ninjalist = ninjas.map(ninja => {
            return (
                <div className="ninja">
                    <div>Name: { name }</div>
                    <div>Age: { age }</div>
                    <div>Belt: { belt }</div> 
                </div>
            )
        })

    }
}