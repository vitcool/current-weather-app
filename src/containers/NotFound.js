import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        404
        <Link to="/">Return to Home Page</Link>
      </div>
    );
  }
}
