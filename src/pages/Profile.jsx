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
  return (
    <div className='p-4'>
        <div className=''>
        <button onClick={handleGoBack}>
            <img src={BackArrow} className='w-8 '/>
        </button>
        </div>

        <div className='relative bg-gray-100 w-full h-[300px] rounded-lg shadow-lg mt-10'>
            <div className='absolute right-0 p-2 mt-2'>
                <img src={EditButton} className='w-7'/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={ProfileIcon} className='mt-6'/>
                <p className='text-2xl text-brand'>HJNHV</p>
            </div>
            <div className='flex flex-col mt-4'>
                <input type="text" className='border-b bg-gray-100' placeholder='Change Name'/>
            </div>
        </div>
    </div>
  )
}

export default Profile