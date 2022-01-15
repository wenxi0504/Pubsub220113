import React, { Component } from "react"
import{Link,Route,Routes}from'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className= "page-header">
              <Header/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}
              {/* using route to shift different components---write a route link */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to='/home'>Home</Link>
            
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Register route */}
          <Routes>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                </Routes>
            
                
              <Home/>
              <About/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
