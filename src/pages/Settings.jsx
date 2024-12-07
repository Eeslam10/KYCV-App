import React from 'react';
import BackArrow from '../assets/backArrow.svg'
import { useNavigate } from 'react-router-dom'

const Settings = ({ toggleDarkMode, darkMode }) => {

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4">
      <div className=''>
        <button onClick={handleGoBack}>
          <img src={BackArrow} className='w-8' />
        </button>
      </div>
      <p className="text-4xl">Settings</p>
      <button
        onClick={toggleDarkMode}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Settings;
