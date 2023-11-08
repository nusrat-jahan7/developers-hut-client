import {
  Card,
  Typography,
  CardBody,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";

import DatePicker from "react-datepicker";
import { useQuery } from "@tanstack/react-query";
import client from "../api";
import { formatDateFromTimestamp } from "../utils";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../components/Loader";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TABLE_HEAD = [
  "Hiring",
  "Job Title",
  "Type",
  "Deadline",
  "Salary",
  "Actions",
];

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const [deadline, setDeadline] = useState(editedData.deadline);
  const [jobType, setJobType] = useState("");
  console.log(editedData);

  const handleOpen = () => setOpen(!open);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`/me/job`],
    queryFn: () =>
      client
        .get(`/me/job?email=${user?.email}`)
        .then(({ data }) => data?.result),
    enabled: !!user?.email || user?.email !== null,
    refetchInterval: 2500,
    refetchIntervalInBackground: false,
  });

  const handleEdit = (id) => {
    const filteredData = data.find((el) => el._id === id);
    setEditedData(filteredData);
    setOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      reverseButtons: false,
    }).then((result) => {
      if (result.isConfirmed) {
        client.delete(`/me/job/${id}?email=${user?.email}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "Your job has been deleted.", "success");
        });
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const payload = {
      title: form.title.value,
      type: jobType === "" ? editedData.type : jobType,
      deadline: deadline,
      min_salary: form.min_salary.value,
      max_salary: form.max_salary.value,
      banner: form.banner.value,
      description: form.description.value,
      company: {
        name: form.company_name.value,
        logo: form.company_logo.value,
      },
      created_by: {
        name: user.displayName,
        email: user.email,
      },
    };

    client
      .patch(`/me/job/${editedData?._id}?email=${user.email}`, payload)
      .then(() => {
        toast.success("Job update successfully");
        refetch();
        handleOpen();
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {data?.length === 0 ? (
        <h2 className="text-center text-3xl font-semibold mt-20">
          No job posted yet!
        </h2>
      ) : (
        <>
          <div>
            <Typography variant="h3" className="text-center text-gray-700 mt-6">
              My Jobs
            </Typography>
            <Typography className="text-center text-gray-700 mt-4">
              Explore diverse job opportunities in one place, tailored for every
              skill set and career level.
            </Typography>
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
                        <tr key={created_by?._id}>
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
                            <Typography>
                              $ {min_salary} - {max_salary}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex gap-2 items-center">
                              <AiFillEdit
                                onClick={() => handleEdit(_id)}
                                className="cursor-pointer h-10 w-10 rounded-md p-2 bg-blue-500 text-white "
                              />
                              <AiFillDelete
                                onClick={() => handleDelete(_id)}
                                className="cursor-pointer h-10 w-10 rounded-md p-2 bg-red-500 text-white "
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </>
      )}

      <Dialog size="xxl" open={open} handler={handleOpen}>
        <DialogHeader>Edit job</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="my-6">
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="mb-4 font-medium"
              >
                New Job Information
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Job Title
              </Typography>
              <Input
                color="teal"
                type="text"
                name="title"
                required
                label="Title of the job"
                defaultValue={editedData?.title}
              />
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 mt-4 font-medium"
              >
                Job Banner URL
              </Typography>
              <Input
                color="teal"
                type="text"
                name="banner"
                label="Photo URL of the banner"
                defaultValue={editedData?.banner}
              />

              <div className="flex flex-col lg:flex-row gap-4 mx-auto ">
                <div className="mx-auto w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Job Category
                  </Typography>
                  <Select
                    name="type"
                    color="teal"
                    variant="outlined"
                    label="Select type of the Job"
                    onChange={(value) => setJobType(value)}
                  >
                    <Option value="onsite">On Site</Option>
                    <Option value="remote">Remote Job</Option>
                    <Option value="hybrid">Hybrid</Option>
                    <Option value="part_time">Part Time</Option>
                  </Select>
                </div>

                <div className="mx-auto w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Minimum Salary
                  </Typography>
                  <Input
                    color="teal"
                    type="text"
                    name="min_salary"
                    label="Min salary amount"
                    defaultValue={editedData?.min_salary}
                    required
                  />
                </div>

                <div className="mx-auto w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Maximum Salary
                  </Typography>
                  <Input
                    color="teal"
                    type="text"
                    name="max_salary"
                    label="Max salary amount"
                    defaultValue={editedData?.max_salary}
                    required
                  />
                </div>
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Deadline Date
                  </Typography>
                  <DatePicker
                    required
                    name="deadline"
                    className="border rounded-lg !border-blue-gray-200 focus:!border-t-gray-900 h-10 w-full focus:outline-teal-500  px-2"
                    placeholderText="Select Deadline Date"
                    selected={
                      new Date(deadline)
                    }
                    onChange={(date) => setDeadline(date)}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                      >
                        <mask id="ipSApplication0">
                          <g
                            fill="none"
                            stroke="#fff"
                            strokeLinejoin="round"
                            strokeWidth="4"
                          >
                            <path
                              strokeLinecap="round"
                              d="M40.04 22v20h-32V22"
                            ></path>
                            <path
                              fill="#fff"
                              d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                            ></path>
                          </g>
                        </mask>
                        <path
                          fill="currentColor"
                          d="M0 0h48v48H0z"
                          mask="url(#ipSApplication0)"
                        ></path>
                      </svg>
                    }
                  />
                </div>
              </div>

              <div className="w-full flex flex-col justify-center lg:flex-row gap-4 my-auto ">
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Company Name
                  </Typography>
                  <Input
                    color="teal"
                    type="text"
                    name="company_name"
                    label="Your company name"
                    defaultValue={editedData?.company.name}
                    required
                  />
                </div>
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Company Logo
                  </Typography>
                  <Input
                    color="teal"
                    type="text"
                    name="company_logo"
                    label="Your company logo"
                    defaultValue={editedData?.company.logo}
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row gap-4">
                <div className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 mt-4 font-medium"
                  >
                    Description
                  </Typography>
                  <Textarea
                    name="description"
                    variant="outlined"
                    label="Short Description"
                    className="w-full"
                    defaultValue={editedData?.description}
                  />
                </div>
              </div>
            </div>
            <Button type="submit" color="teal">
              Edit this Job
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default MyJobs;
