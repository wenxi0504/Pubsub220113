import React, { Component } from "react";
import {Link,Route} from "react-router-dom";
import Details from "./Details";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "msg1" },
      { id: "02", title: "msg2" },
      { id: "03", title: "msg3" },
    ]
  }

  render() {
    const{messageArr}=this.state
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link to="/home/message/details">{msgObj.title}</Link>
              </li>
            );
          })}
        </ul>
        <hr/>
        {/* register route */}
        <Route path="/home/message/details" element={Details}></Route>
        <Details/>
      </div>
    );
  }
}
