/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Slider from "../components/Slider";
import client from "../api";
import JobsCategory from "./JobsCategory";
import { useEffect, useState } from "react";
import Feature from "../components/Feature";
import CareerAdvice from "../components/CareerAdvice";

const Home = () => {
  const [filteredString, setFilteredString] = useState("alljob");

  const fetch = () =>
    filteredString === "alljob"
    ? client.get("/job").then(({ data }) => data.result)
      : client.get(`/job?type=${filteredString}`).then(({ data }) => data.result);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`job/${filteredString}`],
    queryFn: () => fetch(),
  });


  return (
    <div>
      <Slider />
      <JobsCategory setFilteredString={setFilteredString} data={data} isLoading={isLoading} />
      <Feature/>
      <CareerAdvice/>
    </div>
  );
};

export default Home;
