import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import JobsList from "./sections/JobsList";
import Header from "./sections/Header";
import Actions from "./sections/Actions";
import Modal from "./components/Modal";

// Create a context
export const JobsContext = createContext();

const App = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  // Move all the API calls to Service layer
  useEffect(() => {
    // Fetch data from API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const createJob = async (newJob) => {
    try {
      const response = await axios.post(apiUrl, newJob);
      setJobs([...jobs, response.data]); // Update jobs list with the newly created job
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  const updateJob = async (id, updatedJob) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, updatedJob);
      const updatedJobs = jobs.map((job) =>
        job.id === id ? response.data : job
      );
      setJobs(updatedJobs);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const hideModal = () => {
    setShowModal(false);
    setCurrentPost({});
  };
  const openModal = () => setShowModal(true);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        createJob,
        showModal,
        openModal,
        currentPost,
        setCurrentPost,
        updateJob,
      }}
    >
      <div className="min-h-full mx-auto p-5">
        {/* Header Section*/}
        <Header />

        <main className="container mx-auto">
          {/* Button Actions */}
          <Actions />

          {/*  Jobs List View */}
          <JobsList />
        </main>
        {showModal && <Modal hideModal={hideModal} />}
      </div>
    </JobsContext.Provider>
  );
};

export default App;
