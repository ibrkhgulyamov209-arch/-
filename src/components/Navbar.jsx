import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="" /></div>
      <ul className="nav-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/projects">Проекты</Link></li>
        <li><Link to="/services">Сервисы</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
      </ul>
      <div></div>
      <div></div>

    </nav>
  );
};

export default Navbar;
    