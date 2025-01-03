import React from 'react'

const Button = ({ children, onClick, className = '', ...props }) => {
    return (
        <button
          {...props}
          onClick={onClick}
          className={`p-4 bg-brand text-white  rounded-md cursor-pointer text-xl ${className}`}>
          {children}
        </button>
      );
}

export default Button