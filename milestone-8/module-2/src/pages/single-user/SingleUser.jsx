import React from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

const SingleUser = () => {
    const user = useLoaderData();
    const { name, username, email, address, phone, website, company } = user;
    return (
        <div className='max-w-screen-xl mx-auto   bg-blue-400 ' >
            <div className='flex flex-col h-[80vh] items-center justify-center  ' >
                <h1 className='text-gray-50' >{name}</h1>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Company: {company.name}, {company.catchPhrase}, {company.bs}</p>
            </div>
        </div>
    )
}

export default SingleUser
