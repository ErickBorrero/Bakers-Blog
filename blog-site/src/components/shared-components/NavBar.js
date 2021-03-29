import React from 'react';
import logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/global-css.css';

const NavBar = () => {
  return (
    <nav id="mainNav" className="navbar navbar-expand-sm navbar-light mx-auto">
      <Link to="/" className="navbar-brand d-flex align-items-center" href="/">
        <img width="50px" src={logo} alt="Baker's Blog" />
        <span className="ml-2">
          <b>Baker's Blog</b>
        </span>
      </Link>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#nava"
        aria-controls="nava"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="text-primary h1" style={{ lineHeight: '0.5' }}>
          &#x02261;
        </span>
      </button>

      <div className="collapse navbar-collapse" id="nava">
        <ul className="navbar-nav flex-row justify-content-center mt-3 mt-sm-0 ml-auto">
          <Link to="/signup" className="nav-item mx-1">
            <button className="btn px-4 py-2 btn-brand-secondary">
              Register
            </button>
          </Link>
          <Link to="/login" className="nav-item mx-1">
            <button className="btn px-4 py-2 btn-brand-primary">Login</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
