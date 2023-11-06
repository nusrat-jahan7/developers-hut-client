import { useQuery } from "@tanstack/react-query";
import client from "../api";

const DetailsJob = () => {
    const { data } = useQuery({
        queryKey: ["job", "_id"],
        queryFn: () => client.get(`/job/${job._id}`).then(({ data }) => data?.result),
      });
    
      console.log(data);
    
    //   data?.map((job) => console.log(job));
    return (
        <div>
            <h1>Hellowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww!!!</h1>
        </div>
    );
};

export default DetailsJob;