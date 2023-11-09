import { Card, Input, Button, Typography } from "@material-tailwind/react";
import svg from "../../public/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import { formatFirebaseAuthErrorMessage } from "../helpers";
import client from "../api";
import useTitle from "../hooks";

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn, googleSignIn, loading } = useContext(AuthContext);

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        client
          .post("/jwt", {
            email: result.user.email,
          })
          .then(() => {
            toast.success("Login successfully!");
            setTimeout(() => {
              navigate(from, { replace: true });
            }, 1500);
          });
      })
      .catch((error) => {
        const errorMessage = formatFirebaseAuthErrorMessage(error);
        toast.error(errorMessage);
      });

    form.reset();
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        client
          .post("/jwt", {
            email: result.user.email,
          })
          .then(() => {
            toast.success("Login successfully!");
            setTimeout(() => {
              navigate(from, { replace: true });
            }, 1500);
          });
      })
      .catch((error) => {
        const errorMessage = formatFirebaseAuthErrorMessage(error);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="lg:flex justify-between items-center max-w-6xl mx-auto">
      <div className="hidden lg:block">
        <img src={svg} alt="" />
      </div>
      <Card className="mt-6 shadow-xl p-8" color="transparent" shadow={false}>
        <Typography variant="h3" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to see you Again! Enter your details to Login.
        </Typography>
        <div className="mt-6 mb-2 lg:w-80 max-w-screen-lg ">
          <form
            onSubmit={handleEmailLogin}
            className="mb-1 flex flex-col gap-6"
          >
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button
              disabled={loading}
              type="submit"
              color="teal"
              className="mt-6 disabled:bg-teal-700/50"
              fullWidth
            >
              {loading ? "Loading" : "Sign in"}
            </Button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/5"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              or login with Social Media
            </a>
            <span className="w-1/5 border-b lg:w-1/5"></span>
          </div>
          <Button
            onClick={() => handleGoogleSignIn()}
            type="submit"
            color="teal"
            className="flex items-center justify-center gap-3 mt-4"
            variant="outlined"
            fullWidth
          >
            <span className="text-lg">
              <FcGoogle></FcGoogle>
            </span>
            Sign In With Google
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Do not have an account?{" "}
            <Link
              to="/register"
              className="font-medium hover:text-teal-700 hover:underline text-gray-900"
            >
              Sign up
            </Link>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Login;
