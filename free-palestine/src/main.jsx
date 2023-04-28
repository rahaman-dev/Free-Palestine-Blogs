import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("http://localhost:300/allBlogs"),
      },
      {
        path: "/blogs/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`http://localhost:300/allBlogs/${params.id}`),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
