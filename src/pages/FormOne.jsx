import React from 'react';
import Logo from "../assets/Logo.svg";
import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/dropdownComponent';
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
                <div className='flex flex-col gap-8 mx-6 justify-center relative'>
                    <Input placeholder="Full Name" />
                    <Input placeholder="Date of birth" type="date" />
                    <Dropdown ></Dropdown>
                    {/* <Input placeholder="Gender" /> */}
                    <Input placeholder="Address" />
                    <Input placeholder="NIN" type='number' />
                    <div className='flex mt-8'>
                    <Button className='w-32 absolute right-0' onClick={handleClick}>Next</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormOne
