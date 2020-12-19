import React from 'react';


export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title h1-title">Kristen's Kitchen</h1>
      <ul className="header__menu">
        <li>breakfast</li>
        <li>lunch</li>
        <li>dinner</li>
        <li>snacks</li>
        <li>sweets</li>
      </ul>
      <ul className="header__about/contact">
        <li>about</li>
        <li>contact</li>
      </ul>
    </header>
  );
}
