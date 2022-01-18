import React, { Component } from "react";
import{Route,Routes} from 'react-router-dom';
import News from "./News";
import Message from "./Message";
import MyNavLink from '../../components/MyNavLink/index'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>I am the Content of Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to ="home/news">News</MyNavLink>
            </li>
            <li>
            <MyNavLink to ="home/message">Message</MyNavLink>
            </li>
          </ul>
         {/* register route */}
         <Routes>
         <Route path="news" element={News}/>
         <Route path="message" element={Message}/>
         </Routes>
           
        </div>
      </div>
    );
  }
}
