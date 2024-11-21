import React from 'react';

const Input = ({ placeholder, type = 'text', value, onChange, className }) => {
    return (
        <input
            required
            type={type}
            placeholder={placeholder}  
            value={value}
            onChange={onChange}
            className={`p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow  ${className}`}
        />
    );
};

export default Input;
