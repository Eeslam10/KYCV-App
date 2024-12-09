import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Verification from './pages/Verification';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import FormThree from './pages/FormThree';
import FormFour from './pages/FormFour';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Settings from './pages/Settings';
import PersonalDetails from './pages/PersonalDetails';
import CourseRegForm from './pages/CourseRegForm';
import Notification from './pages/Nofitication';
import AdmissionStatus from './pages/AdmissionStatus';
import ApplicationReview from './pages/ApplicationReview';
import ApplicationResult from './pages/ApplicationResult';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve saved mode from localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <h1 className='hidden md:flex mt-6 justify-center text-red-700 font-bold text-4xl'>
        Please Open it in Mobile View
      </h1>
      <div className={`md:hidden ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/formOne' element={<FormOne />} />
          <Route path='/formTwo' element={<FormTwo />} />
          <Route path='/formThree' element={<FormThree />} />
          <Route path='/formFour' element={<FormFour />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/education' element={<Education />} />
          <Route
            path='/settings'
            element={<Settings toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
          />
          <Route path='/notification' element={<Notification />} />
          <Route path='/personalDetails' element={<PersonalDetails />} />
          <Route path='/courseRegForm' element={<CourseRegForm />} />
          <Route path='/admissionStatus' element={<AdmissionStatus />} />
          <Route path='/applicationReview' element={<ApplicationReview />} />
          <Route path='/applicationResult' element={<ApplicationResult />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
