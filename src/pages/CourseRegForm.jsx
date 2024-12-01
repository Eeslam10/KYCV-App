import React from 'react'
import BackArrow from '../assets/backArrow.svg'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CourseRegForm = () => {

  const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const initialValues = {
      name: '',
      gender: '',
      studentId: '',
      desiredProgram: '',
      uploadDocument: '',
  };

  return (
    <div className='p-4'>
        <div className=''>
                <button onClick={handleGoBack}>
                    <img src={BackArrow} className='w-8' />
                </button>
            </div>

        
    </div>
  )
}

export default CourseRegForm