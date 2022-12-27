import React from "react";

const AdminPageDetails = ({ subFieldObj }) => {
  console.log(subFieldObj);
  return (
    <div className="flex flex-col items-center px-12 bg-white h-fit">
      <h1>{subFieldObj.subField ? subFieldObj.subField : "ar moidzebna"}</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1 h-full ">
          <h1>
            რეგიონი: <span>{subFieldObj.sector}</span>
          </h1>
          <h1>
            სექტორი: <span>{subFieldObj.sector}</span>
          </h1>
          <h1>
            დარგი: <span>{subFieldObj.field}</span>
          </h1>
          <h1>
            ქვედარგი: <span>{subFieldObj.subField}</span>
          </h1>
          <h1>
            minprofit: <span>{subFieldObj.subField}</span>
          </h1>
          <h1>
            maxProfit: <span>{subFieldObj.subField}</span>
          </h1>
          <h1>{subFieldObj.opExp ? subFieldObj.opExp : subFieldObj.exp}</h1>
        </div>
        <div className="col-span-2 h-full "></div>
      </div>
    </div>
  );
};

export default AdminPageDetails;
