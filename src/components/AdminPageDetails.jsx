import React from "react";

const AdminPageDetails = ({ subFieldObj }) => {
  return (
    <div className="flex flex-col items-center px-12">
      <h1>{subFieldObj.subField ? subFieldObj.subField : "ar moidzebna"}</h1>
      <div></div>
    </div>
  );
};

export default AdminPageDetails;
