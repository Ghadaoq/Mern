import React, { Component } from 'react';

class PersonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }
    incrementAge = () => {
        this.setState({
            age : this.state.age +=1
        });
    }
    render(){
        const { firstname, lastname,haircolor } = this.props;
        const { age } = this.state;
        return(
            <div>
                <h1>My name is { firstname} , { lastname }</h1>
                <p>Age : {age}</p>
                <p>hair color: {haircolor}</p>
                <button onClick={this.incrementAge}> Birthday Button for {firstname} {lastname} </button>
            </div>
        );
    }
}
export default PersonCard;