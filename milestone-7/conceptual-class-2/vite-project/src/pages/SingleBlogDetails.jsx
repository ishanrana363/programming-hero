import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlogDetails = () => {
  const blog = useLoaderData();
  const {
    title,
    comments_count,
    reading_time_minutes,
    public_reactions_count,
    published_timestamp,
  } = blog;
  return (
    <div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 text-gray-50">
          <div className="space-y-6">
            <h1 className=" font-bold text-black md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm text-black ">
                  {" "}
                  {reading_time_minutes} minute read •{" "}
                  {new Date(published_timestamp).toLocaleDateString()}{" "}
                </p>
              </div>
              <p className="flex-shrink-0 text-black mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} views
              </p>
            </div>
          </div>
          <div className="text-black">
            <p>Insert the actual text content here...</p>
          </div>
          <div className="flex items-center text-black -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </a>    
          </div>
        </article>


        {/* <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #MambaUI
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #TailwindCSS
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #Angular
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default SingleBlogDetails;
