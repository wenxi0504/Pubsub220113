import React, { Component } from 'react'
import Search from './Components/search';
import List from './Components/List'
export default class App extends Component {
  // initial state, initial value of users is array
  state={users:[]}
  saveUsers=(users) =>{
    this.setState({users:users})

  } 

  render() {
    return (
      <div className="container">
     <Search saveUsers={this.saveUsers}/>  
      <List users={this.state.users}/>
    </div>

    )
  }
}



