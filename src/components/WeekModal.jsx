import React, { useEffect } from 'react';

const WeekModal = ({ isOpen, closeModal }) => {
  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    
    <div
      id="modal-overlay"
      className="fixed inset-0 flex justify-center items-center  bg-opacity-50 z-50"
    >
        <div className=''>

      <div className="bg-white p-4 w-[380px] h-[200px] rounded-lg shadow-lg">
        <p className="text-lg mb-4">
         Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="text-xl mb-4">
         Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="text-xl mb-4">
         Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
        </div>
    </div>
  );
};

export default WeekModal;
