import { Spinner } from "@material-tailwind/react";

const Loader = () => {
    return (
        <div className="h-32 flex justify-center items-center">
            <Spinner color="teal" />
        </div>
    );
};

export default Loader;