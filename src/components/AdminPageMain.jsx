import { useState } from "react";
import AdminPageDetails from "./AdminPageDetails";
import "../style.css";

const AdminPageMain = ({ subFields, uploadSubFieldHandler }) => {
  const [selectedSubField, setSelectedSubField] = useState(undefined);
  const [formEditIsActive, setFormEditIsActive] = useState(false);

  const subFieldClickHandler = (event) => {
    if (formEditIsActive) {
      return;
    } else if (!formEditIsActive) {
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
          {subFields.map((subFieldObj, index) => (
            <span
              /* className="my-2 cursor-pointer hover:border-lime-600 border-x-2 border-x-black px-2 mx-2 rounded-lg text-center h-min" */
              key={index}
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
          formEditIsActive={formEditIsActive}
          setFormEditIsActive={setFormEditIsActive}
          uploadSubFieldHandler={uploadSubFieldHandler}
        />
      ) : (
        <h1 className="text-center mt-4 text-red-500">ქვედარგი ვერ მოიძებნა</h1>
      )}
    </div>
  );
};

export default AdminPageMain;
