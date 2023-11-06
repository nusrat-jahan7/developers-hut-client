import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const JobsCart = () => {
  return (
    <Card className="my-6 w-96 shadow-xl border-4">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Junior Backend Developer
        </Typography>
        <Typography>Hiring : Md. Shirajul Akbar</Typography>
        
        <div className="flex gap-16 mt-3">
          <div>
            <Typography className="text-xl font-semibold text-gray-800">
              $ 2500
            </Typography>
            <Typography className="text-sm">Salary Range</Typography>
          </div>
          <div>
            <Typography className="text-xl font-semibold text-gray-800">
              25/12/23
            </Typography>
            <Typography className="text-sm">Deadline</Typography>
          </div>
        </div>

        <div className="flex gap-10 mt-3">
        <Typography> <li>1 month ago</li></Typography>
        <Typography> <li>132 peaople</li></Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" color="teal" className="flex items-center gap-2">
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
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default JobsCart;
