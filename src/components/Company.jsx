import { Typography } from "@material-tailwind/react";
import img1 from "../../public/images/m-logo.jpg";
import img3 from "../../public/images/a-logo.png";
import img2 from "../../public/images/n-logo.jpg";
import img4 from "../../public/images/c-logo.jpg";
import img5 from "../../public/images/s-logo.jpg";
import img6 from "../../public/images/b-logo.jpg";
import img7 from "../../public/images/x-logo.jpg";
import img8 from "../../public/images/download.png";

const Company = () => {
  return (
    <div className="my-20">
      <div>
        <Typography variant="h3" className="text-center text-gray-700 mt-6">
          Company We've Helped
        </Typography>
        <Typography className="w-3/4 mx-auto text-gray-700 mt-4">
        Since our establishment back in 2011, we have had the pleasure to work with companies in a number of industries. Whether you are looking for an industrial web developing agency, a senior living web developing agency or anything in between, we can help.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 max-w-4xl mx-auto cursor-pointer">
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img1} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img2} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img3} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img4} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img5} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img6} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img7} alt="" />
        <img className="w-48 h-48 border-2 rounded-xl shadow-xl transform transition duration-500 hover:scale-110" src={img8} alt="" />
      </div>
    </div>
  );
};

export default Company;
