import { useState } from "react";
import AdminPageDetails from "./AdminPageDetails";
import "../style.css";

const AdminPageMain = ({ subFields, uploadSubFieldHandler }) => {
  const [selectedSubField, setSelectedSubField] = useState(undefined);
  const [editIsActive, setEditIsActive] = useState(false);

  const subFieldClickHandler = (event) => {
    /* const subField = subFields.find(
      (subFieldObj) =>
        subFieldObj.subField.trim() === event.target.innerText.trim()
    ); */

    if (!editIsActive) {
      setSelectedSubField(
        subFields.find(
          (subFieldObj) =>
            subFieldObj.subField.trim() === event.target.innerText.trim()
        )
      );
    }
  };

  return (
    <div className="h-full w-full">
      <div className="pt-4 px-18 w-full flex flex-col items-center">
        <h1 className="text-center text-xl font-mono">{subFields[0].field}</h1>
        <div className="py-4 w-[90%] flex justify-start flex-wrap h-32 overflow-y-scroll scrollbar-scroll">
          {subFields.map((subFieldObj) => (
            <span
              /* className="my-2 cursor-pointer hover:border-lime-600 border-x-2 border-x-black px-2 mx-2 rounded-lg text-center h-min" */
              className="my-2 cursor-pointer hover:border-lime-600 border-2 p-2 mx-2 rounded-lg text-center h-min bg-slate-50 hover:bg-slate-100"
              onClick={subFieldClickHandler}
            >
              {subFieldObj.subField}
            </span>
          ))}
        </div>
      </div>
      {selectedSubField ? (
        <AdminPageDetails
          subFieldObj={selectedSubField}
          editIsActive={editIsActive}
          setEditIsActive={setEditIsActive}
          uploadSubFieldHandler={uploadSubFieldHandler}
        />
      ) : (
        <h1 className="text-center mt-4 text-red-500">
          ქვედარგი არ არის არჩეული
        </h1>
      )}
    </div>
  );
};

export default AdminPageMain;
