import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { VscAccount } from "react-icons/vsc";
import auth from '../../firebase.init';
import Loading from '../Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-between mx-20 mb-20'>
            <h2 className='text-3xl'>LOGO</h2>
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