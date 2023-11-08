import {  Button, Card, CardBody, Chip, Input, Typography } from "@material-tailwind/react";
import { FiCheck } from "react-icons/fi";
import { formatDateFromTimestamp } from "../utils";
import { useQuery } from "@tanstack/react-query";
import client from "../api";
import { useState } from "react";



const TABLE_HEAD = [
    "Hiring",
    "Job Title",
    "Type",
    "Deadline",
    "Salary",
    "Details",
  ];

const AppliedJobs = () => {

    const [searchField, setSearchField] = useState("");

    const fetch = () =>
      searchField.length
        ? client.get(`/job?search=${searchField}`).then(({ data }) => data.result)
        : client.get(`/job`).then(({ data }) => data.result);
  
    const { data } = useQuery({
      queryKey: [searchField.length ? `/job?search=${searchField}` : `/job`],
      queryFn: () => fetch(),
    });

    return (
        <div>
      <div>
        <Typography variant="h3" className="text-center text-gray-700 mt-6">
          Applied Jobs
        </Typography>
        <Typography className="text-center text-gray-700 mt-4">
          Explore diverse job opportunities in one place, tailored for every
          skill set and career level.
        </Typography>
        <div className="flex justify-center gap-2 w-3/5 my-4 mx-auto">
          <Input
            type="text"
            onChange={(e) => setSearchField(e.target.value)}
            color="teal"
            label="Search a job"
            value={searchField}
            name="search"
          />
        </div>
      </div>
      <Card className="h-full w-full border-2 mb-6">
        <CardBody className="">
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
                        <Button
                        disabled
                          className="bg-teal-700 text-white py-2 px-3 rounded-lg flex items-center"
                        > <span> <FiCheck className="text-lg text-light-green-600"> </FiCheck> </span>
                          Applied
                        </Button>
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

export default AppliedJobs;