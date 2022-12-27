import { Fragment, useState } from "react";

const AdminPageListItem = ({ title, onClick }) => {
  const [fieldIsShown, setFieldIsShown] = useState(false);

  const showFieldHandler = () => {
    setFieldIsShown(true);
  };
  const hideFieldHandler = () => {
    setFieldIsShown(false);
  };

  const onClickHandler = (event) => {
    onClick(event.target.innerText);
  };

  return (
    <Fragment>
      <li className="relative w-full">
        <div
          className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative cursor-pointer hover:font-bold duration-150"
          onMouseEnter={showFieldHandler}
          onMouseLeave={hideFieldHandler}
          onClick={onClickHandler}
        >
          <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-300 top-[4px] left-0 -translate-x-1/2 pointer-events-none"></div>
          {title}
          <div className="h-[18px] w-[18px] rotate-45 absolute z-10 bg-slate-200 top-[4px] right-0 transform translate-x-1/2 pointer-events-none"></div>
        </div>
      </li>
    </Fragment>
  );
};

export default AdminPageListItem;
