import React, { Component } from 'react'
import Search from './Components/search';
import List from './Components/List'
export default class App extends Component {
 
  state={
    users:[], // initial state, initial value of users is array
    isFirst: true,// if it is first time
    isLoading:false,
    err:'',//save relevant err info about request
  
  }


  // saveUsers=(users) =>{
  //   this.setState({users:users})

  // } 

  //update App's state
  updateAppState=(stateObj) => {
    this.setState(stateObj)

  }


  render() {
    return (
      <div className="container">
        {/* saveUsers={this.saveUsers} */}
     <Search updateAppState={this.updateAppState} />  
      <List users={this.state.users}/>
    </div>

    )
  }
}



