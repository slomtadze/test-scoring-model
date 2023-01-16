import React, { useState, useEffect } from "react";
import AdminPageDetailsItem from "./AdminPageDetailsItem";
import AdminPageDetailsButtons from "./AdminPageDetailsButtons";
import { Form, Formik } from "formik";

const AdminPageDetails = ({
  subFieldObj,
  editIsActive,
  setEditIsActive,
  uploadSubFieldHandler,
}) => {
  console.log("Details Render");

  const setEditMode = () => {
    setEditIsActive(true);
  };
  const exitEditMode = () => {
    setEditIsActive(false);
  };
  const initialValues = {
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

  const renderOptions = () => {
    const array = [];
    for (const [key, value] of Object.entries(subFieldObj)) {
      if (
        !key.includes("question") &&
        !key.includes("formula") &&
        !key.includes("sector")
      ) {
        array.push(
          <AdminPageDetailsItem
            id={key}
            label={key}
            type="text"
            name={key}
            placeholder={value}
          />
        );
      }
    }
    return array;
  };
  const renderQuestions = () => {
    const array = [];
    for (const [key, value] of Object.entries(subFieldObj)) {
      if (key.includes("question")) {
        array.push(
          <AdminPageDetailsItem
            id={key}
            label={key}
            type="text"
            name={key}
            placeholder={value}
          />
        );
      }
    }
    return array;
  };

  const onFormSubmitHandler = (values) => {
    //console.log(values);
    const changedProperties = [];
    for (const [key, value] of Object.entries(values)) {
      if (value !== "") {
        changedProperties.push([key, value]);
      }
    }
    const changedPropertiesObjcect = Object.fromEntries(changedProperties);
    const updatedObject = { ...subFieldObj, ...changedPropertiesObjcect };

    uploadSubFieldHandler(updatedObject);
  };

  return (
    <div className="flex flex-col items-center px-12 py-8">
      <h1 className="text-2xl font-medium text-amber-900 ">
        {subFieldObj.subField}
      </h1>
      <Formik initialValues={initialValues} onSubmit={onFormSubmitHandler}>
        <Form className="flex flex-col py-4 w-full relative">
          {/* <AdminPageDetailsButtons
            editIsActive={editIsActive}
            exitEditMode={exitEditMode}
            setEditMode={setEditMode}
          /> */}

          <div className="flex flex-wrap h-2/3 overflow-y-scroll scrollbar-scroll">
            {renderOptions()}
          </div>
          <div className="flex h-1/3 overflow-y-scroll scrollbar-scroll">
            {renderQuestions()}
          </div>
          <button className="absolute left-2 -bottom-8 py-2 px-4 bg-orange-300 rounded-xl hover:bg-orange-500 duration-150 hover:text-white">
            დადასტურება
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminPageDetails;
