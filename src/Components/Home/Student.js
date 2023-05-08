import React from 'react';
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Student = ({ student, refetch }) => {
    const { full_name, class_number, roll, pin_code } = student;
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure you want to delete thus item?');
        if (proceed) {
            fetch(`https://school-entry-server.onrender.com/student-delete?pincode=${pin_code}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Student has been deleted from database successfully");
                    refetch();
                })
        }
    }

    return (
        <tr>
            <td>{full_name}</td>
            <td>{class_number}</td>
            <td>{roll}</td>
            <td className='flex'>
                <Link to={`/view/${pin_code}`}><GrView className='text-xl mr-6'></GrView></Link>
                <Link to={`/edit/${pin_code}`}><AiOutlineEdit className='text-2xl mr-6'></AiOutlineEdit></Link>
                <button onClick={handleDelete}> <RiDeleteBin6Line className='text-2xl mr-6'></RiDeleteBin6Line></button>
            </td>
        </tr>
    );
};

export default Student;