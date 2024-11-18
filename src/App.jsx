import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Verification from './pages/Verification';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import FormThree from './pages/FormThree';


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/verification' element={<Verification />} />
      <Route path='/formOne' element={<FormOne />} />
      <Route path='/formTwo' element={<FormTwo />} />
      <Route path='/formThree' element={<FormThree />} />
    </Routes>

  )
}

export default App