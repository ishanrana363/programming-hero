import React from "react";
import { NavLink, useLoaderData, useNavigation } from "react-router-dom";
import Blog from "../components/Blog";
import SpinnerLodding from "../components/SpinnerLodding";

const Blogs = () => {
  const blog = useLoaderData();
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <SpinnerLodding />
  }
  
  return (
    <div>
      <section className=" text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <NavLink to={""}
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm transition  border-black gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-primary"
          >
            <img
              src={blog[0].title}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blog[0].title}
              </h3>
              <span className="text-xs text-gray-400">{  new Date( blog[0].published_at).toLocaleDateString() }</span>
              <p>
                {
                  blog[0].description
                }
              </p>
            </div>
          </NavLink>
          <div className="grid  justify-center grid-cols-1 md:gap-6 md:gap-y-6 sm:grid-cols-2 lg:grid-cols-3  text-black ">
            {
              blog.slice(1,19).map((item,i)=>{
                return(
                  <div key={i} >
                    <Blog blogData = {item} ></Blog>
                  </div>
                )
              })
            }
          </div>

            
          
        </div>
      </section>
    </div>
  );
};

export default Blogs;
