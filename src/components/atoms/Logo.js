import React from 'react';
import {Link} from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="https://via.placeholder.com/100x50" alt="Site logo" height="50" width="100" />
      </Link>
    </div>
  )
}

export default Logo;
