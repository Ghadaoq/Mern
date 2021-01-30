import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <div className="mino">
                {this.props.children}
            </div>
        )
    }
}

export default Main
