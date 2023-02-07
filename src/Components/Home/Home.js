import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SlPeople } from "react-icons/sl";
import { MdOutlineManageSearch,MdLogout } from "react-icons/md";
import Header from './Header';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './style.css'

const Home = () => {
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <Header></Header>
            <div>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-side-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* <!-------------- Page content here -----------> */}
                        <div className='w-full h-full dashboard-default-content'>
                            {/* Outlet is the Part of Nested Routes */}
                            <Outlet></Outlet>

                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-side-drawer" className="drawer-overlay"></label>
                        <ul className="menu px-2 overflow-y-auto w-64 mt-12">
                            {/* <!--------- Sidebar content here -----------> */}
                            <li><Link to='/' className='mb-3 dashboard-btn'><SlPeople className='text-2xl'></SlPeople> <span>Add Student</span></Link></li>
                            <li><Link to='/manage' className='mb-3 dashboard-btn'><MdOutlineManageSearch className='text-2xl'></MdOutlineManageSearch> Manage Students</Link></li>
                            <li><button onClick={handleSignOut} className='mb-3 dashboard-btn'><MdLogout className='text-2xl'></MdLogout> <span>Logout</span></button></li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;