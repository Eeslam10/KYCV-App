import React from 'react'
import BackArrow from '../assets/backArrow.svg'
import EditButton from '../assets/editButton.svg'
import ProfileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const navigatePersonal = useNavigate();
    const handleGoPersonalDetails = () => {
        navigate('/personalDetails');
    };
    return (
        <div className='p-4'>
            <div className=''>
                <button onClick={handleGoBack}>
                    <img src={BackArrow} className='w-8 ' />
                </button>
            </div>

            <div className='relative bg-gray-100 w-full h-[250px] rounded-lg shadow-lg mt-10'>
                <div className='absolute right-0 p-2 mt-2'>
                    <button onClick={handleGoPersonalDetails}>
                        <img src={EditButton} className='w-7' />
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={ProfileIcon} className='mt-6' />
                    <p className='text-2xl text-brand'>HJNHV</p>
                </div>
                <div className='flex flex-col mt-4'>
                    <input type="text" className='border-b border-gray-500 bg-gray-100 text-2xl outline-none p-2 mx-3 text-brand' placeholder='Change Name' />
                </div>
            </div>
            <div className='mt-20 '>
                <input type="text" disabled placeholder='+234 8133 32232' className='bg-gray-100 w-full p-4 text-xl rounded' />
            </div>
            <div className=''>
                <div className='flex w-full justify-between  bg-gray-100 rounded p-4 mt-20 cursor-auto'>
                    <p className='text-2xl text-brand'>Personal Details</p>
                    <img src={BackArrow} className='rotate-180  text-gray-300 ]' />
                </div>

                <div className='flex w-full justify-between  bg-gray-100 rounded p-4 mt-5 cursor-auto'>
                    <p className='text-2xl text-brand'>Account Info</p>
                    <img src={BackArrow} className='rotate-180  text-gray-300' />
                </div>
            </div>
        </div>
    )
}

export default Profile