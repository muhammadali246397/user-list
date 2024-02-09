import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState()
      useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.users))
      }
      
      ,[])
    return (
        <div className='container mx-auto px-4'>
            <div className=' flex justify-between md:justify-around border-b bg-[#f1f1f1] py-4'>
                <div>
                    <input className=' px-5 py-3 border rounded-md' type="text" placeholder='Sarch User' />
                    <button className='btn bg-[#0ea5e9] hover:bg-[#0284c7] focus:bg-[#0284c7] text-white md:ml-4'>Sarch</button>
                </div>
                <div>
                    <select className="select select-bordered">
                        <option disabled selected>Sort by</option>
                        <option>Sort by name</option>
                        <option>Sort by email</option>
                        <option>Sort by company</option>
                     
                    </select>
                </div>
            </div>
            <div className='my-10 pb-10'>
                <h1 className='text-6xl text-center font-bold'><span className='border-b-4 border-[#0ea5e9]'>All users</span></h1>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                users?.map((user,index) => <UserCard
                key={index}
                user={user}
                ></UserCard>)
               }
            </div>
        </div>
    );
};

export default UserList;