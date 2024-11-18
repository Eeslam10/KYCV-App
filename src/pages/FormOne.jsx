import React from 'react';
import Logo from "../assets/Logo.svg";
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';

const FormOne = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/formTwo');
    };

    return (
        <>
            <div className='flex justify-center mt-8 '>
                <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
            </div>

            <div className="mt-6 mx-6">
                <ProgressBar completed={0} />
            </div>


            <form action="" className='mt-10 '>
                <div className='flex flex-col gap-8 mx-6 justify-cente'>
                    <Input placeholder="Enter your full name" />
                    <Input placeholder="Enter your student ID" type="number" />
                    <Input placeholder="Enter your age" type="number" />
                    <Input placeholder="Enter your gender" />
                    <Button onClick={handleClick}>Continue</Button>
                </div>
            </form>
        </>
    )
}

export default FormOne
