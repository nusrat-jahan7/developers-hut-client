/* eslint-disable react/prop-types */
import { Tabs, TabsHeader, Tab, Typography } from "@material-tailwind/react";

const JobsCategory = ({ setFilteredString, data: jobData }) => {
  const data = [
    {
      label: "Remote job",
      value: "remote",
    },
    {
      label: "On Site Job",
      value: "onsite",
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
      label: "Full Time",
      value: "full_time",
    },
  ];

  //   jobData?.map((job) => console.log(job));
  console.log(jobData);

  return (
    <div className="max-w-2xl mx-auto my-10">
        <div>
            <Typography variant="h3" className="text-center text-gray-700">Jobs Category</Typography>
            <Typography className="text-center text-gray-700 mt-4 mb-10">Choosing the right category for your job post is crucial.Select from the sections below to learn more about the different job categories.</Typography>
        </div>
      <Tabs
        id="custom-animation"
        value="html"
        
      >
        <TabsHeader>
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
    </div>
  );
};

export default JobsCategory;
