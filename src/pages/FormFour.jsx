import React, { useState } from 'react';
// import React from 'react';
import Logo from "../assets/Logo.svg";
import Button from '../components/Button';
// import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';


const FormOne = () => {
   
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/');
    // };

    // const initialValues = {
    //     bank: '',
    //     bvn: '',
    //     accNum: '',
    // };


    // const validationSchema = Yup.object().shape({
    //     bank: Yup.string().required('Enter Your Bank Name!'),
    //     bvn: Yup.string().required('Enter Your BVN!'),
    //     accNum: Yup.string().required('Enter Your account number!'),
        
    // });

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
                <ProgressBar completed={100} />
            </div>

            <div>
                
                    <form className='flex flex-col gap-6 mt-10'>
                    <div className='flex flex-col gap-1 mx-6 justify-center'>          
                                <select id="dropdown" value={selectedValue} onChange={handleChange} className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow '>
                                    
                                    <option value="" disabled>
                                        Blood Group
                                    </option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                </select>
                        </div>
                        
                    <div className='flex flex-col gap-1 mx-6 justify-center'>          
                                <select id="dropdown" value={selectedValue} onChange={handleChange} className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow '>
                                    
                                    <option value="" disabled>
                                        Genotype
                                    </option>
                                    <option value="aa">AA</option>
                                    <option value="as">AS</option>
                                    <option value="ss">SS</option>
                                </select>
                        </div>
                        
                    <div className='flex flex-col gap-1 mx-6 justify-center'>          
                                <select id="dropdown" value={selectedValue} onChange={handleChange} className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow '>
                                    
                                    <option value="" disabled>
                                        Disabilty
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    
                                </select>
                        </div>
                        
                        <div className='flex '>
                            <Button className='w-32 absolute right-0 mr-6' >Next</Button>
                        </div>
                    </form>
               
            </div>
        </>
    )
}

export default FormOne
