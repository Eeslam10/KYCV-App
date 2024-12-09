import React, { useState, PureComponent } from 'react';
import Notification from '../assets/notifications.svg';
import Menu from '../assets/menu.svg';
import HomeLogo from '../assets/homeLogo.svg';
import Profile from '../assets/profile.svg';
import Edu from '../assets/edu.svg';
import Setting from '../assets/setting.svg';
import CustomPieChart from '../components/CustomPieChart';
import GreenBarChart from '../components/GreenBarChart';
import StackedBarChart from '../components/StackedBarChart';
import TodayModal from '../components/TodayModal';
import WeekModal from '../components/TodayModal';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigateHome = useNavigate();
    const handleClickHome = () => {
        navigate('/home')
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/profile')
    }
    const navigateEducation = useNavigate();
    const handleClickEducation = () => {
        navigateEducation('/education')
    }

    const navigateSettings = useNavigate();
    const handleClickSettings = () => {
        navigateSettings('/settings')
    }

    const navigateNotification = useNavigate();
    const handleClickNotification = () => {
        navigateNotification('/notification')
    }
    const navigateLogout = useNavigate();
    const handleClickLogout = () => {
        navigateSettings('/')
    }

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [touchStart, setTouchStart] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!touchStart) return;

        const touchEnd = e.touches[0].clientX;
        const swipeDistance = touchStart - touchEnd;


        if (swipeDistance > 50) {
            setIsSidebarOpen(false);
        }
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            <header className="flex justify-between p-4">

                <img
                    src={Menu}
                    alt="Menu"
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                />
                <img src={Notification}
                 alt="Notification"
                 onClick={handleClickNotification}
                 className='cursor-pointer'
                 />
            </header>

            <aside
                className={`z-[1000] fixed top-0 left-0 h-full bg-gray-100 text-white w-[400px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } shadow-lg`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div className="text-brand flex flex-col mt-16 p-2 relative">
                    <div className="p-4 flex gap-2 items-center rounded-md hover:shadow-lg hover:bg-gray-100 transition-all " onClick={handleClickHome}>
                        <div className="p-2 rounded-full">
                            <img src={HomeLogo} />
                        </div>
                        <p className="text-brand font-semibold">Home</p>
                    </div>

                    <div className="p-4 flex gap-2 items-center rounded-md hover:shadow-lg hover:bg-gray-100 transition-all" onClick={handleClick}>
                        <div className="p-2 rounded-full">
                            <img src={Profile} />
                        </div>
                        <p className="text-brand font-semibold">Profile</p>
                    </div>

                    <div className="p-4 flex gap-2 items-center rounded-md hover:shadow-lg hover:bg-gray-100 transition-all" onClick={handleClickEducation}>
                        <div className="p-2 rounded-full">
                            <img src={Edu} />
                        </div>
                        <p className="text-brand font-semibold">Education</p>
                    </div>

                    <div className="p-4 flex gap-2 items-center rounded-md hover:shadow-lg hover:bg-gray-100 transition-all" onClick={handleClickSettings}>
                        <div className="p-2 rounded-full">
                            <img src={Setting} />
                        </div>
                        <p className="text-brand font-semibold">Settings</p>
                    </div>
                    <div className='rounded mt-[250px] flex justify-end p-8 w-[400px]'>
                        <button className='text-white bg-brand p-4 rounded' onClick={handleClickLogout}>Logout</button>
                    </div>
                </div>

            </aside>

            <div
                className={`transition-all duration-300 ${isSidebarOpen ? 'ml-[250px]' : ''
                    } p-4`}
            >
                <div className="mt-4">
                    <p className="text-2xl font-semibold text-brand">
                        Hi <span className="text-4xl font-semibold">Islam</span>
                    </p>
                </div>
                {/* <section className="shadow-lg h-[150px] flex justify-center items-center mt-6"> */}
                    <div>
                        {/* The clickable section */}
                        <section
                            className="shadow-lg h-[150px] flex justify-center items-center mt-6 cursor-pointer"
                            onClick={openModal}
                        >
                            <p className="text-3xl text-brand">Today's Activities</p>
                        </section>

                        {/* Use the Modal component */}
                        <TodayModal isOpen={isModalOpen} closeModal={closeModal} />
                    </div>
                {/* </section> */}

                <main className="flex flex-col mt-4 gap-1">
                    <section className="shadow-lg w-full p-2">
                        <div>
                            <p className="text-sm text-center text-brand">This Week's Performance</p>
                        </div>
                        <div className="w-full flex justify-center items-center mt-4">
                            <CustomPieChart percentage={18} />
                        </div>
                    </section>

                    <section className="shadow-lg w-full p-2 h-[270px]">
                        <div>
                            <p className="text-sm text-center text-brand">To Do List Check</p>
                        <div className="mt-4">
                            <GreenBarChart />
                        </div>
                        </div>
                    </section>
                </main>
                {/* <section className="shadow-lg h-[150px] flex justify-center items-center mt-6"> */}
                <div>
                        <section
                            className="shadow-lg h-[150px] flex justify-center items-center mt-6 cursor-pointer"
                            onClick={openModal}
                        >
                            <p className="text-3xl text-brand">Activities of the Week</p>
                        </section>
                        <WeekModal isOpen={isModalOpen} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default Home;
