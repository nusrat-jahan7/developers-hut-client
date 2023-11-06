/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Slider from "../components/Slider";
import client from "../api";
import JobsCategory from "./JobsCategory";
import { useEffect, useState } from "react";

const Home = () => {
  const [filteredString, setFilteredString] = useState("");

  const fetch = () =>
    filteredString.length
      ? client.get(`/job?type=${filteredString}`).then(({ data }) => data.result)
      : client.get("/job").then(({ data }) => data.result);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["job"],
    queryFn: () => fetch(),
  });

  useEffect(() => {
    refetch();
  }, [filteredString]);

  return (
    <div>
      <Slider />
      <JobsCategory setFilteredString={setFilteredString} data={data} />
    </div>
  );
};

export default Home;
