import {
  Card,
  Typography,
  CardBody,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import client from "../api";
import { formatDateFromTimestamp } from "../utils";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

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
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => {
              handleOpen(), setEditedData(null);
            }}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default MyJobs;
