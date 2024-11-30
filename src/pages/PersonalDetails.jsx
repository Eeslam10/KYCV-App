import React from 'react'
import BackArrow from '../assets/backArrow.svg'
import EditButton from '../assets/editButton.svg'
import { useNavigate } from 'react-router-dom'

const PersonalDetails = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center mt-5'>
                <button onClick={handleGoBack}>
                    <img src={BackArrow} className='w-7' />
                </button>
                <img src={EditButton} className='w-7' />
            </div>
            <p className='text-brand text-2xl mt-7'>Personal Details</p>
            <div className='p-2 mt-4 shadow-lg flex flex-col gap-8 '>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Name:</p>
                    <p className='text-xl text-gray-500'>Abdul Yusuf</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Date of Birth:</p>
                    <p className='text-xl text-gray-500'>19/02/2000</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Gender:</p>
                    <p className='text-xl text-gray-500'>Male</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Address:</p>
                    <p className='text-xl text-gray-500'>Layout KT</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>NIN:</p>
                    <p className='text-xl text-gray-500'>99545939538</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>LGA:</p>
                    <p className='text-xl text-gray-500'>Katsina</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Marital Status:</p>
                    <p className='text-xl text-gray-500'>Divorced</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Next of Kin:</p>
                    <p className='text-xl text-gray-500'>Bashir Designer</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Address:</p>
                    <p className='text-xl text-gray-500'>Tayoyi</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Phone NO:</p>
                    <p className='text-xl text-gray-500'>08100000500</p>
                </div>
            </div>
            <p className='text-brand text-2xl mt-12'>Bank Details</p>
            <div className='p-2 mt-4 shadow-lg flex flex-col gap-8'>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Bank Name:</p>
                    <p className='text-xl text-gray-500'>First Bank</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Account Name:</p>
                    <p className='text-xl text-gray-500'>Bashir Desgner</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>BVN:</p>
                    <p className='text-xl text-gray-500'>656364727473</p>
                </div>
            </div>
            <p className='text-brand text-2xl mt-12'>Health Status</p>
            <div className='p-2 mt-4 shadow-lg flex flex-col gap-8'>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Blood Group:</p>
                    <p className='text-xl text-gray-500'>O+</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Genotype:</p>
                    <p className='text-xl text-gray-500'>AA</p>
                </div>
                <div className='flex justify-between gap-12'>
                    <p className='text-xl text-gray-500'>Disability</p>
                    <p className='text-xl text-gray-500'>Yes</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails