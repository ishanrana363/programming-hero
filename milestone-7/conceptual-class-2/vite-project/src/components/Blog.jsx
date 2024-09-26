import React from "react";
import { NavLink } from "react-router-dom";
import placeholderImg from "../assets/placeholder.png"

const Blog = ({ blogData,isDelete,handleDeleteBookmark }) => {
  const { cover_image, title, description, published_at, id } = blogData;
  return (
    <div className="flex relative " >
      <div className="border-2 border-primary hover:border-secondary border-opacity-30 transition hover:scale-105 " >
        <NavLink
          rel="noopener noreferrer"
          to= {`/blog/${id}`}
          className="max-w-sm   mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholderImg }
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600"> { new Date(published_at).toLocaleDateString() } </span>
            <p>
              {description}
            </p>
          </div>
        </NavLink>
      </div>
      <div>
        {
          isDelete && <buttto onClick = {()=>{handleDeleteBookmark(id)}} className = " p-2 text-white bg-primary cursor-pointer rounded-full absolute -ml-28 -mt-4 " > Delete </buttto>
        }
      </div>

      
    </div>
  );
};

export default Blog;
