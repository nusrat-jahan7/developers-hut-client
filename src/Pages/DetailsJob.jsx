// import { useQuery } from "@tanstack/react-query";
// import client from "../api";
import { Button, Input, Typography } from "@material-tailwind/react";
import bannerDetail from "../../public/images/details-banner-7.jpg";
import companyLogo from "../../public/images/R_logo.svg.png";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { formatDateFromTimestamp } from "../utils";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const DetailsJob = () => {
  const { user } = useContext(AuthContext);

  const job = useLoaderData();
  const {
    deadline,
    applicants,
    company,
    max_salary,
    min_salary,
    title,
    description,
    banner,
    created_by
  } = job.result;

  const [size, setSize] = useState(null);
  const today = Date.now();
  const deadlineDate = Date.parse(deadline);
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setSize(value);
    if (today > deadlineDate) {
      toast.error("Job Deadline is over");
    } else if (user.email === created_by.email) {
      toast.error("You can not apply to your own job");
    } else {
      setOpen(!open);
    }
  };

  return (
    <div>
      <div className="relative">
        <img src={banner || bannerDetail} alt="" className="w-full h-auto" />
        <div className="absolute inset-0 grid items-end ">
          <div className="bg-teal-700 bg-opacity-50 p-6 hidden lg:block">
            <Typography
              variant="h4"
              color="white"
              className="hidden lg:block md:text-4xl lg:text-3xl"
            >
              Find Your Dream Job By Exploring Job Details!
            </Typography>
          </div>
          <Typography className="lg:hidden text-2xl text-teal-700 font-bold px-4 py-2">
            Job Details
          </Typography>
        </div>
      </div>
      <div className="lg:flex justify-center mt-6">
        <div className="gap-5">
          <img
            src={company.logo || companyLogo}
            className="w-2/6 h-2/6 mx-auto mt-6"
            alt=""
          />
          <Typography className="lg:text-3xl text-center text-xl fonst-semibold">
            {company.name}
          </Typography>
          <Typography variant="h2" className="mt-6 text-gray-600 text-center">
            {title}
          </Typography>
        </div>
        <div className="lg:w-6/12 mx-auto">
          <Typography className="mt-6 mb-3" variant="h5">
            <li>Job Description: </li>
          </Typography>
          <Typography>{description}</Typography>
          <Typography className="mt-6 mb-3" variant="h5">
            <li>Salary Range: </li>
          </Typography>
          <Typography className="mt-3 lg:text-xl font-semibold text-gray-600">
            min salary : $ {min_salary}
          </Typography>
          <Typography className="lg:text-xl font-semibold text-gray-600">
            max salary : $ {max_salary}
          </Typography>
          <div className="lg:flex justify-between">
            <Typography className="mt-6 mb-3 text-gray-600" variant="h6">
              <li>No. of Applicants: {applicants} </li>
            </Typography>
            <Typography className="mt-6 mb-3 text-gray-600" variant="h6">
              <li>Deadline: {formatDateFromTimestamp(deadline)} </li>
            </Typography>
          </div>

          <Button
            onClick={() => handleOpen("md")}
            variant="gradient"
            color="teal"
            className="w-full text-xl lowercase first-letter:capitalize my-2"
          >
            Apply
          </Button>
        </div>
        <Dialog open={size === "md"} size={size || "md"} handler={handleOpen}>
          <div className="px-4 pt-3">
            <DialogHeader>
              <Typography variant="h6" color="blue-gray" className="-mb-5">
                Your Name
              </Typography>
            </DialogHeader>
            <DialogBody>
              <Input
                size="lg"
                name="name"
                defaultValue={user.displayName}
                readOnly
                disabled
                color="teal"
                className=" !border-teal-200 focus:!border-t-teal-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </DialogBody>
            <DialogHeader>
              <Typography variant="h6" color="blue-gray" className="-mb-5">
                Your Email
              </Typography>
            </DialogHeader>
            <DialogBody>
              <Input
                size="lg"
                name="email"
                defaultValue={user.email}
                readOnly
                disabled
                className=" !border-teal-200 focus:!border-t-teal-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </DialogBody>
            <DialogHeader>
              <Typography variant="h6" color="blue-gray" className="-mb-5">
                Resume Link
              </Typography>
            </DialogHeader>
            <DialogBody>
              <Input
                type="text"
                size="lg"
                name="image"
                placeholder="https//yourimagelink.com/"
                className=" !border-teal-200 focus:!border-t-teal-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </DialogBody>
          </div>
          <DialogFooter>
            <Button
              variant="text"
              color="teal"
              onClick={() => handleOpen(null)}
              className="mr-1 lowercase first-letter:capitalize text-lg"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="teal"
              className="mr-5 lowercase first-letter:capitalize text-lg"
              onClick={() => handleOpen(null)}
            >
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default DetailsJob;
