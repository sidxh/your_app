import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  
  return (
    <div className="headers">
      <header>
        <nav className="navbar">
          <NavLink
            id="logos_nav"
            to="/"
            className={({ isActive }) => (isActive ? 'inactive' : 'inactive')}
          >
            <img className="logos_2" src={require('../name-head.png')} alt="" />
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/vision"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Vision
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/explore"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Directory
          </NavLink>

          <NavLink
            id="shift_nav2"
            to="/opportunities"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Job List
          </NavLink>

          <NavLink
            id="shift_nav"
            to="/donation"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            donations
          </NavLink>
          <NavLink
            id="shift_nav"
            to="/events"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Events
          </NavLink>
          <button className="signup-button" >
              Sign Up →
            </button> 
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
