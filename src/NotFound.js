import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>The page you're looing for does not exist</p>
        <Link to="/">Return to Home page</Link>
      </div>
    );
  }
}

export default NotFound;
