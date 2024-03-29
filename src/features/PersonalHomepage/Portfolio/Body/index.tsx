import { useQuery } from "react-query";
import Loader from "./states/Loader";
import ErrorPage from "./states/ErrorPage";
import ProjectTiles from "./ProjectTiles";
import React from "react";

const Body = () => {
  const { isLoading, isError } = useQuery("repos");

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;
  return <ProjectTiles />;
};

export default Body;
