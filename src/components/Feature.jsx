import { Typography } from "@material-tailwind/react";

const Feature = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 justify-center bg-gradient-to-r from-teal-200 via-teal-500 to-teal-300 text-white py-16 mt-20">
      <Typography className="flex flex-col gap-2 items-center justify-center pr-10 lg:border-r-2  lg:border-white">
        <h1 className="text-4xl font-bold"> 344 +</h1>
        <p className="text-2xl">Candidates</p>
      </Typography>
      <Typography className="flex flex-col gap-2 items-center justify-center pr-10 lg:border-r-2 lg:border-white">
        <h1 className="text-4xl font-bold"> 475 +</h1>
        <p className="text-2xl">Members</p>
      </Typography>
      <Typography className="flex flex-col gap-2 items-center justify-center pr-10 lg:border-r-2  lg:border-white">
        <h1 className="text-4xl font-bold"> 300 +</h1>
        <p className="text-2xl">Resume</p>
      </Typography>
      <Typography className="flex flex-col gap-2 items-center justify-center pr-10 ">
        <h1 className="text-4xl font-bold"> 499 +</h1>
        <p className="text-2xl">Companies</p>
      </Typography>
    </div>
  );
};

export default Feature;
