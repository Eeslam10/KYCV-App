import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';

const FormFour = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        bloodGroup: '',
        genotype: '',
        disability: '',
    });

    const isFormValid = () => {
        const { bloodGroup, genotype, disability } = formValues;
        return bloodGroup && genotype && disability;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            navigate('/home');
        } else {
            alert('Please fill in all fields before proceeding.');
        }
    };

    const options = {
        bloodGroup: [
            { value: 'AA', label: 'AA' },
            { value: 'A-Positive', label: 'A-Positive' },
            { value: 'O-Positive', label: 'O-Positive' },
            { value: 'O-Negative', label: 'O-Negative' },
        ],
        genotype: [
            { value: 'AA', label: 'AA' },
            { value: 'AS', label: 'AS' },
            { value: 'SS', label: 'SS' },
        ],
        disability: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
        ],
    };

    return (
        <>
            <div className="flex justify-center mt-20">
                <img src={Logo} className="h-[50px] w-[150px]" alt="Logo" />
            </div>

            <div className="mt-10 mx-6">
                <ProgressBar completed={100} />
            </div>

            <form className="flex flex-col gap-6 mt-10 mx-6" onSubmit={handleSubmit}>
                {Object.keys(options).map((field) => (
                    <div className="flex flex-col gap-1" key={field}>
                        <select
                            id={field}
                            name={field}
                            value={formValues[field]}
                            onChange={handleChange}
                            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                        >
                            <option value="" disabled>
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </option>
                            {options[field].map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                <div className="flex items-end justify-end">
                    <button
                        type="submit"
                        disabled={!isFormValid()}
                        className={`${
                            !isFormValid() ? 'bg-gray-300' : 'bg-brand'
                        } w-32 mr-6 p-3 text-white rounded-md cursor-pointer text-xl`}
                    >
                        <span className={`${!isFormValid() ? 'text-black' : 'text-white'}`}>
                            Next
                        </span>
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormFour;
