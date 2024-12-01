import React from 'react';
import Logo from "../assets/Logo.svg";
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormThree = () => {
    const navigate = useNavigate();

    const initialValues = {
        bank: '',
        bvn: '',
        accNum: '',
    };

    const validationSchema = Yup.object().shape({
        bank: Yup.string().required('Enter Your Bank Name!'),
        bvn: Yup.string()
            .required('Enter Your BVN!')
            .matches(/^\d{11}$/, 'BVN must be 11 digits'),
        accNum: Yup.string()
            .required('Enter Your Account Number!')
            .matches(/^\d{10}$/, 'Account number must be 10 digits'),
    });

    return (
        <>
            <div className="flex justify-center mt-20">
                <img src={Logo} className="h-[50px] w-[150px]" alt="Logo" />
            </div>

            <div className="mt-10 mx-6">
                <ProgressBar completed={67} />
            </div>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        navigate('/formFour'); // Navigate only when form is valid
                    }}
                >
                    {({ isValid, handleSubmit }) => (
                        <form className="flex flex-col gap-6 mt-10" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-1 mx-6 justify-center relative">
                                <Field
                                    placeholder="Bank Name"
                                    className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                                    type="text"
                                    name="bank"
                                />
                                <div className="text-sm">
                                    <ErrorMessage name="bank" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 mx-6 justify-center relative">
                                <Field
                                    placeholder="BVN"
                                    className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                                    type="number"
                                    name="bvn"
                                />
                                <div className="text-sm">
                                    <ErrorMessage name="bvn" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 mx-6 justify-center relative">
                                <Field
                                    placeholder="Account Number"
                                    className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow"
                                    type="number"
                                    name="accNum"
                                />
                                <div className="text-sm">
                                    <ErrorMessage name="accNum" component="div" className="text-red-500" />
                                </div>
                            </div>
                            <div className="flex items-end justify-end">
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className={`${!isValid ? "bg-gray-300" : "bg-brand"} w-32 mr-6 p-3 text-white rounded-md cursor-pointer text-xl`}
                                >
                                    <span className={`${!isValid ? "text-black" : "text-white"}`}>
                                        Next
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default FormThree;
