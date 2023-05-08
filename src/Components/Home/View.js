import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

const View = () => {
    const { data: specificStudent, isLoading: specificStudentLoading } = useQuery('specificStudent', () => fetch(`http://localhost:5000/student?pincode=${pincode}`).then(res => res.json()));
    console.log(specificStudent)

    const { pincode } = useParams();

    if (specificStudentLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='py-8 mx-16 h-screen'>
            <h3 className='text-center text-xl font-bold underline text-red-500'>All The Information</h3>
            <form className='my-4'>
                <div className='mb-5'>
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.first_name} disabled />
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.middle_name} disabled />
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.last_name} disabled />
                </div>

                <div className='mb-16'>
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.class_number} disabled />

                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.division} disabled />

                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.roll} disabled />
                </div>

                <div className='mb-5'>
                    <input style={{ "width": "47%" }} className='h-10 border rounded mr-6 pl-4' type="text" value={specificStudent.address1} disabled />
                    <input style={{ "width": "47%" }} className='h-10 border rounded pl-4' type="text" value={specificStudent.address2} disabled />

                </div>

                <div className='mb-8'>
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.landmark} disabled />
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.city} disabled />
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" value={specificStudent.pin_code} disabled />
                </div>

            </form>
        </div>
    );
};

export default View;