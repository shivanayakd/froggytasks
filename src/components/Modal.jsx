import React from "react";
import CreateJob from "../sections/CreateJob";

const Modal = ({ hideModal }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-zinc-900 bg-opacity-25">
      <CreateJob hideModal={hideModal} />
    </div>
  );
};

export default Modal;
