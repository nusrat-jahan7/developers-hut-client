import { Chip, Typography } from "@material-tailwind/react";
import { BsArrowRight } from "react-icons/bs";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import person1 from "../../public/images/person-1.jpg";
import person2 from "../../public/images/person-2.jpg";
import person3 from "../../public/images/person-3.jpg";
import person4 from "../../public/images/person-4.jpg";

const CareerAdvice = () => {
  return (
    <div>
      <div className="mt-20">
        <Typography variant="h3" className="text-center text-gray-700 mt-6">
          Top Career Advice
        </Typography>
        <Typography className="text-2xl flex justify-center gap-3 items-center text-gray-700 mt-4">
          Browse Advice
          <span>
            <BsArrowRight></BsArrowRight>
          </span>
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        <Card className="mt-6  bg-teal-50">
          <CardHeader color="blue-gray" className="relative ">
            <img src={person1} alt="card-image" />
          </CardHeader>

          <CardBody>
            <div className="mb-3">
              <Chip
                className="capitalize w-max"
                size="sm"
                value="assessments"
                color="teal"
              />
            </div>
            <Typography className="text-xl">
              13 Awesome Free Career Self Assessments!
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6  bg-teal-50">
          <CardHeader color="blue-gray" className="relative ">
            <img src={person2} alt="card-image" />
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Chip
                className="capitalize w-max"
                size="sm"
                value="jobs"
                color="teal"
              />
            </div>
            <Typography className="text-xl">
              How To Start Looking For A Job And Apply!
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6  bg-teal-50">
          <CardHeader color="blue-gray" className="relative ">
            <img src={person3} alt="card-image" />
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Chip
                className="capitalize w-max"
                size="sm"
                value="resume"
                color="teal"
              />
            </div>
            <Typography className="text-xl">
              High Standards Resume Samples and Tricks !
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6  bg-teal-50">
          <CardHeader color="blue-gray" className="relative ">
            <img src={person4} alt="card-image" />
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Chip
                className="capitalize w-max"
                size="sm"
                value="interviews"
                color="teal"
              />
            </div>
            <Typography className="text-xl">
              100 Top Interviews Questions For Preparation!
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CareerAdvice;
