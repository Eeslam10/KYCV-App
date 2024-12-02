import React, { useState } from 'react';
import BackArrow from '../assets/backArrow.svg'
import { useNavigate } from 'react-router-dom';

const FormPage = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  // const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    fullName: '',
    gender: '',
    studentId: '',
    desiredProgram: '',
    document: null,
  });

  const isFormValid = () => {
    const { fullName, gender, studentId, desiredProgram, document } = formValues;
    return fullName && gender && studentId && desiredProgram && document;
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      alert('Form submitted successfully!');
      navigate('/home');
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (

    <div className='p-4'>
      <div className=''>
        <button onClick={handleGoBack}>
          <img src={BackArrow} className='w-8' />
        </button>
      </div>

      <div className='mt-8'>
        <p className='text-brand text-2xl text-center font-semibold mb-10'>Course Registration Form</p>
      </div>

      <form className="flex flex-col gap-6 mt-10 mx-6" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
          />
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="studentId"
            value={formValues.studentId}
            onChange={handleChange}
            placeholder="Student ID"
            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
          />
        </div>


        <div className="flex flex-col gap-1">
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      


        <div className="flex flex-col gap-1">
          <select
            id="gender"
            name="gender"
            value={formValues.desiredProgram}
            onChange={handleChange}
            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
          >
            <option value="" disabled>
              Desired Program
            </option>
            <option value="Male">Tailoring</option>
            <option value="Female">Mechanic</option>
            <option value="Other">Welding</option>
            <option value="Other">Carpentry</option>
            <option value="Other">Welding</option>
          </select>
        </div>


        <div className="flex flex-col gap-1">
          <label htmlFor="document" className="text-brand font-medium">
            Upload Document
          </label>
          <input
            type="file"
            id="document"
            name="document"
            onChange={handleChange}
            className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
          />
        </div>


        <div className="flex items-end justify-end">
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`${!isFormValid() ? 'bg-gray-300' : 'bg-brand'
              } w-32  p-3 text-white rounded-md cursor-pointer text-xl`}
          >
            <span className={`${!isFormValid() ? 'text-black' : 'text-white'}`}>
              Submit
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
