import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'

import MenuItem from './menuitem';

const Menu = ({ items }) => (
  <nav className="nav2">
    <ul>
      {items.map((item) => (
        <MenuItem key={item.to} {...item} />
      ))}
    </ul>
  </nav>
);

export default Menu;