import React from 'react'

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
          onClick={onClick}
          className={`px-4 py-4 bg-brand text-white rounded-md w-full cursor-pointer text-xl ${className}`}>
          {children}
        </button>
      );
}

export default Button