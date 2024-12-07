import React from 'react'
import BackArrow from '../assets/backArrow.svg'
import BigNotification from '../assets/BigNotification.svg'
import { useNavigate } from 'react-router-dom'

const Notification = () => {

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
            </div>
            <p className='text-brand text-3xl mt-7 text-center'>Notifications</p>
            <div className='w-full flex flex-col items-center gap-4 mt-32'>
                <img src={BigNotification} className='w-32'/>
                <p className='text-brand text-xl'>No notification yet</p>
            </div>
        </div>
    )
}

export default Notification;