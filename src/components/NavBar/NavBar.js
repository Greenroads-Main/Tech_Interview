import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="list">
      <ul>
        <li><Link to="/Home">Home</Link></li>|
        <li><Link to="/Events">Events</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;