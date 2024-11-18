import React from 'react'
import Logo from "../assets/Logo.svg"
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/verification'); 
  };

  return (
    <>
     <div className='flex justify-center mt-16'>
      <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
      </div>
      <div className='flex flex-col gap-4 mx-6 justify-cente'>
       <p className='text-brand text-center text-2xl mt-10'>Login to your account</p> 
        <input type="number" placeholder='Phone No' className='border border-gray-300 p-2 rounded w-full text-brand' />
        <Button onClick={handleClick}>Send OTP</Button>
      </div>
    </>
  )
}

export default Login
