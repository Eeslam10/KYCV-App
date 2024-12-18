import React from 'react';
import BackArrow from '../assets/backArrow.svg';
import { useNavigate } from 'react-router-dom';

const Settings = ({ toggleDarkMode, darkMode }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="flex items-center">
        <button onClick={handleGoBack}>
          <img src={BackArrow} className="w-8 dark:invert" alt="Back" />
        </button>
      </div>
      <p className="text-4xl">Settings</p>
      <div className="mt-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded"
        >
          Toggle Dark Mode: {darkMode ? 'On' : 'Off'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
