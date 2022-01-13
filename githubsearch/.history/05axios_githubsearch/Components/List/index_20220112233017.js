import React, { Component } from "react";
import "./index.css";
export default class List extends Component {

  state={
    users:[], // initial state, initial value of users is array
    isFirst: true,// if it is first time
    isLoading:false,
    err:'',//save relevant err info about request
  
  }


  render() {
    const { users, isFirst, isLoading, err } = this.state;

    return (
      <div className="row">
        {isFirst ? (
          <h2>Input the keyword and click it</h2>
        ) : isLoading ? (
          <h2>Loading.....</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    alt="headPhoto"
                    src={userObj.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
