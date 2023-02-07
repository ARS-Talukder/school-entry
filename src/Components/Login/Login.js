import React from 'react';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';
import './Login.css';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname;

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }


    let signInError;

    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);


    }
    return (
        <div className='w-full h-screen flex justify-center items-center py-8 px-4'>
            <div className="w-1/4 signing-transparent">
                <h2 className="text-center font-bold underline">School Entry</h2>
                <div className='flex justify-center'>
                    <form onSubmit={handleSignIn} className='w-4/5 mt-6' action="">
                        {/* ------------Email Field------------- */}
                        <input type="email" name="email" placeholder="Enter Email" className="w-full max-w-xs signing-input" required />

                        {/* ------------Password Field------------- */}
                        <input type="password" name="password" placeholder="Enter Password" className="w-full max-w-xs mt-8 mb-2 signing-input" required />

                        {signInError}

                        {/* ------------Submit Button------------- */}
                        <input className='btn w-full max-w-xs mt-4 submit-button' type="submit" value="Login" />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;