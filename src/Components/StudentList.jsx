import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './NavBar'
import { toast } from 'react-toastify';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getAll')
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8000/delete-student/${id}`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id))
      toast.success('Student deleted successfully!'); 
      })
      .catch((error) => {
        toast.error('Error deleting student');
        console.error(error);
      });
  };

  return (
  <>
   <Navbar /> 
    <div className="container mt-5">
      <h2>Student List</h2>
      <Link to="/create-student">
        <button className="btn btn-primary mb-3">Add Student</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.dateOfBirth}</td>
              <td>
                <Link to={`/edit-student/${student.id}`}>
                  <button className="btn btn-warning btn-sm me-2">Edit</button>
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default StudentList;
