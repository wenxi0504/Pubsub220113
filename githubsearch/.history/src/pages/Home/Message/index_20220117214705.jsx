import React, { Component } from "react";

export default class Message extends Component {
  state={
    messageArr:[
      {id:"01",title:"msg1"},
      {id:"02",title:"msg2"},
      {id:"03",title:"msg3"},

    ]
   
    
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/message1">message001</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/message2">message002</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/message/3">message003</a>&nbsp;&nbsp;
          </li>
        </ul>
      </div>
    );
  }
}
