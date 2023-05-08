import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const Edit = () => {
    const { data: specificStudent, isLoading: specificStudentLoading } = useQuery('specificStudent', () => fetch(`https://school-entry-server.onrender.com/student?pincode=${pincode}`).then(res => res.json()));
    const navigate = useNavigate();

    const { pincode } = useParams();

    if (specificStudentLoading) {
        return <Loading></Loading>
    }
    const handleEditStudent = e => {
        e.preventDefault();
        const first_name = e.target.first.value;
        const middle_name = e.target.middle.value;
        const last_name = e.target.last.value;
        const full_name = first_name + ' ' + middle_name + ' ' + last_name;
        const class_number = e.target.class_number.value;
        const division = e.target.division.value;
        const roll = e.target.roll.value;
        const address1 = e.target.address1.value;
        const address2 = e.target.address2.value;
        const landmark = e.target.landmark.value;
        const city = e.target.city.value;
        const student = { first_name, middle_name, last_name, full_name, class_number, division, roll, address1, address2, landmark, city };
        console.log(student)

        fetch(`https://school-entry-server.onrender.com/student-update?pincode=${pincode}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success(`${full_name} added successfully`);
            navigate('/manage')
        })


    }
    return (
        <div className='my-12 mx-16'>
            <h3 className='text-center text-xl font-bold underline text-red-500'>Edit Information</h3>
            <form className='my-4' onSubmit={handleEditStudent}>
                <div className=''>
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='first' placeholder='First Name' value={specificStudent.first} required />
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='middle' placeholder='Middle Name' required />
                    <input style={{ "width": "31%" }} className='h-10 border rounded pl-4' type="text" name='last' placeholder='Last Name' required />
                </div>

                <div className='mb-16'>
                    <select defaultValue={'Default'} style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' name="class_number">
                        <option value="Default" disabled>Select Class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

                    <select defaultValue={'Default'} style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' name="division">
                        <option value="Default" disabled>Select Division</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>

                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name="roll" placeholder='Enter Roll Number in Digits' maxLength="2" required />
                </div>

                <div className='mb-5'>
                    <input style={{ "width": "47%" }} className='h-10 border rounded mr-6 pl-4' type="text" name='address1' placeholder='Address Line 1' required />
                    <input style={{ "width": "47%" }} className='h-10 border rounded pl-4' type="text" name='address2' placeholder='Address Line 2' required />

                </div>

                <div className='mb-8'>
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='landmark' placeholder='Landmark' required />
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='city' placeholder='City' required />
                    <input style={{ "width": "31%" }} className='h-10 border rounded pl-4' type="text" value={specificStudent.pin_code} disabled />
                </div>

                <div>
                    <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4 submit-btn' type="submit" value="Edit Information" />
                </div>

            </form>
        </div>
    );
};

export default Edit;