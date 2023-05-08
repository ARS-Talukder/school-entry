import React from 'react';
import useDate from '../hooks/useDate';
import './style.css';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import Student from './Student';
import DashboardButton from './DashboardButton';

const ManageStudent = () => {
    const [date, time] = useDate();
    const { data: students, isLoading: studentLoading, refetch } = useQuery('allstudent', () => fetch('http://localhost:5000/students').then(res => res.json()));

    if (studentLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-4'>
            <DashboardButton></DashboardButton>
            <section className='flex justify-between mr-12'>
                <p className='font-bold'>Manage Students</p>
                <p>{date} {time}</p>
            </section>
            <section className="overflow-x-auto mt-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='table-style'>Name</th>
                            <th className='table-style'>Class</th>
                            <th className='table-style'>Roll No.</th>
                            <th className='table-style'>View / Edit / Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map(student => <Student key={student._id} student={student} refetch={refetch}></Student>)
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ManageStudent;