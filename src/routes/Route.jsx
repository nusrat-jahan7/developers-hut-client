import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AppliedJobs from "../pages/AppliedJobs";
import AllJobs from "../pages/AllJobs";
import AddJobs from "../pages/AddJobs";
import MyJobs from "../pages/MyJobs";
import Blogs from "../pages/Blogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailsJob from "../pages/DetailsJob";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/all-jobs",
            element: <AllJobs/>
        },
        {
            path: "/all-jobs/:id",
            element: <DetailsJob/>
        },
        {
            path: "/applied-jobs",
            element: <AppliedJobs/>
        },
        {
            path: "/add-job",
            element: <PrivateRoute><AddJobs/></PrivateRoute> 
        },
        {
            path: "/my-jobs",
            element: <MyJobs/>
        },
        {
            path: "/blogs",
            element: <Blogs/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
    ]
  },
]);
