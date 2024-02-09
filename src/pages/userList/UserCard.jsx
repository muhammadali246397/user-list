import React from 'react';

const UserCard = ({user}) => {
    console.log(user)
    const {firstName, lastName, image, email,address,company} = user;
    console.log(user.image)
    return (
        <div className=''>
            <div className='md: h-[400px] bg-slate-50 border rounded-lg text-center shadow-xl hover:shadow-2xl'>
                <div className='w-full bg-[#8bdaff] h-[35%] relative rounded-md'>
                    <div className=' absolute -bottom-14 left-1/3 right-1/3'>
                        <img className='w-[120px] h-[120px] mx-auto object-cover rounded-full border-2 border-orange-800 p-2' src={image} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold mt-16 text-2xl'>{firstName} { lastName}</h3>
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