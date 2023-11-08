import { Link } from "react-router-dom";
import error from "../../public/images/404.png"
import { Button } from "@material-tailwind/react";

const ErrorPage = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="text-center absolute -bottom-24 mb-8">
          <Button color="teal">
          <Link
            to="/"
          >
            Back To Home
          </Link>
          </Button>
        </div>
        <img className="w-6/12 mx-auto" src={error} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
