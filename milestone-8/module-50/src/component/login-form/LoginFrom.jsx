import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './../../firebase/firebase.config';
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const LoginFrom = () => {
    const [toggle, setToggle] = useState(false);
    const auth = getAuth(app);
    
    const handleSubmit = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result);
            console.log("User signed in successfully!");
            
        }).catch((error) => {
            console.log(error.message);
        })
        
    }

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
                    <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Login Form </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                name="email"
                            />
                        </div>

                        <div className="mb-6 ">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <div className="relative" >
                                <input
                                    type={toggle ? "password" : "text"}
                                    id="password"
                                    className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    name="password"
                                />

                                <span className="absolute mt-3 -ml-10 cursor-pointer " onClick={() => { setToggle(!toggle) }} >
                                    {
                                        toggle ? <span> <FaEye></FaEye> </span> : <span> <FaEyeSlash></FaEyeSlash> </span>
                                    }
                                </span>
                            </div>
                        </div>

                        <div>
                            <NavLink to={"/forget-password"} >Forget password</NavLink>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginFrom
