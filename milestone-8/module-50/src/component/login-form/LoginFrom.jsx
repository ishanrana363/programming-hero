import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../../firebase/firebase.config';
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const LoginFrom = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [toggle, setToggle] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError("Password must be at least 6 characters");
            return;
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}$/.test(password)) {
            setRegisterError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
            return;
        }


        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setSuccess('User created successfully');
                const user = result;
                console.log(user);
            }).catch((error) => {
                setRegisterError(error.message);
                console.error('Error creating user:', error);
            });

    };
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
                    <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Register</h2>
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

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                        {success && <p className="text-green-500">{success}</p>}
                        {registerError && <p className="text-red-500">{registerError}</p>}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginFrom
