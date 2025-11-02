import React from 'react';
import NavLink from './NavLink';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <NavLink href="#">Home</NavLink>
      <NavLink 
        href="https://www.linkedin.com/in/bonny-makaniankhondo-bb95a3321/" 
        external
      >
        My Portfolio
      </NavLink>
    </ul>
  </nav>
);

export default Navbar;