import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main.jsx";
import Home from "../Components/Home/Home.jsx";
import Blogs from "../Components/Blogs/Blogs.jsx";
import Blog from "../Components/Blog/Blog.jsx";
import Categories from "../Components/Categories/Categories.jsx";
import Profile from "../Components/Profile/Profile.jsx";
import SignUp from "../Components/SignUp/SignUp.jsx";
import Login from "../Components/Login/Login.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://free-palestine-server.vercel.app/categories/0`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () =>
          fetch("https://free-palestine-server.vercel.app/allblogs"),
      },
      {
        path: "/blogs/:id",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://free-palestine-server.vercel.app/allblogs/${params.id}`
          ),
      },
      {
        path: "/categories/:id",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(
            `https://free-palestine-server.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
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

export default route;
