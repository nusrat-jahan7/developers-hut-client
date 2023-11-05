import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
