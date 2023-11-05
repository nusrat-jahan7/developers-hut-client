import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import svg from "../../public/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
            <img src={svg} alt="" />
        </div>
      <Card className="mt-6 shadow-xl p-8" color="transparent" shadow={false}>
        <Typography variant="h3" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to see you Again! Enter your details to Login.
          {/* Nice to meet you! Enter your details to register. */}
        </Typography>
        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
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
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button color="teal" className="mt-6" fullWidth>
            sign in
          </Button>
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
        <Button color="teal"  className="flex items-center justify-center gap-3 mt-4" variant="outlined" fullWidth>
            <span className="text-lg"><FcGoogle></FcGoogle></span> 
            Sign In With Google
        </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
          Do not have an account?{" "}
            <Link to="/register" className="font-medium hover:text-teal-700 hover:underline text-gray-900">
              Sign up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
