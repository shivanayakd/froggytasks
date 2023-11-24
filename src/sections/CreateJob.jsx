import React, { useState, useEffect, useContext } from "react";
import Input from "../components/Form/input";
import { NEXT, SAVE, STEP_1, STEP_2, CANCEL, formFields } from "../constants";
import { JobsContext } from "../App";

const CreateJob = ({ hideModal }) => {
  const { createJob, currentPost, updateJob } = useContext(JobsContext);
  const [currentStep, setCurrentStep] = useState(STEP_1);
  const [isLoading, setLoading] = useState(false);

  const initialValues = {
    jobtitle: "",
    companyname: "",
    industry: "",
    location: "",
    remotetype: "",
    experiencemin: "",
    experiencemax: "",
    salarymin: "",
    salarymax: "",
    totalemployee: "",
    applytype: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (currentPost) {
      setFormValues(currentPost);
    }
  }, [currentPost]);

  const valuesMappedFields = formFields.map((field) => {
    if (field.type === "radio") {
      return {
        ...field,
        items: field.items.map((val) => {
          return { ...val, selectedVal: formValues[val.name] };
        }),
      };
    } else {
      return { ...field, value: formValues[field.name] };
    }
  });

  const step1_fields = valuesMappedFields.filter((val) => val.step === STEP_1);
  const step2_fields = valuesMappedFields.filter((val) => val.step === STEP_2);
  const curentStepFields = currentStep === STEP_1 ? step1_fields : step2_fields;
  const singleColFields = curentStepFields.filter((item) => !item.multiCol);
  const multiColFields = curentStepFields.filter((item) => item.multiCol);

  const isFormValid = () => {
    if (
      formValues.jobtitle == "" ||
      formValues.companyname == "" ||
      formValues.industry == ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (formValues.id) {
      await updateJob(formValues.id, formValues);
    } else {
      await createJob(formValues);
    }
    setLoading(false);
    hideModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (currentStep === STEP_1) {
      setCurrentStep(STEP_2);
    } else {
      handleSubmit();
    }
  };

  const createFields = (fields) =>
    fields?.map((field) => (
      <Input onChange={handleChange} key={field.id} {...field} />
    ));

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between bg-white p-8 w-[36rem] h-[35rem]"
    >
      <div>
        <div
          id="modal-header"
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-xl font-normal text-black">Create a job</h2>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          <p className="text-base font-medium text-black">{currentStep}</p>
        </div>

        <div id="modal-body">
          <div
            className={`flex flex-col gap-6 ${
              currentStep === STEP_2 && "flex-col-reverse"
            }`}
          >
            <div className="form-grid grid-cols-1">
              {createFields(singleColFields)}
            </div>
            <div className="form-grid grid-cols-2">
              {createFields(multiColFields)}
            </div>
          </div>
        </div>
      </div>
      <div id="modal-footer" className="flex flex-row-reverse gap-5">
        <button
          type="submit"
          disabled={!isFormValid()}
          className="btn bg-primary text-white disabled:opacity-25 flex gap-2"
          title="Please fill the mandatory fields"
          onClick={(e) => handleUpdate(e)}
        >
          {isLoading && (
            <div class="border-gray-300 h-6 w-6 animate-spin rounded-full border-4 border-t-light-gray" />
          )}
          {currentStep === STEP_1 ? NEXT : SAVE}
        </button>
        {currentStep === STEP_2 && (
          <button
            type="cancel"
            className="btn border border-primary  text-primary"
            onClick={() => hideModal()}
          >
            {CANCEL}
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateJob;
