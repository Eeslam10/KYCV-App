import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormTwo = () => {
    const navigate = useNavigate();

    const initialValues = {
        lga: '',
        nextOfKin: '',
        nextOfKinAddress: '',
        nextOfKinNum: '',
        maritalStatus: '',
    };

    const validationSchema = Yup.object().shape({
        lga: Yup.string().required('Enter your LGA'),
        nextOfKin: Yup.string().required('Name of Next of Kin is required'),
        nextOfKinAddress: Yup.string().required('Next of Kin Address is required'),
        nextOfKinNum: Yup.string().required('Next of Kin Phone Number is required'),
        maritalStatus: Yup.string().required('Select Marital Status'),
    });

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event, setFieldValue) => {
        setSelectedValue(event.target.value);
        setFieldValue('maritalStatus', event.target.value);
    };

    return (
        <>
            <div className='flex justify-center mt-20'>
                <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
            </div>

            <div className="mt-10 mx-6">
                <ProgressBar completed={31} />
            </div>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        navigate('/formThree'); // Navigate to the next page only if the form is valid
                    }}
                >
                    {({ isValid, setFieldValue, handleSubmit }) => (
                        <form className='flex flex-col gap-6 mt-10' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Local Gov Area' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="text" name="lga" />
                                <div className='text-sm'>
                                    <ErrorMessage name="lga" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Next of Kin' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="text" name="nextOfKin" />
                                <div className='text-sm'>
                                    <ErrorMessage name="nextOfKin" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Next of Kin Address' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="text" name="nextOfKinAddress" />
                                <div className='text-sm'>
                                    <ErrorMessage name="nextOfKinAddress" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                                <Field placeholder='Next of Kin Phone No' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow' type="number" name="nextOfKinNum" />
                                <div className='text-sm'>
                                    <ErrorMessage name="nextOfKinNum" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mx-6 justify-center'>
                                <select
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={(e) => handleChange(e, setFieldValue)}
                                    className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow'
                                >
                                    <option value="" disabled>Marital Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                </select>
                                <div className='text-sm text-red-500'>
                                    <ErrorMessage name="maritalStatus" component="div" />
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

export default FormTwo;
