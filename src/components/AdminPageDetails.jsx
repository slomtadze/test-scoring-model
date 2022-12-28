import React, { useState } from "react";
import AdminPageDetailsItem from "./AdminPageDetailsItem";
import { Form, Formik } from "formik";

const AdminPageDetails = ({ subFieldObj }) => {
  const [editIsActive, setEditIsActive] = useState(false);

  const setEditMode = () => {
    setEditIsActive(true);
  };
  const exitEditMode = () => {
    setEditIsActive(false);
  };

  return (
    <div className="flex flex-col items-center px-12 py-8 relative">
      {editIsActive ? (
        <div className="flex absolute bottom-8 left-16">
          <button
            className="bg-orange-300 px-4 py-[2px] rounded-lg mr-2"
            onClick={setEditMode}
          >
            დადასტურება
          </button>
          <button
            className="bg-orange-300 px-4 py-[2px] rounded-lg"
            onClick={exitEditMode}
          >
            გაუქმება
          </button>
        </div>
      ) : (
        <button
          className="absolute bottom-8 left-16 bg-orange-300 px-4 py-[2px] rounded-lg"
          onClick={setEditMode}
        >
          შეცვლა
        </button>
      )}
      <h1 className="text-2xl font-medium text-amber-900 ">
        {subFieldObj.subField}
      </h1>
      <Formik>
        <Form className="grid grid-rows-2 gap-4 py-4 w-full">
          <div className="flex flex-wrap">
            <AdminPageDetailsItem
              id="რეგიონი"
              label="რეგიონი"
              type="text"
              name="რეგიონი"
              placeholder={subFieldObj.region}
            />
            <AdminPageDetailsItem
              id="სექტორი"
              label="სექტორი"
              type="text"
              name="სექტორი"
              placeholder={subFieldObj.sector}
            />
            <AdminPageDetailsItem
              id="დარგი"
              label="დარგი"
              type="text"
              name="დარგი"
              placeholder={subFieldObj.field}
            />
            <AdminPageDetailsItem
              id="ქვედარგი"
              label="ქვედარგი"
              type="text"
              name="ქვედარგი"
              placeholder={subFieldObj.subField}
            />
            <AdminPageDetailsItem
              id="ხარჯები"
              label="ხარჯები"
              type="number"
              name="ხარჯები"
              placeholder={subFieldObj.exp || subFieldObj.opExp}
            />
            <AdminPageDetailsItem
              id="მინ"
              label="მინიმალური მოგება"
              type="number"
              name="მინ"
              placeholder={subFieldObj.minProfit.toFixed()}
            />
            <AdminPageDetailsItem
              id="მაქს"
              label="მაქსიმალური მოგება"
              type="number"
              name="მაქს"
              placeholder={subFieldObj.maxProfit.toFixed()}
            />
          </div>
          <div className="flex h-max">
            <AdminPageDetailsItem
              id="1"
              label="კითხვა N1"
              type="text"
              name="1"
              placeholder={subFieldObj.question_1}
            />
            <AdminPageDetailsItem
              id="2"
              label="კითხვა N2"
              type="text"
              name="2"
              placeholder={subFieldObj.question_2}
            />
            {subFieldObj.question_3 && (
              <AdminPageDetailsItem
                id="3"
                label="კითხვა N3"
                type="text"
                name="3"
                placeholder={subFieldObj.question_3}
              />
            )}
            {subFieldObj.question_4 && (
              <AdminPageDetailsItem
                id="4"
                label="კითხვა N4"
                type="text"
                name="4"
                placeholder={subFieldObj.question_4}
              />
            )}
            {subFieldObj.question_5 && (
              <AdminPageDetailsItem
                id="5"
                label="კითხვა N5"
                type="text"
                name="5"
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
