import {
  Card,
  Typography,
  CardBody,
  Chip,
  Button,
  Input,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import client from "../api";
import { formatDateFromTimestamp } from "../utils";
import { Link } from "react-router-dom";

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

// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     posted: "1 month ago",
//     job: "Manager",
//     org: "Organization",
//     online: true,
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     posted: "1 month ago",
//     job: "Programator",
//     org: "Developer",
//     online: false,
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     posted: "1 month ago",
//     job: "Executive",
//     org: "Projects",
//     online: false,
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     posted: "1 month ago",
//     job: "Programator",
//     org: "Developer",
//     online: true,
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     posted: "1 month ago",
//     job: "Manager",
//     org: "Executive",
//     online: false,
//     date: "04/10/21",
//   },
// ];

const AllJobs = () => {
  const { data } = useQuery({
    queryKey: ["job"],
    queryFn: () => client.get("/job").then(({ data }) => data?.result),
  });

  // console.log(data);

  data?.map((job) => console.log(job));

  // const {title, deadline, min_salary} = job;
  // console.log(job.title);

  return (
    <div>
      <div>
            <Typography variant="h3" className="text-center text-gray-700 mt-6">All Jobs</Typography>
            <Typography className="text-center text-gray-700 mt-4">Explore diverse job opportunities in one place, tailored for every skill set and career level.</Typography>
        <div className="flex justify-center gap-2 w-3/5 my-4 mx-auto">
            <Input color="teal" className="text-white" label="Search a job" />
              <Button size="sm" className="bg-teal-700 text-white">
                Search
              </Button>
            </div>
        </div>
      <Card className="h-full w-full border-2 mb-6">
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
              {data?.map(
                ({ createdAt, applicants, created_by, deadline, max_salary, min_salary, title, type, _id }, index) => {
                  const isLast = index === data?.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={created_by?.name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {created_by.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {formatDateFromTimestamp(createdAt)}
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
                            {title}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                           Applicants : {applicants}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                          className="capitalize"
                            variant="ghost"
                            size="sm"
                            value={type?.split("_").join(" ").toLowerCase()}
                            color={type ? "teal" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {formatDateFromTimestamp(deadline)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography>$ {min_salary} - {max_salary}</Typography>
                      </td>
                      <td className={classes}>
                        <Link to={`/all-jobs/${_id}`} className="bg-teal-700 text-white py-2 px-3 rounded-lg">Details</Link>
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
