import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  return (
    <Router>
      {/* ToastContainer is placed here globally */}
      <ToastContainer
        position="top-right"
        autoClose={2000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
