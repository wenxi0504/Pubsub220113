import React, { Component } from "react"
import{Route,Routes}from'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className= "page-header">
              <Header a={1}/>
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
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Register route */}
          <Routes>
                <Route path="/about" element={About}/>
                <Route path="/home" element={Home}/>
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
