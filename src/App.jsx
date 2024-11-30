import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Verification from './pages/Verification';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import FormThree from './pages/FormThree';
import FormFour from './pages/FormFour';
import Home from './pages/Home';
import Profile from './pages/profile';
import Education from './pages/Education';
import Settings from './pages/Settings';
import PersonalDetails from './pages/PersonalDetails';
import CourseRegForm from './pages/CourseRegForm';


const App = () => {
  return (
    <>
    <h1 className='hidden md:flex mt-6 justify-center text-red-700 font-bold text-4xl'>Please Open it in Mobile View</h1>
      <div className='md:hidden'>
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
        <Route path='/settings' element={<Settings />} />
        <Route path='/personalDetails' element={<PersonalDetails />} />
        <Route path='/courseRegForm' element={<CourseRegForm />} />
      </Routes>
      </div>
    </>

  )
}

export default App