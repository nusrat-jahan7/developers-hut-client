import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import client from "../api";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { AuthContext } from "../context/AuthProvider";
import useTitle from "../hooks";

const AddJobs = () => {
  useTitle("Add Job");
  const [deadline, setDeadline] = useState("");
  const [jobType, setJobType] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const payload = {
      title: form.title.value,
      type: jobType,
      deadline: deadline,
      min_salary: form.min_salary.value,
      max_salary: form.max_salary.value,
      banner: form.banner.value,
      description: form.description.value,
      company: {
        name: form.company_name.value,
        logo: form.company_logo.value,
      },
      created_by: {
        name: user.displayName,
        email: user.email,
      },
    };

    client.post("/job", payload).then(() => {
      toast.success("Job posted successfully");
      form.reset();
    });
  };

  return (
    <div>
      <section className="p-6">
        <Typography variant="h3" className="text-center text-gray-700 mt-6">
          Add a Job
        </Typography>
        <Typography className="text-center text-gray-700 mt-4">
          Explore diverse job opportunities in one place, tailored for every
          skill set and career level.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-4">
          <div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Job Poster Details
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Your Name
            </Typography>
            <Input
              type="text"
              name="name"
              readOnly
              disabled
              defaultValue={user.displayName}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 mt-2 font-medium"
            >
              Email address
            </Typography>
            <Input
              color="teal"
              type="email"
              name="email"
              disabled
              readOnly
              defaultValue={user.email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="my-6">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              New Job Information
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Job Title
            </Typography>
            <Input
              color="teal"
              type="text"
              name="title"
              required
              label="Title of the job"
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 mt-4 font-medium"
            >
              Job Banner URL
            </Typography>
            <Input
              color="teal"
              type="text"
              name="banner"
              label="Photo URL of the banner"
            />

            <div className="flex flex-col lg:flex-row gap-4 mx-auto ">
              <div className="mx-auto w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Job Category
                </Typography>
                <Select
                  required
                  name="type"
                  color="teal"
                  variant="outlined"
                  label="Select type of the Job"
                  onChange={(value) => setJobType(value)}
                >
                  <Option value="onsite">On Site</Option>
                  <Option value="remote">Remote Job</Option>
                  <Option value="hybrid">Hybrid</Option>
                  <Option value="part_time">Part Time</Option>
                </Select>
              </div>

              <div className="mx-auto w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Minimum Salary
                </Typography>
                <Input
                  color="teal"
                  type="text"
                  name="min_salary"
                  label="Min salary amount"
                  required
                />
              </div>

              <div className="mx-auto w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Maximum Salary
                </Typography>
                <Input
                  color="teal"
                  type="text"
                  name="max_salary"
                  label="Max salary amount"
                  required
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Deadline Date
                </Typography>
                <DatePicker
                  required
                  name="deadline"
                  className="border rounded-lg !border-blue-gray-200 focus:!border-t-gray-900 h-10 w-full focus:outline-teal-500  px-2"
                  placeholderText="Select Deadline Date"
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            d="M40.04 22v20h-32V22"
                          ></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="w-full flex flex-col justify-center lg:flex-row gap-4 my-auto ">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Company Name
                </Typography>
                <Input
                  color="teal"
                  type="text"
                  name="company_name"
                  label="Your company name"
                  required
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Company Logo
                </Typography>
                <Input
                  color="teal"
                  type="text"
                  name="company_logo"
                  label="Your company logo"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 mt-4 font-medium"
                >
                  Description
                </Typography>
                <Textarea
                  name="description"
                  variant="outlined"
                  label="Short Description"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <Button type="submit" color="teal">
            Add this Job
          </Button>
        </form>
      </section>
    </div>
  );
};

export default AddJobs;
