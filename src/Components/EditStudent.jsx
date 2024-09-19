import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './NavBar'
import { toast } from 'react-toastify';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/student/${id}`)
      .then((response) => {
        const studentData = response.data;

        // Ensure dateOfBirth is formatted as 'YYYY-MM-DD'
        const formattedDateOfBirth = studentData.dateOfBirth
          ? new Date(studentData.dateOfBirth).toISOString().split('T')[0]
          : '';

        setStudent({
          firstName: studentData.firstName,
          lastName: studentData.lastName,
          email: studentData.email,
          dateOfBirth: formattedDateOfBirth
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/update-student/${id}`, student)
    .then(() => {
        toast.success('Student updated successfully!'); 
        navigate('/students'); 
      })
      .catch((error) => {
        toast.error('Error updating student');
        console.error(error);
      });
  };

  return (
    <>
     <Navbar /> 
    <div className="container mt-5">
      <h2>Edit Student</h2>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
    </>
  );
};

export default EditStudent;
