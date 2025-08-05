import React, { useState } from 'react'
import { createEmployee } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom';


const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee)

            createEmployee(employee).then((response) => {
                console.log(response.data)
                navigator('/employees')
            })
        }
    }


    function validateForm() {
        let valid = true;

        const errorCopy = { ...errors }
        if (firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = 'First Name required';
            valid = false;
        }

        if (lastName.trim()) {
            errorCopy.lastName = '';
        } else {
            errorCopy.lastName = 'Last Name required';
            valid = false;
        }

        if (email.trim()) {
            errorCopy.email = '';
        } else {
            errorCopy.email = 'Email required';
            valid = false;
        }
        setErrors(errorCopy);
        return valid;
    }
    return (
        <div>
            <div className="container">
                <br /> <br />
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="from-group mb-2">
                                    <label className="form-label">First Name : </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee First Name'
                                        name='firstName'
                                        className='form-control'
                                        onChange={(e) => setFirstName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="from-group mb-2">
                                    <label className="form-label">Last Name : </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee Last Name'
                                        name='lastName'
                                        className='form-control'
                                        onChange={(e) => setLastName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="from-group mb-2">
                                    <label className="form-label">Email : </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Emloyee Email'
                                        name='email'
                                        className='form-control'
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent