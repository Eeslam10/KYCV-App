import React from 'react'
import BackArrow from '../assets/backArrow.svg'
import { useNavigate } from 'react-router-dom'

const ApplicationReview = () => {

  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className='p-4'>
      <div className=''>
        <button onClick={handleGoBack}>
          <img src={BackArrow} className='w-8' />
        </button>
      </div>
        <p className='text-brand text-xl font-semibold text-center mt-8'>Your Application is under review</p>
        <p className='text-center text-gray-400 mt-4 px-4'>You created an application on 30th November. We'll review and get back to you via SMS in 30 days in shaa Allah</p>
    </div>
  )
}

export default ApplicationReview