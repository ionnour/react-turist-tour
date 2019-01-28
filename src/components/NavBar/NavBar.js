import React from 'react';
import logo from'../../logo.png'
import './NavBar.scss';
export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo"/>
      <ul className="nav-links">
      <li>
        <a href="#top" className="nav-link">
        home
        </a>
      </li>
        <li>
          <a href="#top" className="nav-link">
          about
          </a>
        </li>
        <li>
          <a href="#top" className="nav-link active">
          tours
          </a>
        </li>
      </ul>
    </nav>
  )
}
