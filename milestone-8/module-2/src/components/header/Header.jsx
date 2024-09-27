import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-100 dark:text-gray-800 bg-blue-600/55  ">
                <ol className="flex justify-center items-center h-8 space-x-2 max-w-screen-xl mx-auto ">
                    <li className="flex items-center">
                        <NavLink rel="noopener noreferrer" to={"/"} title="Back to homepage" className="hover:underline">
                            Home
                        </NavLink>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <NavLink rel="noopener noreferrer" to={"/about"} className="flex items-center px-1 capitalize hover:underline">About</NavLink>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <NavLink rel="noopener noreferrer" to={"/users"} className="flex items-center px-1 capitalize hover:underline">Users</NavLink>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <NavLink rel="noopener noreferrer" to={"/contact"} className="flex items-center px-1 capitalize hover:underline cursor-pointer">Contact</NavLink>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Header
