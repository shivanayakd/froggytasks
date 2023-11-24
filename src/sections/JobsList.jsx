import React, { useContext } from "react";
import Card from "../components/Card";
import { JobsContext } from "../App";

const JobsList = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <div
      id="jobs-list"
      className="grid lg:grid-flow-row lg:grid-cols-2 bg-light-gray"
    >
      {jobs.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </div>
  );
};

export default JobsList;
