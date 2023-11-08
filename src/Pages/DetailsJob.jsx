import { Button, Input, Typography } from "@material-tailwind/react";
import bannerDetail from "../../public/images/details-banner-7.jpg";
import companyLogo from "../../public/images/R_logo.svg.png";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { formatDateFromTimestamp } from "../utils";
import { AuthContext } from "../context/AuthProvider";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import client from "../api";
import useTitle from "../hooks";

const DetailsJob = () => {
  useTitle("Job Details");
  const { user } = useContext(AuthContext);
  const form = useRef();

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
    created_by,
    _id,
  } = job.result;

  const today = Date.now();
  const deadlineDate = Date.parse(deadline);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (today > deadlineDate) {
      toast.error("Job Deadline is over");
    } else if (user.email === created_by.email) {
      toast.error("You can not apply to your own job");
    } else {
      setOpen(true);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_d2xalwy",
        "template_e1ql9d9",
        form.current,
        "QmAn_gQzQ2tqrmAKi"
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const payload = {
      name: user?.displayName,
      email: user?.email,
      resume: form.resume.value,
    };

    client
      .patch(`/applied-job/${_id}`, payload)
      .then(() => {
        sendEmail();
        form.reset();
        toast.success(
          "Job applied successful please check email for confirmation mail"
        );

        setOpen(false);
      })
      .catch((error) => {
        if (error.response.status == 409) {
          setOpen(false);
          toast.error("You already applied this job");
        }
      });
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
              {title} at {company.name}
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
        <Dialog open={open} size={"md"} handler={handleOpen}>
          <div className="p-6">
            <div>
              <h2 className="text-center text-2xl font-semibold text-teal-600 ">
                Apply for {title} at {company.name}
              </h2>
            </div>
            <DialogBody>
              <form onSubmit={handleSubmit} ref={form} className="space-y-4">
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Your Name
                  </Typography>
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
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Your Email
                  </Typography>
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
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Resume Link
                  </Typography>
                  <Input
                    type="text"
                    size="lg"
                    name="resume"
                    required
                    label="https//your-resume-link.com/"
                    color="teal"
                  />
                </div>
                <Button className="w-full" type="submit" color="teal">
                  Apply Now
                </Button>
              </form>
            </DialogBody>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default DetailsJob;
