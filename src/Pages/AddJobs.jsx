import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import client from "../api";
// import { useState } from "react";
// import DatePicker from "react-datepicker";

const AddJobs = () => {
  // const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const min_salary = form.min_salary.value;
    const max_salary = form.max_salary.value;
    const date = form.date.value;
    const deadline = form.deadline.value;
    const company_name = form.company_name.value;
    const logo = form.logo.value;
    const description = form.description.value;
    // console.log(name, image, title, category, min_salary, max_salary, date, deadline,company_name, logo, description);

    const payload = {
      name,
      image,
      title,
      category,
      min_salary,
      max_salary,
      date,
      deadline,
      company_name,
      logo,
      description,
    };

    client.post('/job', payload).then((data) => console.log(data))

  };


  return (
    <div>
      <section className="p-6">
        <Typography variant="h3" className="text-center text-gray-700 mt-6">
          Add a Job
        </Typography>
        <Typography className="text-center text-gray-700 mt-4">
          Explore diverse job opportunities in one place, tailored for every
          skill set and career level.
        </Typography>
        <form
          onSubmit={handleSubmit}
          action=""
          className="container flex flex-col mx-auto mt-4 space-y-12"
        >
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-xl">
            <div className="grid grid-cols-6 gap-4 w-full mx-auto col-span-full ">
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  name="name"
                  placeholder="name"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Job Title
                </Typography>
                <Input
                  size="lg"
                  name="title"
                  placeholder="Ex- Jr.Web Developer"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Job Banner URL
                </Typography>
                <Input
                  required
                  size="lg"
                  name="image"
                  type="text"
                  placeholder="https://"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Job Category
                </Typography>
                <select
                  required
                  name="category"
                  className=" border-teal-700 bottom-2 focus:border-t-teal-500"
                >
                  <option value={""} disabled selected>
                    Select a Category
                  </option>
                  <option value={"remote"}>Remote</option>
                  <option value={"hybrid"}>Hybrid</option>
                  <option value={"part_time"}>Part Time</option>
                  <option value={"full_time"}>Full Time</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Minimum Salary
                </Typography>
                <Input
                  size="lg"
                  name="min_salary"
                  placeholder="$"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Maximum Salary
                </Typography>
                <Input
                  size="lg"
                  name="max_salary"
                  placeholder="$"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Posting Date
                </Typography>
                <Input
                  size="lg"
                  name="date"
                  placeholder="name"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Application Deadline
                </Typography>
                <Input
                  size="lg"
                  name="deadline"
                  placeholder="deadline"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Company Name
                </Typography>
                <Input
                  size="lg"
                  name="company_name"
                  placeholder="companyName"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Company Logo
                </Typography>
                <Input
                  required
                  size="lg"
                  name="logo"
                  type="text"
                  placeholder="https://"
                  color="teal"
                  className=" !border-teal-200 focus:!border-t-teal-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="col-span-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Job Description
                </Typography>
                <Textarea name="description" label="Describe Requirements" />
              </div>
            </div>
            <Button type="submit" color="teal" className="w-48 mx-auto">
              Add Job
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJobs;
