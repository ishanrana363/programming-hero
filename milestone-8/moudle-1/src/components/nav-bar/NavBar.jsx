import React, { useState } from "react";
import Link from "../link/Link";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About Us",
    },
    {
      path: "/services",
      title: "Our Services",
    },
    {
      path: "/contact",
      title: "Contact Us",
    },
    {
      path: "/profile/:id",
      title: "User Profile",
    },
  ];
  return (
    <div className="bg-yellow-700 md:shadow-2xl md:shadow-red-100 md:py-4 ">
      <div
        className="cursor-pointer md:hidden "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <IoMdCloseCircleOutline className="text-3xl" />
        ) : (
          <TiThMenu className="text-3xl" />
        )}
      </div>
      <ul className= {` md:flex absolute p-4 my-2 duration-1000 md:static   bg-yellow-300 ${isOpen ? "top-10":"-top-[300px]"} `} >
        
          {routes.map((route, index) => {
            return (
              <div className=" " key={index}>
                <Link link={route}></Link>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default NavBar;
