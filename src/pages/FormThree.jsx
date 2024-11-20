import React from 'react'
import Logo from "../assets/Logo.svg"
import Button from '../components/Button'
// import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBarComponent';
import Input from '../components/Input';


const FormThree = () => {

    //     const navigate = useNavigate();

    //     const handleClick = () => {
    //     navigate('/formThree'); 
    //   };

    return (
        <>
            <div className='flex justify-center mt-8'>
                <img src={Logo} className='h-[50px] w-[150px]' alt="Logo" />
            </div>

            <div className="mt-6 mx-6">
                <ProgressBar completed={100} />
            </div>

            <form action="" className='mt-10 '>
                <div className='flex flex-col gap-8 mx-6 justify-center relative'>
                    <Input placeholder="NIN" type='number' />
                    <Input placeholder="Address" />
                    <Input placeholder="Disability" />
                    <Input placeholder="Health status" />
                    <div className='flex mt-8'>
                        <Button className='w-32 absolute right-0' onClick={handleClick}>Next</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormThree
