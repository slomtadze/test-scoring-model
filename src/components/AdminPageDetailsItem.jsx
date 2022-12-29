import { useState } from "react";
import { Field } from "formik";

const AdminPageDetailsItem = ({
  label,
  type,
  name,
  placeholder,
  editModeIsActive,
}) => {
  const [editIsActive, setEditIsActive] = useState(false);

  const editHandler = () => {
    setEditIsActive((prev) => !prev);
  };
  return (
    <div className="flex bg-slate-50 p-2 rounded-lg m-2">
      <div className="relative flex flex-col">
        <label
          className="mb-2 pb-2 font-semibold border-b border-neutral-300"
          htmlFor={name}
        >
          {label}
        </label>
        <h1
          className="absolute top-0 right-0 cursor-pointer"
          onClick={editHandler}
        >
          {editIsActive ? "X" : "Edit"}
        </h1>
        <Field
          className="bg-transparent px-2 placeholder-gray-500 outline-none text-green-700"
          id={name}
          type={type}
          name={name}
          placeholder={`${placeholder}`}
          disabled={!editIsActive ? true : false}
        />
      </div>
    </div>
  );
};

export default AdminPageDetailsItem;
