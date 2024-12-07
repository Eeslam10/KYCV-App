import React, { useState } from 'react';
import BackArrow from '../assets/backArrow.svg';
import { useNavigate } from 'react-router-dom';

const AdmissionStatus = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [program, setProgram] = useState('');

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCheck = () => {
    navigate('/applicationResult');
  };

  const isValid = studentId.trim() !== '' && program.trim() !== '';

  return (
    <div className='p-4'>
    
      <div>
        <button onClick={handleGoBack}>
          <img src={BackArrow} className='w-8' alt="Back" />
        </button>
      </div>

      <div className='mt-8'>
        <p className='text-brand text-2xl text-center font-semibold mb-10'>Admission Status</p>
      </div>

      {/* Input Fields */}
      <div className='flex flex-col items-center space-y-4'>
        {/* Student ID Input */}
        <input
          type='text'
          placeholder='Enter Student ID'
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"'
        />

        {/* Program Dropdown */}
        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className='p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"'
        >
         <option value="" disabled>
              Desired Program
            </option>
            <option value="tailoring">Tailoring</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Welding">Welding</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Welding">Welding</option>
        </select>

        <div className='flex justify-end'>
        <button
          onClick={handleCheck}
          disabled={!isValid}
          className={`${isValid ? 'bg-brand text-white' : 'bg-gray-300 text-black'} w-36 p-3 rounded-md text-xl font-medium`}
        >
          Check
        </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionStatus;
