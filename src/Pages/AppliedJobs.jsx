import {
  Card,
  CardBody,
  Chip,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { formatDateFromTimestamp } from "../utils";
import { useQuery } from "@tanstack/react-query";
import client from "../api";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import useTitle from "../hooks";
import Loader from "../components/Loader";

const TABLE_HEAD = [
  "Hiring",
  "Job Title",
  "Type",
  "Deadline",
  "Salary",
  "Resume Link",
];

const AppliedJobs = () => {
  useTitle("Applied Job");
  const { user } = useContext(AuthContext);
  const [searchField, setSearchField] = useState("");
  const [jobType, setJobType] = useState("");

  const fetch = () =>
    searchField.length
      ? client
          .get(`/applied-job/${user?.email}?search=${searchField}`)
          .then(({ data }) => data.result)
      : jobType.length
      ? client
          .get(`/applied-job/${user?.email}?type=${jobType}`)
          .then(({ data }) => data.result)
      : client
          .get(`/applied-job/${user?.email}`)
          .then(({ data }) => data.result);

  const { data, isLoading } = useQuery({
    queryKey: [
      searchField.length
        ? `/applied-job/${user?.email}?search=${searchField}`
        : jobType.length
        ? `/applied-job/${user?.email}?type=${jobType}`
        : `/applied-job/${user?.email}`,
    ],
    queryFn: () => fetch(),
    enabled: !!user?.email,
  });

  return (
    <>
      <div>
        <div>
          <Typography variant="h3" className="text-center text-gray-700 mt-6">
            Applied Jobs
          </Typography>
          <Typography className="text-center text-gray-700 mt-4">
            Explore diverse job opportunities in one place, tailored for every
            skill set and career level.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-center w-full my-4 mx-auto gap-4">
            <div className="lg:w-2/3">
              <Input
                type="text"
                onChange={(e) => setSearchField(e.target.value)}
                color="teal"
                label="Search a job by job title"
                value={searchField}
                name="search"
              />
            </div>
            <div className="lg:w-1/3">
              <Select
                label="Filter by job type"
                color="teal"
                onChange={(value) => setJobType(value)}
              >
                <Option value="onsite">On Site</Option>
                <Option value="remote">Remote Job</Option>
                <Option value="hybrid">Hybrid</Option>
                <Option value="part_time">Part Time</Option>
              </Select>
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <Card className="h-full w-full border-2 mb-6">
            <CardBody className="overflow-x-scroll lg:overflow-x-hidden">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={index}
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
                    (
                      {
                        createdAt,
                        applicants,
                        created_by,
                        deadline,
                        max_salary,
                        min_salary,
                        title,
                        type,
                        _id,
                      },
                      index
                    ) => {
                      const isLast = index === data?.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={_id}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {created_by?.name}
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
                            <Typography>
                              $ {min_salary} - {max_salary}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Link
                              to={`/job/${_id}`}
                              className="text-teal-600 underline"
                            >
                              View Job
                            </Link>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default AppliedJobs;
