import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [user, setUser] = useState('')
    console.log(user)
      useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
      }
      
      ,[])
    return (
        <div className='container mx-auto'>
            <div className=' flex justify-around border-b bg-[#f1f1f1] py-4'>
                <div>
                    <input className='max-w-xs px-5 py-3 border rounded-md' type="text" placeholder='Sarch User' />
                    <button className='btn bg-[#0ea5e9] hover:bg-[#0284c7] focus:bg-[#0284c7] text-white ml-4'>Sarch</button>
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
            <div className='mt-10'>
                <h1 className='text-6xl text-center font-bold'><span className='border-b-4 border-[#0ea5e9]'>Our all users</span></h1>

            </div>
        </div>
    );
};

export default UserList;