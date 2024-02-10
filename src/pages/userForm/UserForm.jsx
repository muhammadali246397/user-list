import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            street: '',
            suite: '',
            city: '',
            companyName: '',
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            street: '',
            suite: '',
            city: '',
            companyName: '',
        });
        fetch('https://dummyjson.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error adding user');
                }
                return response.json();
            })
            .then(data => {
                console.log('User added successfully:', data);
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });

    };

    return (
        <div>
            <div className=" my-20 bg-base-200">
                <div className="">
                    <h1 className='text-6xl py-10 text-center font-bold'><span className='border-b-4 border-[#0ea5e9]'>Add Users</span></h1>
                    <div className=" w-3/5 mx-auto shadow-2xl py-10 bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name:</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName} onChange={handleChange}
                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name :</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName} onChange={handleChange}
                                        required
                                        className="input input-bordered" />

                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email :</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email} onChange={handleChange}
                                        required
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Street :</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="street"
                                        value={formData.street} onChange={handleChange}
                                        required
                                        className="input input-bordered" />

                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">City :</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city} onChange={handleChange}
                                        required
                                        className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Suite :</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="suite"
                                        value={formData.suite} onChange={handleChange}
                                        required
                                        className="input input-bordered" />

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name :</span>
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName} onChange={handleChange}
                                    required
                                    className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add user</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;