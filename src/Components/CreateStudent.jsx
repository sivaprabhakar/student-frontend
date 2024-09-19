import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar'
import { toast } from 'react-toastify';

const CreateStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/create-student', student)
    .then(() => {
        toast.success('Student created successfully!'); 
        navigate('/students'); 
      })
      .catch((error) => {
        toast.error('Error creating student');
        console.error(error);
      });
  };

  return (
    <>
     <Navbar /> 
    <div className="container mt-5">
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  );
};

export default CreateStudent;
