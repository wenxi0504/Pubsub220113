import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>I am the Content of Home</h3>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <a class="list-group-item" href="./home-news.html">
                News
              </a>
            </li>
            <li>
              <a class="list-group-item active" href="./home-message.html">
                Message
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
