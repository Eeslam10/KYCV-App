import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from "../assets/Logo.svg";
import PinInput from 'react-pin-input';
import VerifiedModal from '../components/VerifiedModal';

const Verification = () => {
  const [error, setError] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // State for modal visibility
  const [codeCorrect, setCodeCorrect] = useState(false); // State for code correctness
  const correctCode = "1234"; // Default correct code
  const navigate = useNavigate(); // React Router's navigation hook

  const handleComplete = (value) => {
    if (value === correctCode) {
      setError(false);
      setCodeCorrect(true); // Set code as correct
    } else {
      setError(true);
      setCodeCorrect(false);
    }
  };

  const handleConfirmClick = () => {
    if (codeCorrect) {
      setIsVerified(true); // Show the modal if the code is correct
    } else {
      setError(true); // Show error message if code is incorrect
    }
  };

  useEffect(() => {
    let timer;
    if (isVerified) {
      timer = setTimeout(() => {
        setIsVerified(false); // Hide the modal
        navigate('/formOne'); // Navigate to form1 after the modal disappears
      }, 1000); // 1-second delay before closing the modal and navigating
    }
    return () => clearTimeout(timer); // Clean up the timeout
  }, [isVerified, navigate]);

  return (
    <>
      <div className='flex justify-center mt-16'>
        <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
      </div>
      <div className='flex flex-col justify-center gap-6 mx-6'>
        <p className='text-brand text-xl text-center mt-10 font-bold'>Verify your Phone No</p>
        <p className='text-brand text-xl text-center mb-8'>Please enter the code sent to ********07</p>
        <div className='flex justify-center'>
          <PinInput
            length={4}
            initialValue=""
            secret
            secretDelay={100}
            inputStyle={{ margin: '14px', backgroundColor: "#00000011", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "4px", border: 'none' }}
            onChange={(value, index) => { }}
            type="numeric"
            inputMode="number"
            style={{
              padding: '16px',
              display: 'flex',
              gap: '15px'
            }}
            inputFocusStyle={{ borderColor: 'blue' }}
            onComplete={handleComplete} // Validate the code only on completion
            autoSelect={true}
          />
        </div>
        {error && (
          <p className='text-red-500 text-center mt-4'>The code you entered is incorrect</p>
        )}
        <Button onClick={handleConfirmClick}>Confirm OTP</Button>
      </div>

      {/* Verified Modal */}
      {isVerified && <VerifiedModal isVisible={isVerified} />}
    </>
  );
};

export default Verification;
