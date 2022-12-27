import { useState } from "react";
import AdminPageDetails from "./AdminPageDetails";

const AdminPageMain = ({ subFields }) => {
  const [selectedSubField, setSelectedSubField] = useState({});
  const subFieldClickHandler = (event) => {
    console.log(event.target.innerText);

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
        <h1 className="text-center text-xl font-mono">აირჩიეთ ქვედარგი</h1>
        <div className="py-4 w-[90%] flex justify-around flex-wrap h-32 overflow-y-scroll">
          {subFields.map((subFieldObj) => (
            <span
              className="my-2 cursor-pointer hover:font-medium border-x border-x-black px-2 rounded-xl text-center h-min"
              onClick={subFieldClickHandler}
            >
              {subFieldObj.subField}
            </span>
          ))}
        </div>
      </div>
      <AdminPageDetails subFieldObj={selectedSubField} />
    </div>
  );
};

export default AdminPageMain;
