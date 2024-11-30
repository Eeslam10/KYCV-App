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
        navigate('/formFour');
    };

    const initialValues = {
        bank: '',
        bvn: '',
        accNum: '',
    };


    const validationSchema = Yup.object().shape({
        bank: Yup.string().required('Enter Your Bank Name!'),
        bvn: Yup.string().required('Enter Your BVN!'),
        accNum: Yup.string().required('Enter Your account number!'),
        
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
                <ProgressBar completed={67} />
            </div>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                // onSubmit={handleSubmit}
                >
                    <form className='flex flex-col gap-6 mt-10'>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Bank Name' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="text" name="bank" />

                            <div className='text-sm'>
                                <ErrorMessage name="bank" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='BVN' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow ' type="number" name="bvn" />

                            <div className='text-sm'>
                                <ErrorMessage name="bvn" component="div" className="text-red-500" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mx-6 justify-center relative'>
                            <Field placeholder='Account Number' className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ' type="number" name="accNum" />

                            <div className='text-sm'>
                                <ErrorMessage name="accNum" component="div" className="text-red-500" />
                            </div>
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
