import React from 'react';
import useDate from '../hooks/useDate';
import './style.css';
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageStudent = () => {
    const [date, time] = useDate();
    return (
        <div className='mx-4'>
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
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td className='flex'>
                                <button><GrView className='text-xl mr-6'></GrView></button>
                                <button><AiOutlineEdit className='text-2xl mr-6'></AiOutlineEdit></button>
                               <button> <RiDeleteBin6Line className='text-2xl mr-6'></RiDeleteBin6Line></button>
                            </td>
                        </tr>

                        <tr>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td>Purple</td>
                        </tr>

                        <tr>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ManageStudent;