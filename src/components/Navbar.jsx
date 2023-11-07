import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import client from "../api";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  // const userLogin = false;
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    client.post("/logout", { email: user?.email }).then(() => {
      logOut();
    });
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link
          to="/"
          className="font-medium flex items-center text-lg justify-center hover:text-teal-600"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link
          to="/all-jobs"
          className="font-medium flex items-center text-lg justify-center hover:text-teal-600"
        >
          All jobs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link
          to="/applied-jobs"
          className="font-medium flex items-center text-lg justify-center hover:text-teal-600"
        >
          Applied jobs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link
          to="/add-job"
          className="font-medium flex items-center text-lg justify-center hover:text-teal-600"
        >
          Add a job
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link
          to="/my-jobs"
          className="font-medium flex items-center text-lg justify-center hover:text-teal-600"
        >
          My jobs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link
          to="/blogs"
          className="font-medium flex items-center text-lg justify-center hover:text-teal-600"
        >
          Blogs
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="max-w-none rounded-none">
      <div className="flex items-center justify-between  text-gray-900">
        <img src={logo} className="w-48" alt="" />
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:block">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <Menu>
                <div className="w-10 rounded-full">
                  <img
                    className="rounded-full object-cover w-10 h-10"
                    src={user?.photoURL ?? "https://i.ibb.co/t4NG2L4/user.png"}
                  />
                </div>
              </Menu>
              <Button color="teal" onClick={() => handleLogout()}>
                Log Out
              </Button>
            </div>
          ) : (
            <Button
              variant="filled"
              color="teal"
              size="md"
              className="hidden lg:inline-block"
            >
              <Link to="/login">Sign in</Link>
            </Button>
          )}
        </div>

        <div className="lg:hidden">
          {user?.email && (
            <Menu placement="bottom-end">
              <div className="w-10 rounded-full">
                <img
                  className="rounded-full object-cover w-10 h-10"
                  src={user?.photoURL ?? "https://i.ibb.co/t4NG2L4/user.png"}
                />
              </div>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Menu</MenuItem>
                <Button color="teal" onClick={() => handleLogout()}>
                  Log Out
                </Button>
              </MenuList>
            </Menu>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}

          {!user?.email && (
            <Button
              fullWidth
              color="teal"
              variant="filled"
              size="sm"
              className=""
            >
              <span>Sign in</span>
            </Button>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
}
