import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className=" text-4xl font-bold">
              Welcome to{" "}
              <span className=" bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                ByteBlazer
              </span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div className="flex justify-center items-center gap-6 ">
              <NavLink
                to={"/blogs"}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-purple-400"></span>
                <span className="relative text-primary group-hover:text-white">
                  Read Blogs
                </span>
              </NavLink>
              <NavLink
                to={"/bookmarks"}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-purple-400"></span>
                <span className="relative text-primary group-hover:text-white">
                  Bookmarks
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
