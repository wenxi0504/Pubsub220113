import React, { Component } from "react";
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
              <li>
                <a href="/message1">message001</a>&nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr/>
        <Details/>
      </div>
    );
  }
}
