import React, { useState } from 'react';
// import React from 'react';
import Logo from "../assets/Logo.svg";
import Button from '../components/Button';
// import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const FormOne = () => {
   
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/formTwo');
    };

    const initialValues = {
        name: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        nin: '',
    };


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        dateOfBirth: Yup.string().required('Enter Date of Birth Please'),
        // gender: Yup.string().required('Enter Genter'),
        address: Yup.string().required('Enter Address'),
        nin: Yup.string().required('Enter NIN'),
    });

    const submitForm = (values) => {
        alert(JSON.stringify(values))
    }

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log('Selected value:', event.target.value);
    };

    return (
        <>
            <div className='flex justify-center mt-20 '>
                <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
            </div>

            <div className="mt-10 mx-6">
                <ProgressBar completed={0} />
            </div>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                // onSubmit={handleSubmit}
                >
                    <form className='flex flex-col gap-6 mt-10'>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Full Name' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="text" name="name" />

                            <div className='text-sm'>
                                <ErrorMessage name="name" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Date of Birth' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow ' type="date" name="dateOfBirth" />

                            <div className='text-sm'>
                                <ErrorMessage name="dateOfBirth" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Address' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="text" name="address" />

                            <div className='text-sm'>
                                <ErrorMessage name="address" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='NIN' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="number" name="nin" />

                            <div className='text-sm'>
                                <ErrorMessage name="nin" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center'>          
                                <select id="dropdown" value={selectedValue} onChange={handleChange} className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow '>
                                    
                                    <option value="" disabled>
                                        Gender
                                    </option>
                                    <option value="option1">Male</option>
                                    <option value="option2">Female</option>
                                    <option value="option3">Other</option>
                                </select>
                        </div>
                        <div className='flex '>
                            <Button className='w-32 absolute right-0 mr-6' onClick={handleClick}>Next</Button>
                        </div>
                    </form>
                </Formik>
            </div>
        </>
    )
}

export default FormOne
