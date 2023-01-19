import React from 'react';
import {Link} from 'react-router-dom';

function MenuItem({link, children}) {
  return (
    <li>
      <Link to={link}>{children}</Link>
    </li>
  )
}

export default MenuItem;
