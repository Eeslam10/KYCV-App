// VerifiedModal.js
import React from 'react';
import Verified from "../assets/verified.svg";


const VerifiedModal = ({ isVisible}) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
        <div className='flex justify-center items-center  p-8'>
        <img src={Verified} className='h-[150px] w-[150px]' alt="Logo" />
        </div>
        <h2 className='text-3xl text-brand'>Verified!</h2>
        <p className='my-6 text-brand'>You have successfully verified the account!</p>
      </div>
    </div>
  );
};

export default VerifiedModal;
