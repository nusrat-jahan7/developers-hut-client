import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import svg from "../../public/images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { formatFirebaseAuthErrorMessage } from "../helpers";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const from = Location.state?.from?.pathname || "/";
  const { signUp, editProfile, loading, setLoading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });

  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    capital: false,
    specialCharacter: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Password validation
    if (name === "password") {
      const errors = {
        length: value.length < 6,
        capital: !/[A-Z]/.test(value),
        specialCharacter: !/[!@#$%^&*(),.?":{}|<>]/.test(value),
      };

      setPasswordErrors(errors);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const { email, password, name, image } = formData;

    console.log(formData);

    if (
      passwordErrors.length ||
      passwordErrors.capital ||
      passwordErrors.specialCharacter
    ) {
      toast.error("Invalid password. Please check the password requirements.");
      return;
    }

    // Sign up the user with Firebase authentication
    signUp(email, password)
      .then(() => {
        // Edit the user profile after successful signup
        return editProfile({ displayName: name, photoURL: image });
      })
      .then((result) => {
        console.log(result);
        toast.success("Account created successfully!");

        // Navigate to a different page after successful registration
        navigate(from, { replace: true });

        window.location.reload();

        // Reset the form and password errors
        setFormData({
          name: "",
          image: "",
          email: "",
          password: "",
        });
        setPasswordErrors({
          length: false,
          capital: false,
          specialCharacter: false,
        });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        const errorMessage = formatFirebaseAuthErrorMessage(error);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div>
        <img src={svg} alt="" />
      </div>
      <Card className="my-6 shadow-xl p-8" color="transparent" shadow={false}>
        <Typography variant="h3" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <div className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
          <form onSubmit={handleRegister} className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="name"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={formData.name}
              onChange={handleInputChange}
            />
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
              value={formData.email}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              required
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${
                passwordErrors.length ||
                passwordErrors.capital ||
                passwordErrors.specialCharacter
                  ? "border-red-500"
                  : ""
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="•••••••••"
              value={formData.password}
              onChange={handleInputChange}
            />
            <ul className="list-disc list-inside space-y-2">
                {passwordErrors.length && (
                  <li className="text-red-500 text-xs">
                    Password must be at least 6 characters.
                  </li>
                )}
                {passwordErrors.capital && (
                  <li className="text-red-500 text-xs">
                    Include at least one capital letter.
                  </li>
                )}
                {passwordErrors.specialCharacter && (
                  <li className="text-red-500 text-xs">
                    Include at least one special character.
                  </li>
                )}
              </ul>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Photo URL
            </Typography>
            <Input
              type="text"
              size="lg"
              name="image"
              placeholder="https//yourimagelink.com/"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={formData.image}
              onChange={handleInputChange}
            />
          <Button type="submit" disabled={loading} color="teal" className="mt-6" fullWidth>
          {loading ? "Loading" : "Sign up"}
          </Button>
          </form>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium hover:text-teal-700 hover:underline text-gray-900"
            >
              Sign In
            </Link>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Register;
