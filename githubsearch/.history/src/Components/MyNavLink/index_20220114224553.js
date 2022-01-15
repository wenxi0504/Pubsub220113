import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        //way 1
        // const{to,title}=this.props
        // return (
        //     <NavLink  activeClassName="atguigu"className="list-group-item" to={to}>{title}</NavLink>
        // )
        //way 2
        // const{title}=this.props
        // return (
        //     <NavLink  activeClassName="atguigu"className="list-group-item" {...this.props}>{title}</NavLink>
        // )
        //way3 tag body is also a special props
        const{title}=this.props
        return (
            <NavLink  activeClassName="atguigu"className="list-group-item" {...this.props} />
        )

    }
}
