import React, { Component } from 'react'
import Search from './Components/search';
import List from './Components/List'
export default class App extends Component {
  // initial state, initial value of users is array
  state={user:[]}
  render() {
    return (
      <div className="container">
     <Search/>  
      <List/>
    </div>

    )
  }
}



