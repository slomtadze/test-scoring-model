import { useState } from "react";

const AdminPageListItem = () => {
  const [fieldIsShown, setFieldIsShown] = useState(false);

  const showFieldHandler = () => {
    setFieldIsShown(true);
  };
  const hideFieldHandler = () => {
    setFieldIsShown(false);
  };

  return (
    <li onMouseEnter={showFieldHandler} onMouseLeave={hideFieldHandler}>
      <div className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative max-w-max cursor-pointer hover:font-bold duration-150">
        <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2"></div>
        <h1>Some Sectors Here 2</h1>
        <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2"></div>
        {fieldIsShown && (
          <div className="absolute z-20 top-0 right-0 translate-x-full bg-slate-200">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default AdminPageListItem;
