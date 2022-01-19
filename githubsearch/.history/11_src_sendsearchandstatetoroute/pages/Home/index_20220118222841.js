import React, { Component } from "react";
import{Route,Routes,useNavigate} from 'react-router-dom';
import News from "./News/index";
import Message from "./Message/index";
import MyNavLink from '../../components/MyNavLink/index'

export default class Home extends Component {
  
  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.props.history.push("/home/message")
  //   },2000)

  // }

  render() {
    return (
      <div>
        <h3>I am the Content of Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to ="/home/news">News</MyNavLink>
            </li>
            <li>
            <MyNavLink to ="/home/message">Message</MyNavLink>
            </li>
          </ul>
         {/* register route */}
         <Routes>
         <Route path="news" element={<News/>}/>
         <Route path="message/*" element={<Message/>}/>
         </Routes>
        
        </div>
      </div>
    );
  }
}
