import { useEffect, useRef } from "react";
import { Field } from "formik";

const AdminPageDetailsItem = ({
  label,
  type,
  name,
  placeholder,
  editModeIsActive,
}) => {
  return (
    <div className="flex bg-slate-50 p-2 rounded-lg m-2">
      <div className="flex flex-col">
        <label
          className="mb-2 pb-2 font-semibold border-b border-neutral-300"
          htmlFor={name}
        >
          {label}
        </label>
        {editModeIsActive ? (
          <Field
            className="bg-transparent px-2 placeholder-gray-500"
            type={type}
            name={name}
            placeholder={`${placeholder}`}
          />
        ) : (
          <h1 className="text-sm text-gray-500">{placeholder}</h1>
        )}
      </div>
    </div>
  );
};

export default AdminPageDetailsItem;
