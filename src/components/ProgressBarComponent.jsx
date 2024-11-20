import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const ProgressBarComponent = ({ completed }) => {
  const milestones = [0, 31, 67, 100];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <ProgressBar 
        completed={completed} 
        bgColor="#098717"
        baseBgColor="#e0e0e0"
        height="12px"
        isLabelVisible={false}
        borderRadius="4px"
      />

     
      {milestones.map((milestone, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: '50%',
            left: `${milestone}%`,
            transform: 'translate(-50%, -50%)',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            backgroundColor: milestone <= completed ? '#098717' : '#e0e0e0',
            border: 'none',  // Optional: adds a border for contrast
            zIndex: 1,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBarComponent;
