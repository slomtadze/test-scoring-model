import { useState } from "react";
import { Field } from "formik";
import { translateLabel } from "../Helpers/translateLabel";

const AdminPageDetailsItem = ({
  label,
  type,
  name,
  placeholder,
  editModeIsActive,
}) => {
  const [editIsActive, setEditIsActive] = useState(false);

  const [valueIsShown, setValueIsShown] = useState(false);

  const showValueHandler = () => {
    console.log("changes");
    setValueIsShown(true);
  };
  const hideValueHandler = () => {
    setValueIsShown(false);
  };

  const editHandler = () => {
    setEditIsActive((prev) => !prev);
  };
  const cancelEditHandler = () => {
    setEditIsActive((prev) => !prev);
  };
  return (
    <div className="flex bg-slate-50 p-2 rounded-lg m-2">
      <div className="relative flex flex-col" onMouseLeave={hideValueHandler}>
        <label
          className="mb-2 pb-2 font-semibold border-b border-neutral-300"
          htmlFor={name}
        >
          {translateLabel(label)}
        </label>
        <div className="absolute top-0 right-0 cursor-pointer">
          {editIsActive ? (
            <div>
              <span className="mr-2">sb</span>
              <span onClick={cancelEditHandler}>cns</span>
            </div>
          ) : (
            <div onClick={editHandler}>Edit</div>
          )}
        </div>
        <Field
          className="bg-transparent px-2 placeholder-gray-500 outline-none text-green-700"
          id={name}
          type={type}
          name={name}
          placeholder={`${placeholder}`}
          disabled={!editIsActive ? true : false}
          onMouseEnter={showValueHandler}
        />
        {valueIsShown && (
          <div className="absolute z-50 text-sm italic bottom-0 left-0 translate-x-[25%] translate-y-full min-w-min bg-black text-white px-4 py-2 rounded-xl">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPageDetailsItem;
