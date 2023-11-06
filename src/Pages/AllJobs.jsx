import {
  Card,
  Typography,
  CardBody,
  Chip,
  Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import client from "../api";

// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Monitored",
//     value: "monitored",
//   },
//   {
//     label: "Unmonitored",
//     value: "unmonitored",
//   },
// ];

const TABLE_HEAD = [
  "Hiring",
  "Job Title",
  "Type",
  "Deadline",
  "Salary",
  "Details",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    posted: "1 month ago",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    posted: "1 month ago",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    posted: "1 month ago",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    posted: "1 month ago",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    posted: "1 month ago",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

const AllJobs = () => {
  const { data } = useQuery({
    queryKey: ["job"],
    queryFn: () => client.get("/job").then(({ data }) => data?.result),
  });

  data.map((job) => console.log(job));

  // const {title, deadline, min_salary} = job;

  return (
    <div>
      <div>
            <Typography variant="h3" className="text-center text-gray-700 mt-6">All Jobs</Typography>
            <Typography className="text-center text-gray-700 mt-4">Choosing the right category for your job post is crucial.Select from the sections below to learn more about the different job categories.</Typography>
        </div>
      <Card className="h-full w-full">
        <CardBody className="">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {TABLE_ROWS.map(
                ({ name, posted, job, org, online, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {posted}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {job}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={online ? "Remote" : "Onsite"}
                            color={online ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography>$ 24500</Typography>
                      </td>
                      <td className={classes}>
                        <Button color="teal">Details</Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllJobs;
