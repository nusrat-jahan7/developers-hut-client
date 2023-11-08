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
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            {" "}
            <DetailsJob />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://talent-hut.vercel.app/job/${params.id}`),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
