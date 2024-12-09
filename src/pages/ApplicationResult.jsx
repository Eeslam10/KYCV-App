import React from 'react'
import BackArrow from '../assets/backArrow.svg';
import { useNavigate } from 'react-router-dom';

const ApplicationResult = () => {

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='p-4'>
            <div>
                <button onClick={handleGoBack}>
                    <img src={BackArrow} className='w-8' alt="Back" />
                </button>
            </div>
            <div className='mt-8'>
                <p className='text-brand text-xl font-semibold text-center'>Application Status</p>
            </div>
            <div className='p-2 mt-10 flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <p className='text-brand text-xl'>Name:</p>
                    <p className='text-brand text-xl'>Bashir Designer</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-brand text-xl'>Application Date:</p>
                    <p className='text-brand text-xl'>11th Sep, 2001</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-brand text-xl'>Application Number:</p>
                    <p className='text-brand text-xl'>ASA112132</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-brand text-xl'>Program:</p>
                    <p className='text-brand text-xl'>Welding</p>
                </div>
            </div>
        </div>
    )
}

export default ApplicationResult