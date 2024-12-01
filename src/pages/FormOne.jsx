import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormOne = () => {
    const navigate = useNavigate();

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
        address: Yup.string().required('Enter Address'),
        nin: Yup.string().required('Enter NIN'),
        gender: Yup.string().required('Select Gender'),
    });

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event, setFieldValue) => {
        setSelectedValue(event.target.value);
        setFieldValue('gender', event.target.value);
    };

    return (
        <>
            <div className='flex justify-center mt-20'>
                <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
            </div>

            <div className="mt-10 mx-6">
                <ProgressBar completed={0} />
            </div>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        navigate('/formTwo'); // Navigate to next page only after successful validation
                    }}
                >
                    {({ isValid, setFieldValue, handleSubmit }) => (
                        <form className='flex flex-col gap-6 mt-10' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Full Name' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="text" name="name" />
                                <div className='text-sm'>
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Date of Birth' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="date" name="dateOfBirth" />
                                <div className='text-sm'>
                                    <ErrorMessage name="dateOfBirth" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Address' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="text" name="address" />
                                <div className='text-sm'>
                                    <ErrorMessage name="address" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='NIN' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="number" name="nin" />
                                <div className='text-sm'>
                                    <ErrorMessage name="nin" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center'>
                                <select
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={(e) => handleChange(e, setFieldValue)}
                                    className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow'
                                >
                                    <option value="" disabled>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div className='text-sm text-red-500'>
                                    <ErrorMessage name="gender" component="div" />
                                </div>
                            </div>
                            <div className='flex items-end justify-end'>
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className={`${!isValid ? "bg-gray-300" : "bg-brand"} w-32 mr-6 p-3 text-white rounded-md cursor-pointer text-xl`}
                                >
                                    <span className={`${!isValid ? "text-black" : "text-white"}`}>
                                        Next
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default FormOne;
