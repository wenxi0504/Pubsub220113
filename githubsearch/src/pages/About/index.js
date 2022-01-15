import React, { Component } from 'react'

export default class About extends Component {
    
    render() {
        console.log('The props that About component receive is? ',this.props)
        return (
            <div>
               <h3>I am the Content of About</h3> 
            </div>
        )
    }
}
