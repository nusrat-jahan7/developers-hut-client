/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FiEdit2, FiUser } from "react-icons/fi";
import { formatDateFromTimestamp } from "../utils";
import { Link } from "react-router-dom";

const JobsCart = ({ job }) => {
  // console.log(job);
  const { createdAt, applicants, created_by, deadline, max_salary, min_salary, title, _id } =
    job;
  return (
    <Card className="my-6 shadow-xl">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography>Hiring : {created_by.name}</Typography>
        
          <div className="my-3">
            <Typography className="text-xl text-gray-400">
              $ {max_salary} - {min_salary}
            </Typography>
            <Typography className="text-sm text-gray-900">Salary Range</Typography>
          </div>
          <div>
            <Typography className="text-xl text-gray-400">
              {formatDateFromTimestamp(deadline)}
            </Typography>
            <Typography className="text-sm text-gray-900">Deadline</Typography>
          </div>

        <div className="flex gap-5 mt-3">
          <Typography className="flex items-center gap-2">
            <span>
              <FiEdit2 className="text-gray-900"></FiEdit2>
            </span>
            {formatDateFromTimestamp(createdAt)}
          </Typography>
          <Typography className="flex items-center gap-2">
            <span>
                <FiUser className="text-gray-900"></FiUser>
            </span>
            {applicants} people
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Link to={`/all-jobs/${_id}`} size="sm" className="flex items-center gap-2 bg-teal-700 text-white py-2 px-3 rounded-lg">
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </a>
      </CardFooter>
    </Card>
  );
};

export default JobsCart;
