import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Layout from "./layout/Layout";
import Home from "./pages/Home.jsx";
import SingleBlogDetails from "./pages/SingleBlogDetails.jsx";
import Content from "./components/Content.jsx";
import Author from "./components/Author.jsx";
import { Toaster } from "react-hot-toast";

// Define routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { 
        path: "/", 
        element: <Home></Home> 
      },
      { 
        path: "blogs", 
        element: <Blogs /> ,
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`) 
      },
      { 
        path: "bookmarks", 
        element: <Bookmarks /> 
      },
      {
        path: "blog/:id", 
        element: <SingleBlogDetails></SingleBlogDetails>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true, 
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </StrictMode>
);
