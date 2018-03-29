import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h2>About page</h2> 
        <Link to="/">Return to Home Page</Link>
      </div>
    );
  }
}
