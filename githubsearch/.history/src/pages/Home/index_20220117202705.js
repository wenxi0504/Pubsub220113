import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import{MyNavLink} from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>I am the Content of Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to ="/news">News</MyNavLink>
            </li>
            <li>
            <MyNavLink to ="/message">Message</MyNavLink>
            </li>
          </ul>
         {/* register route */}

        </div>
      </div>
    );
  }
}
