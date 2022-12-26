import { Fragment, useState } from "react";

const AdminPageListItem = () => {
  const [fieldIsShown, setFieldIsShown] = useState(false);

  const showFieldHandler = () => {
    setFieldIsShown(true);
  };
  const hideFieldHandler = () => {
    setFieldIsShown(false);
  };

  return (
    <Fragment>
      <li className="relative ">
        <div
          className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative max-w-max cursor-pointer hover:font-bold duration-150"
          onMouseEnter={showFieldHandler}
          onMouseLeave={hideFieldHandler}
        >
          <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2"></div>
          <h1>Some Sectors Here 2</h1>
          <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2"></div>
        </div>
        {fieldIsShown && (
          <ul
            className="absolute top-0 right-0 z-20 translate-x-[40%] bg-transparent"
            onMouseEnter={showFieldHandler}
            onMouseLeave={hideFieldHandler}
          >
            <li>
              <div className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative max-w-max cursor-pointer hover:text-gray-600 duration-150">
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2"></div>
                <h1>TEST</h1>
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2"></div>
              </div>
            </li>
            <li>
              <div className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative max-w-max cursor-pointer hover:text-gray-600 duration-150">
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2"></div>
                <h1>TEST</h1>
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2"></div>
              </div>
            </li>
            <li>
              <div className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative max-w-max cursor-pointer hover:text-gray-600 duration-150">
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2"></div>
                <h1>TEST</h1>
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2"></div>
              </div>
            </li>
            <li>
              <div className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative max-w-max cursor-pointer hover:text-gray-600 duration-150">
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2"></div>
                <h1>TEST</h1>
                <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2"></div>
              </div>
            </li>
          </ul>
        )}
      </li>
    </Fragment>
  );
};

export default AdminPageListItem;
