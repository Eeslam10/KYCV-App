import React from 'react'
import BackArrow from '../assets/backArrow.svg'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout';


const Education = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };



    const navigateReg = useNavigate();
    const handleClickReg = () => {
        navigateReg('/courseRegForm');
    }

    const navigateStatus = useNavigate();
    const handleClickStatus = () => {
        navigateStatus('/admissionStatus')
    }
    ;
    return (
        
        <div className='p-4'>
            <div className=''>
                <button onClick={handleGoBack}>
                    <img src={BackArrow} className='w-8' />
                </button>
            </div>
            <div className='mt-8 p-2'>
                <p className='text-brand text-2xl text-center font-semibold mb-10'>Registration</p>
                <div className='flex flex-col gap-6'>
                    <button onClick={handleClickReg} className='active:text-gray-300 transition transform active:scale-90 p-4 rounded w-full text-brand border-none bg-slate-100 text-xl shadow-md'>Course Registration</button>
                    <button onClick={handleClickStatus} className='active:text-gray-300 transition transform active:scale-90 p-4 rounded w-full text-brand border-none bg-slate-100 text-xl shadow-md'>Admission Status</button>
                </div>
            </div>
        </div>
    )
}

export default Education