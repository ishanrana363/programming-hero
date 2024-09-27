import { NavLink } from "react-router-dom";

const   AllUsers = ({ users }) => {
    const { name, username, email, id } = users;

    return (
        <div className=" flex" >
            <div className="bg-green-300 p-5 rounded-xl transition hover:-translate-y-2 hover:scale-y-105 " >
                <h1>User name : {name} </h1>
                <h2>User username : {username} </h2>
                <h3>User email : {email} </h3>
                <NavLink className={`flex-grow`} to={`/user-details/${id}`} >
                    <button className="bg-yellow-300 px-4 py-2 rounded-xl shadow-xl shadow-blue-500 my-4 " >User details</button>
                </NavLink>
            </div>
        </div>
    )
}

export default AllUsers
