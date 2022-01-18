import React, { Component } from 'react'
const DetailData=[
    {id:"01",content:"Hello world"},
    {id:"02",content:"GoodBye world"},
    {id:"03",content:"Love world"}
]

export default class Details extends Component {
    render() {
        console.log(this.props);
        return (
            <ul>
                <li>ID:</li>
                <li>Title:</li>
                <li>Content:</li>

            </ul>
                
            
        )
    }
}
