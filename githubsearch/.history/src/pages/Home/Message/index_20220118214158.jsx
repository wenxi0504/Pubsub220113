import React, { Component } from "react";
import {Link,Route,Routes} from "react-router-dom";
import Details from "./Details";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "msg1" },
      { id: "02", title: "msg2" },
      { id: "03", title: "msg3" },
    ]
  }
  
  replaceShow=(id,title)=>{

    this.props.history.replace(`/home/message/detail/${id}/${title}`)


  }

  render() {
    const{messageArr}=this.state
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              
              <li key={msgObj.id}>
                {/* pass params to route component */}
                <Link to={`/home/message/details/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                &nbsp;<button onClick={this.pushShow}>push check</button> 
                &nbsp;<button onClick={this.replaceShow}>replace check</button>
              </li>
            );
          })}
        </ul>
        <hr/>
        {/* register route */}
        {/* receive param */}
        <Routes>
        <Route path="details/:id/:title" element={<Details/>}></Route>
        </Routes>
        
       
      </div>
    );
  }
}
