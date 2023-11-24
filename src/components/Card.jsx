import React, { useContext } from "react";
import { netflixLogo } from "../assets/images";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { JobsContext } from "../App";

const Card = ({ post }) => {
  const { openModal, setCurrentPost } = useContext(JobsContext);

  const formatnumber = (num) => new Intl.NumberFormat().format(num);

  const handleEdit = () => {
    setCurrentPost(post);
    openModal();
  }
  
  return (
    <>
      <div className="flex bg-white px-6 py-4 m-5 gap-5 border-0 border-light-gray rounded-xl justify-between">
        <div>
          <img src={netflixLogo} alt={post.companyname} />
        </div>
        <div className="flex grow flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-2xl">{post.jobtitle}</h2>
            <p className="text-base">{post.companyname}</p>
            <p className="text-gray">{post.location}</p>
          </div>
          <div className="flex flex-col gap-1 text-black">
            <p>{post.remotetype}</p>
            <p>
              {`Experience(${post.experiencemin} - ${post.experiencemax} years)`}
            </p>
            <p>{`INR (₹) ${formatnumber(post.salarymin)} - ${formatnumber(
              post.salarymax
            )} / Month`}</p>
            <p>{`${post.totalemployee} employees`}</p>
          </div>
          <div className="">
            {post.applytype == "quickapply" && (
              <button type="submit" className="btn bg-primary text-white">
                Apply Now
              </button>
            )}
            {post.applytype == "externalapply" && (
              <button
                type="submit"
                className="btn border border-primary text-primary"
              >
                External Apply
              </button>
            )}
          </div>
        </div>
        <div>
          <PencilSquareIcon
            className="h-5 w-5 ml-3 text-slate-500 inline-block cursor-pointer"
            aria-hidden="true"
            onClick={handleEdit}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
