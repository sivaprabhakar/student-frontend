import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/students">Student List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-student">Create Student</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
