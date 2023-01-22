import { useState, useEffect, memo } from "react";
import { Field } from "formik";
import { translateLabel } from "../Helpers/translateLabel";

const AdminPageDetailsItem = (props) => {
  const { setFormEditIsActive, label, type, name, placeholder } = props;

  return (
    <div className={`flex bg-slate-50 p-2 rounded-lg m-2 `}>
      <div className="relative flex flex-col">
        <label
          className="mb-2 pb-2 font-semibold border-b border-neutral-300"
          htmlFor={name}
        >
          {translateLabel(label)}
        </label>
        <div>
          <Field
            className="bg-transparent px-2 placeholder-gray-500 outline-none text-green-700"
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            /* disabled={!editIsActive ? true : false} */
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AdminPageDetailsItem);
