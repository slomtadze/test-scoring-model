import { useEffect, useRef } from "react";

const AdminPageDetailsItem = ({ label, type, name, placeholder }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width =
        inputRef.current.placeholder.offsetWidth + "px";
    }
  }, []);

  return (
    <div className="flex bg-slate-50 p-2 rounded-lg m-2">
      <div className="flex flex-col">
        <label
          className="mb-2 pb-2 font-semibold border-b border-neutral-300"
          htmlFor={name}
        >
          {label}
        </label>
        <h1 className="text-sm text-gray-500">{placeholder}</h1>
        {/* <input
          className="bg-transparent px-2 placeholder-gray-500"
          ref={inputRef}
          type={type}
          name={name}
          placeholder={`${placeholder}`}
          disabled
        /> */}
      </div>
    </div>
  );
};

export default AdminPageDetailsItem;
