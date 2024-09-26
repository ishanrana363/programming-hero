import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { getBlogs, removeBlog } from "../utils";

const Bookmarks = () => {
  const blog = getBlogs();
  const [blogBookmark, setBlogBookmark] = useState([]);
  useEffect(() => {
    setBlogBookmark(blog);
  }, []);
  const handleDeleteBookmark = (id) => {
    removeBlog(id);
    const saveBlog = getBlogs()
    setBlogBookmark(saveBlog);
    console.log(blogBookmark.length);
    
  }
  return (
    <div className="my-10 max-w-screen-xl mx-auto " >
      <div className="grid  justify-center grid-cols-1 md:gap-6 md:gap-y-6 sm:grid-cols-2 lg:grid-cols-3  text-black ">
        {blogBookmark.map((item, i) => {
          return (
            <div key={i}>
              <Blog blogData={item} isDelete = {true} handleDeleteBookmark = {handleDeleteBookmark} ></Blog>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
