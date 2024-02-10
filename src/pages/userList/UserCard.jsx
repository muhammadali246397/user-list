import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {

    const {firstName, lastName, id, image, email,address,company} = user;

    return (
        <div className=''>
            <div className='md: h-[400px] bg-slate-50 border rounded-lg text-center shadow-xl hover:shadow-2xl'>
                <div className='w-full bg-[#8bdaff] h-[35%] relative rounded-md'>
                    <div className=' absolute -bottom-14 left-1/3 right-1/3'>
                        <img className='w-[120px] h-[120px] mx-auto object-cover rounded-full border-2 border-orange-800 p-2' src={image} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold mt-16 hover:text-orange-700 transition-all focus:text-orange-700 text-2xl'><Link to={`/users/${id}`} >{firstName} {lastName}</Link></h3>
                    <p>{email}</p>
                    <p className='font-semibold'>Adress</p>
                    <p>{address?.address}</p>
                    <p className='font-semibold'>Company</p>
                    <p>{company?.name}</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default UserCard;