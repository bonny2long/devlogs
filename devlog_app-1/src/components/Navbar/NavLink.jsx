import React from 'react';

const NavLink = ({ href, children, external }) => (
  <li className="list-item">
    <a 
      href={href} 
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  </li>
);

export default NavLink;