import { Carousel, Typography, Button, Input } from "@material-tailwind/react";
import banner1 from "../../public/images/banner-1.jpg";
import banner2 from "../../public/images/banner-2.jpg";
import banner3 from "../../public/images/banner-3.jpg";

const Slider = () => {
  return (
    <Carousel>
      <div className="relative lg:h-[550px] h-96 w-full">
        <img
          src={banner1}
          alt="image 1"
          className="lg:h-[550px] h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid lg:h-[550px] h-96 w-full place-items-center bg-blue-gray-900/70">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Looking For A Job!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:mb-8 mb-4 text-sm lg:text-lg opacity-80"
            >
              We provides a wide range of web developers job listings, career
              resources, and tools to match candidates with suitable employment
              opportunities, streamlining the hiring process for both employers
              and job seekers.
            </Typography>
            <div className="flex justify-center gap-2">
              <Input color="teal" className="text-white" label="Search a job" />
              <Button size="sm" className="bg-teal-700 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:h-[550px] h-96 w-full">
        <img
          src={banner2}
          alt="image 2"
          className="lg:h-[550px] h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid lg:h-[550px] h-96 w-full place-items-center bg-blue-gray-900/70">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Looking For A Job!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:mb-8 mb-4 text-sm lg:text-lg opacity-80"
            >
              We provides a wide range of web developers job listings, career
              resources, and tools to match candidates with suitable employment
              opportunities, streamlining the hiring process for both employers
              and job seekers.
            </Typography>
            <div className="flex justify-center gap-2">
              <Input color="teal" className="text-white" label="Search a job" />
              <Button size="sm" className="bg-teal-700 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:h-[550px] h-96 w-full">
        <img
          src={banner3}
          alt="image 3"
          className="lg:h-[550px] h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid lg:h-[550px] h-96 w-full place-items-center bg-blue-gray-900/70">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Looking For A Job!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:mb-8 mb-4 text-sm lg:text-lg opacity-80"
            >
              We provides a wide range of web developers job listings, career
              resources, and tools to match candidates with suitable employment
              opportunities, streamlining the hiring process for both employers
              and job seekers.
            </Typography>
            <div className="flex justify-center gap-2">
              <Input color="teal" className="text-white" label="Search a job" />
              <Button size="sm" className="bg-teal-700 text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
