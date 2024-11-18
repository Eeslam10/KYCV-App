import React from 'react';

const Input = ({ placeholder, type = 'text', value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}  // Placeholder prop
            value={value}
            onChange={onChange}
            className={`p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand placeholder:text-xl ${className}`}
        />
    );
};

export default Input;
