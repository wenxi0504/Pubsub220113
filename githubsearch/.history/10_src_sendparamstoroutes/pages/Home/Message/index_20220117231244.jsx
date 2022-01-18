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

  render() {
    const{messageArr}=this.state
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              
              <li key={msgObj.id}>
                {/* pass params to route component
                <Link to={`/home/message/details/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
             
             
                {/* pass search to route component
              <Link to={`/home/message/details/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */ }

               {/* pass state to route component */}

              <Link to={{pathname:'/home/message/details',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
              </li>
            );
          })}
        </ul>
        <hr/>
        {/* register route */}
        {/* receive param */}
        <Routes>
        {/* <Route path="details/:id/:title" element={<Details/>}></Route> */}
         {/* search params no need to declare param */}
         <Route path="details" element={<Details/>}></Route> 
        </Routes>
        
       
      </div>
    );
  }
}
