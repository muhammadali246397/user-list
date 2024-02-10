import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import UserForm from '../userForm/UserForm';

const UserList = () => {
    const [users, setUsers] = useState([])
    const [searchUser, setSearchUser] = useState('');
    const [sortUser, setSortUser] = useState('name')
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }

    , [])

    const filteredUsers = users?.filter(user =>
        user.firstName.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchUser.toLowerCase())
    );

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        switch (sortUser) {
            case 'name':
                return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
            case 'email':
                return a.email.localeCompare(b.email);
            case 'company':
                return a.company.name.localeCompare(b.company.name);
            default:
                return 0;
        }
    });

    return (
        <div className='container mx-auto px-4'>
            <div className=' flex justify-between md:justify-around border-b bg-[#f1f1f1] py-4'>
                <div>
                    <input value={searchUser}
                        onChange={(e) => setSearchUser(e.target.value)}
                        className=' px-5 py-3 border rounded-md'
                        type="text"
                        placeholder='Sarch By Name'
                    />
                </div>
                <div>
                    <select className="select select-bordered" onChange={(e) => setSortUser(e.target.value)}>
                        <option value="name">Sort by name</option>
                        <option value="email">Sort by email</option>
                        <option value="company">Sort by company</option>

                    </select>
                </div>
            </div>
            <div className='my-10 pb-10'>
                <h1 className='text-6xl text-center font-bold'><span className='border-b-4 border-[#0ea5e9]'>All users</span></h1>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    sortedUsers?.map((user, index) => <UserCard
                        key={index}
                        user={user}
                    ></UserCard>)
                }
            </div>
            <div className='py-10'>
                <UserForm></UserForm>
            </div>
        </div>
    );
};

export default UserList;