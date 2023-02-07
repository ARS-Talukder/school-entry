import React from 'react';
import useDate from '../hooks/useDate';
import './style.css';

const AddStudent = () => {
    const [date, time] = useDate();

    return (
        <div className='ml-4'>
            <section className='flex justify-between mr-12'>
                <p className='font-bold'>Add Student</p>
                <p>{date} {time}</p>
            </section>

            <section className='mt-6'>
                <form action="">
                    <div className='mb-5'>
                        <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='first' placeholder='First Name' required />
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

                        <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="number" name="roll" placeholder='Enter Roll Number in Digits' required />
                    </div>

                    <div className='mb-5'>
                        <input style={{ "width": "47%" }} className='h-10 border rounded mr-6 pl-4' type="text" name='address1' placeholder='Address Line 1' required />
                        <input style={{ "width": "47%" }} className='h-10 border rounded pl-4' type="text" name='address2' placeholder='Address Line 2' required />

                    </div>

                    <div className='mb-8'>
                        <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='landmark' placeholder='Landmark' required />
                        <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4' type="text" name='city' placeholder='City' required />
                        <input style={{ "width": "31%" }} className='h-10 border rounded pl-4' type="text" name='pincode' placeholder='Pincode' required />
                    </div>

                    <div>
                        <input style={{ "width": "31%" }} className='h-10 border rounded mr-4 pl-4 submit-btn' type="submit" value="Add Student" />
                    </div>

                </form>
            </section>
        </div>
    );
};

export default AddStudent;