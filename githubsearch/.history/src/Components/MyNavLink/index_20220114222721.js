import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        //way 1
        // const{to,title}=this.props
        // return (
        //     <NavLink  activeClassName="atguigu"className="list-group-item" to={to}>{title}</NavLink>
        // )

        const{title}=this.props
        return (
            <NavLink  activeClassName="atguigu"className="list-group-item" {...this.props}>{title}</NavLink>
        )

    }
}
