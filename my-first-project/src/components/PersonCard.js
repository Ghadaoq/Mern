import React, { Component } from 'react';

class PersonCard extends React.Component{
    render(){
        const { firstname, lastname, age,haircolor } = this.props;
        return(
            <div>
                <h1>My name is { firstname} , { lastname }</h1>
                <p>Age : {age}</p>
                <p>hair color: {haircolor}</p>
            </div>
        );
    }
}
export default PersonCard;