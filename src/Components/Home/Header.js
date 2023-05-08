import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { VscAccount } from "react-icons/vsc";
import auth from '../../firebase.init';
import Loading from '../Loading';
import logo from '../../school.png';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-between items-center mx-20 mb-8'>
            <div className='w-32'>
                <img src={logo} alt="logo" />
            </div>
            <div className='w-80 h-12 p-3 border flex justify-center items-center'>
                <div className='flex'>
                    <VscAccount className='text-2xl'></VscAccount>
                    <p className='ml-3'>{user?.email}</p>
                </div>
            </div>

        </div>
    );
};

export default Header;