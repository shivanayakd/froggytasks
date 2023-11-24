import React, { useContext } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { JobsContext } from "../App";

const Actions = () => {
  const { openModal } = useContext(JobsContext);

  return (
    <div id="actions" className="py-4">
      <button onClick={openModal} className="btn bg-primary text-white">
        Create Job
        <PlusCircleIcon
          className="h-6 w-6 ml-3 text-gray-300 inline-block cursor-pointer"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Actions;
