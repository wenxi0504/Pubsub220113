import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('The props that Header component receive is? ',this.props)
        return (
            <div>
                React Router Demo
            </div>
        )
    }
}
