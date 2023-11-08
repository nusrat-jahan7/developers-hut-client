/* eslint-disable react/prop-types */
import { Tabs, TabsHeader, Tab, Typography } from "@material-tailwind/react";
import JobsCart from "../components/JobsCart";
import Loader from "../components/Loader";

const JobsCategory = ({ setFilteredString, data: jobData, isLoading }) => {
  const data = [
    {
      label: "All",
      value: "all-job",
    },
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
    {
      label: "Part Time",
      value: "part_time",
    },
    {
      label: "Onsite",
      value: "onsite",
    },
  ];

  return (
    <div className=" my-10">
      <div>
        <Typography variant="h3" className="text-center text-gray-700">
          Jobs Category
        </Typography>
        <Typography className="text-center text-gray-700 mt-4 mb-10">
          Choosing the right category for your job post is crucial.Select from
          the sections below to learn more about the different job categories.
        </Typography>
      </div>
      <Tabs id="custom-animation" value="all-job">
        <TabsHeader className="flex-wrap sm:flex-nowrap">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="text-teal-700"
              onClick={() => setFilteredString(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>

      {/* loader */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {jobData.map((job) => (
            <JobsCart job={job} key={job._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsCategory;
