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
import { useState } from "react";

const DetailsJob = () => {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  // const { data } = useQuery({
  //     queryKey: ["job", id],
  //     queryFn: () => client.get(`/job/${id}`).then(({ data }) => data?.result),
  //   });

  //   console.log(data);

  //   data?.map((job) => console.log(job));
  return (
    <div>
      <div className="relative">
        <img src={bannerDetail} alt="" className="w-full h-auto" />
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
      <div className="lg:flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5">
          <img src={companyLogo} className="w-2/6 h-2/6 mx-auto mt-6" alt="" />
          <Typography className="lg:text-3xl text-center text-xl fonst-semibold">
            Replique Limited
          </Typography>
        </div>
        <div className="w-6/12 mx-auto">
          <Typography variant="h2" className="mt-6 text-gray-600 text-center">
            Senior UI/UX Designer
          </Typography>
          <Typography className="mt-6 mb-3" variant="h5">
            <li>Job Description: </li>
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            molestias, quasi officiis quae quos quibusdam voluptate eum quaerat.
            Molestiae hic ea porro mollitia vel eveniet eius. Sequi ipsa non
            unde? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Expedita sed vero magni debitis facilis ad numquam totam eius labore
            nostrum. Consequatur deserunt inventore doloribus vitae veniam eum
            molestias qui earum?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Debitis ad ex enim numquam, consectetur,
            accusantium soluta quam vitae sed eligendi eum accusamus facilis
            deleniti et corrupti officia. Tempore, ea blanditiis!
          </Typography>
          <Typography className="mt-6 mb-3" variant="h5">
            <li>Salary Range: </li>
          </Typography>
          <Typography className="mt-3 lg:text-xl font-semibold text-gray-600">
            min salary : $ 15000
          </Typography>
          <Typography className="lg:text-xl font-semibold text-gray-600">
            max salary : $ 20000
          </Typography>
          <div className="flex justify-between">
          <Typography className="mt-6 mb-3 text-gray-600" variant="h6">
            <li>No. of Applicants: 0 peaople </li>
          </Typography>
          <Typography className="mt-6 mb-3 text-gray-600" variant="h6">
            <li>Deadline: 11 November, 2023 </li>
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
                placeholder="name"
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
                placeholder="name@mail.com"
                className=" !border-teal-200 focus:!border-t-teal-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </DialogBody>
            <DialogHeader>
              <Typography variant="h6" color="blue-gray" className="-mb-5">
                Expected Salary
              </Typography>
            </DialogHeader>
            <DialogBody>
              <Input
                size="lg"
                name="email"
                placeholder="$"
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
