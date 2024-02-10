import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../assets/background.jpg'
const UserDetails = () => {
    const [user, setUser] = useState();
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user)
    return (
        <div className='container mx-auto px-4'>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }} className='flex items-center justify-center mb-20 text-center w-full h-[50vh]'>
                <h1 className='bg-[#0000003a] text-white border-white border  rounded-lg w-5/6 md:w-1/2 px-14 py-10 '> User Name <br /> <span className='text-5xl md:text-7xl font-bold'>{user?.firstName} {user?.lastName}</span></h1>
            </div>

            <div className="card card-side bg-base-100 shadow-xl my-20">
                <figure><img className='object-contain' src={user?.image} alt="Movie" /></figure>
                <div className="card-body ml-5">
                 <div className='grid md:grid-cols-3 gap-6'>
                    <div className=''>
                        <h3 className='text-lg font-semibold text-orange-800 md:mb-5'>User Info :</h3>
                        <p className='font-semibold'>Name: {user?.firstName} {user?.lastName}</p>
                        <p>Email: {user?.email}</p>
                        
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-orange-800 md:mb-5'>User Address :</h3>
                        <p>Address: {user?.address?.address}</p>
                        <p>City: {user?.address?.city}</p>

                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-orange-800 md:mb-5'>User Company :</h3>
                        <p>Company Name: {user?.company?.name}</p>
                        <p>Department: {user?.company?.department}</p>
                        <p>Title: {user?.company?.title}</p>
                    </div>
                    
                 </div>
                   
                </div>
            </div>

        </div>
    );
};

export default UserDetails;