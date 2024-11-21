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
        navigate('/formThree');
    };

    const initialValues = {
        lga: '',
        nextOfKin: '',
        nextOfKinAddress: '',
        nextOfKinNum: '',
    };


    const validationSchema = Yup.object().shape({
        lga: Yup.string().required('Enter your LGA'),
        nextOfKin: Yup.string().required('Name of Next Kin'),
        // gender: Yup.string().required('Enter Genter'),
        nextOfKinAddress: Yup.string().required('Next of Kin Address'),
        nextOfKinNum: Yup.string().required('Next of Kin Phone No'),
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
                <ProgressBar completed={31} />
            </div>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                // onSubmit={handleSubmit}
                >
                    <form className='flex flex-col gap-6 mt-10'>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Local Gov Area' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="text" name="lga" />

                            <div className='text-sm'>
                                <ErrorMessage name="lga" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Next of Kin' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow ' type="text" name="nextOfKin" />

                            <div className='text-sm'>
                                <ErrorMessage name="nextOfKin" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Next of Kin Address' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="text" name="nextOfKinAddress" />

                            <div className='text-sm'>
                                <ErrorMessage name="nextOfKinAddress" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Next of Kin Phone No' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="number" name="nextOfKinNum" />

                            <div className='text-sm'>
                                <ErrorMessage name="nextOfKinNum" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center'>          
                                <select id="dropdown" value={selectedValue} onChange={handleChange} className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow '>
                                    
                                    <option value="" disabled>
                                        Marital Status
                                    </option>
                                    <option value="option1">Single</option>
                                    <option value="option2">Married</option>
                                    <option value="option3">Divorced</option>
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
