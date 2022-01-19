import React, { Component } from 'react'
import{withRouter} from 'react-route-dom'

class Header extends Component {
    back =()=>{

        this.props.history.goBack()
    }
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

export default withRouter(Header)
