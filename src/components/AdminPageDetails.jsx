import React, { useState, useEffect } from "react";
import AdminPageDetailsItem from "./AdminPageDetailsItem";
import { Form, Formik } from "formik";
import uniqid from "uniqid";
import { useCallback } from "react";

const initialValues = {
  sector: "",
  field: "",
  formula: "",
  profit: "",
  region: "",
  subField: "",
  minProfit: "",
  maxProfit: "",
  exp: "",
  question_1: "",
  question_2: "",
  question_3: "",
  question_4: "",
  question_5: "",
};

const AdminPageDetails = ({ subFieldObj, setFormEditIsActive }) => {
  const renderOptions = useCallback(() => {
    const array = [];
    for (const [key, value] of Object.entries(subFieldObj)) {
      if (!key.includes("question")) {
        array.push(
          <AdminPageDetailsItem
            key={uniqid()}
            id={key}
            label={key}
            type="text"
            name={key}
            placeholder={value}
            setFormEditIsActive={setFormEditIsActive}
          />
        );
      }
    }
    return array;
  }, [subFieldObj]);
  const renderQuestions = useCallback(() => {
    const array = [];
    for (const [key, value] of Object.entries(subFieldObj)) {
      if (key.includes("question")) {
        array.push(
          <AdminPageDetailsItem
            key={uniqid()}
            id={key}
            label={key}
            type="text"
            name={key}
            placeholder={value}
            setFormEditIsActive={setFormEditIsActive}
          />
        );
      }
    }
    return array;
  }, [subFieldObj]);

  const onFormSubmitHandler = useCallback((values, onSubmitProps) => {
    console.log(values, onSubmitProps);
    onSubmitProps.resetForm();
    const changedProperties = [];
    for (const [key, value] of Object.entries(values)) {
      if (value !== "") {
        changedProperties.push([key, value]);
      }
    }
    const changedPropertiesObjcect = Object.fromEntries(changedProperties);
    const updatedObject = { ...subFieldObj, ...changedPropertiesObjcect };

    /* uploadSubFieldHandler(updatedObject); */

    console.log(updatedObject);
  }, []);

  return (
    <div className="flex flex-col items-center px-12 py-8">
      <h1 className="text-2xl font-medium text-amber-900 ">
        {subFieldObj.subField}
      </h1>
      <Formik initialValues={initialValues} onSubmit={onFormSubmitHandler}>
        <Form className="flex flex-col py-4 w-full relative">
          <div className="flex flex-wrap h-2/3 overflow-y-scroll scrollbar-scroll">
            {renderOptions()}
          </div>
          <div className="flex h-1/3 overflow-y-scroll scrollbar-scroll">
            {renderQuestions()}
          </div>
          <div className="flex">
            <button
              type="reset"
              className="py-2 px-4 bg-orange-300 rounded-xl hover:bg-orange-500 duration-150 hover:text-white"
            >
              გასუფთავება
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-orange-300 rounded-xl hover:bg-orange-500 duration-150 hover:text-white"
            >
              დადასტურება
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminPageDetails;
