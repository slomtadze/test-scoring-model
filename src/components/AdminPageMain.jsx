import { useState } from "react";
import AdminPageDetails from "./AdminPageDetails";

const AdminPageMain = ({ subFields }) => {
  const [selectedSubField, setSelectedSubField] = useState(undefined);
  const subFieldClickHandler = (event) => {
    /* const subField = subFields.find(
      (subFieldObj) =>
        subFieldObj.subField.trim() === event.target.innerText.trim()
    );

    console.log(event.target.innerText, subField, subFields); */

    setSelectedSubField(
      subFields.find(
        (subFieldObj) =>
          subFieldObj.subField.trim() === event.target.innerText.trim()
      )
    );
  };

  return (
    <div className="h-full w-full">
      <div className="pt-4 px-18 w-full flex flex-col items-center">
        <h1 className="text-center text-xl font-mono">{subFields[0].field}</h1>
        <div className="py-4 w-[90%] flex justify-start flex-wrap h-32 overflow-y-scroll scrollbar-hide">
          {subFields.map((subFieldObj) => (
            <span
              className="my-2 cursor-pointer hover:border-lime-600 border-x-2 border-x-black px-2 mx-2 rounded-lg text-center h-min"
              onClick={subFieldClickHandler}
            >
              {subFieldObj.subField}
            </span>
          ))}
        </div>
      </div>
      {selectedSubField ? (
        <AdminPageDetails subFieldObj={selectedSubField} />
      ) : (
        <h1>ქვედარგი ვერ მოიძებნა</h1>
      )}
    </div>
  );
};

export default AdminPageMain;
