import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('The props that Header component receive is? ',this.props)
        return (
            <div>
                React Router Demo
                <button onClick={this.forward}>Go forward</button>
                <button onClick={this.back}>Go back</button>
            </div>
        )
    }
}
