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
  const setEditMode = () => {
    console.log(subFieldObj.subField);
    setEditIsActive(true);
  };
  const exitEditMode = () => {
    console.log(subFieldObj.subField);
    setEditIsActive(false);
  };

  const onFormSubmitHandler = (values) => {
    setEditIsActive(false);
    console.log(values);
    uploadSubFieldHandler(values);
  };

  return (
    <div className="flex flex-col items-center px-12 py-8 relative">
      <h1 className="text-2xl font-medium text-amber-900 ">
        {subFieldObj.subField}
      </h1>
      <Formik
        initialValues={{
          minProfit: subFieldObj.minProfit,
          maxProfit: subFieldObj.maxProfit,
          exp: subFieldObj.exp || subFieldObj.opExp,
          question_1: subFieldObj.question_1,
          question_2: subFieldObj.question_2,
          question_3: subFieldObj.question_3,
          question_4: subFieldObj.question_4,
          question_5: subFieldObj.question_5,
        }}
        onSubmit={onFormSubmitHandler}
      >
        <Form className="grid grid-rows-2 gap-4 py-4 w-full">
          <AdminPageDetailsButtons
            editIsActive={editIsActive}
            exitEditMode={exitEditMode}
            setEditMode={setEditMode}
          />
          <div className="flex flex-wrap">
            <AdminPageDetailsItem
              id="region"
              label="რეგიონი"
              type="text"
              name="region"
              placeholder={subFieldObj.region}
            />
            <AdminPageDetailsItem
              id="sector"
              label="სექტორი"
              type="text"
              name="sector"
              placeholder={subFieldObj.sector}
            />
            <AdminPageDetailsItem
              id="field"
              label="დარგი"
              type="text"
              name="field"
              placeholder={subFieldObj.field}
            />
            <AdminPageDetailsItem
              id="subField"
              label="ქვედარგი"
              type="text"
              name="subField"
              placeholder={subFieldObj.subField}
            />
            <AdminPageDetailsItem
              editModeIsActive={editIsActive}
              id="exp"
              label="ხარჯები"
              type="number"
              name="exp"
              placeholder={subFieldObj.exp || subFieldObj.opExp}
            />
            <AdminPageDetailsItem
              editModeIsActive={editIsActive}
              id="minProfit"
              label="მინიმალური მოგება"
              type="number"
              name="minProfit"
              placeholder={subFieldObj.minProfit.toFixed(3)}
            />
            <AdminPageDetailsItem
              editModeIsActive={editIsActive}
              id="maxProfit"
              label="მაქსიმალური მოგება"
              type="number"
              name="maxProfit"
              placeholder={subFieldObj.maxProfit.toFixed(3)}
            />
          </div>
          <div className="flex h-max">
            <AdminPageDetailsItem
              editModeIsActive={editIsActive}
              id="question_1"
              label="კითხვა N1"
              type="text"
              name="question_1"
              placeholder={subFieldObj.question_1}
            />
            <AdminPageDetailsItem
              editModeIsActive={editIsActive}
              id="question_2"
              label="კითხვა N2"
              type="text"
              name="question_2"
              placeholder={subFieldObj.question_2}
            />
            {subFieldObj.question_3 && (
              <AdminPageDetailsItem
                editModeIsActive={editIsActive}
                id="question_3"
                label="კითხვა N3"
                type="text"
                name="question_3"
                placeholder={subFieldObj.question_3}
              />
            )}
            {subFieldObj.question_4 && (
              <AdminPageDetailsItem
                editModeIsActive={editIsActive}
                id="question_4"
                label="კითხვა N4"
                type="text"
                name="question_4"
                placeholder={subFieldObj.question_4}
              />
            )}
            {subFieldObj.question_5 && (
              <AdminPageDetailsItem
                editModeIsActive={editIsActive}
                id="question_5"
                label="კითხვა N5"
                type="text"
                name="question_5"
                placeholder={subFieldObj.question_5}
              />
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminPageDetails;
