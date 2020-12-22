import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';


export default function Header() {
  return (
    
      <header className="header">
        <h1 className="header__title">Kristen's Kitchen</h1>
        <ul className="header__menu">
          <li><NavLink to="/breakfast">breakfast</NavLink></li>
          <li><NavLink to="/lunch">lunch</NavLink></li>
          <li>dinner</li>
          <li>snacks</li>
          <li>sweets</li>
        </ul>
        <ul className="header__menu--about">
          <li>about</li>
          <li>contact</li>
        </ul>
      </header>

    
    
  );
}
