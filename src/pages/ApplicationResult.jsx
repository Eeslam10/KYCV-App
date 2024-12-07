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
      <p className='text-brand text-xl font-semibold text-center'>Application Result</p>
    </div>       
    </div>
  )
}

export default ApplicationResult