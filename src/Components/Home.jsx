import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/clH1kv7tq0bFGhebD2fX51n39fGbaCqkKVfahvwwClKYRu4NB.jpg';
import Navbar from './NavBar'

const HomeScreen = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar /> 

      {/* Main Content */}
      <div className="container-fluid hero-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={logo} alt="Student Management" className="img-fluid hero-image" />
          </div>
          <div className="col-md-6 text-container">
            <h1 className="display-4">Welcome to Student Management</h1>
            <p className="lead">Manage your student records efficiently with our easy-to-use platform.</p>
            <Link className="btn btn-primary btn-lg mt-4" to="/create-student">Create Student</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
