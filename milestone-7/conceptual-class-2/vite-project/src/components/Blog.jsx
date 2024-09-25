import React from "react";
import { NavLink } from "react-router-dom";
import placeholderImg from "../assets/placeholder.png"

const Blog = ({ blogData }) => {
  const { cover_image, title, description, published_at, id } = blogData;
  return (
    <div>
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

      {/* <div className="flex justify-center">
        <button
          type="button"
          className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
        >
          Load more posts...
        </button>
      </div> */}
    </div>
  );
};

export default Blog;
