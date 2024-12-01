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

    const isFormValid = () =>
        formValues.bloodGroup && formValues.genotype && formValues.disability;

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
            alert('Please fill in all the fields before proceeding.');
        }
    };

    return (
        <>
            <div className="flex justify-center mt-20">
                <img src={Logo} className="h-[50px] w-[150px]" alt="Logo" />
            </div>

            <div className="mt-10 mx-6">
                <ProgressBar completed={100} />
            </div>

            <div>
                <form className="flex flex-col gap-6 mt-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1 mx-6 justify-center">
                        <select
                            id="bloodGroup"
                            name="bloodGroup"
                            value={formValues.bloodGroup}
                            onChange={handleChange}
                            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                        >
                            <option value="" disabled>
                                Blood Group
                            </option>
                            <option value="AA">AA</option>
                            <option value="AA">A-Positive</option>
                            <option value="O-Positive">O-Positive</option>
                            <option value="O-Negative">O-Negative</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 mx-6 justify-center">
                        <select
                            id="genotype"
                            name="genotype"
                            value={formValues.genotype}
                            onChange={handleChange}
                            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                        >
                            <option value="" disabled>
                                Genotype
                            </option>
                            <option value="AA">AA</option>
                            <option value="AS">AS</option>
                            <option value="SS">SS</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 mx-6 justify-center">
                        <select
                            id="disability"
                            name="disability"
                            value={formValues.disability}
                            onChange={handleChange}
                            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                        >
                            <option value="" disabled>
                                Disability
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="flex items-end justify-end">
                        <button
                            type="submit"
                            disabled={!isFormValid()}
                            className={`${!isFormValid() ? "bg-gray-300" : "bg-brand"} w-32 mr-6 p-3 text-white rounded-md cursor-pointer text-xl`}
                        >
                            <span className={`${!isFormValid() ? "text-black" : "text-white"}`}>
                                Next
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormFour;
