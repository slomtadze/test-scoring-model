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
          className="bg-slate-200 px-8 py-[1px] my-[2px] mx-8 relative cursor-pointer duration-300 hover:bg-slate-100 "
          onMouseEnter={showFieldHandler}
          onMouseLeave={hideFieldHandler}
          onClick={onClickHandler}
        >
          {title}
        </div>
      </li>
    </Fragment>
  );
};

export default AdminPageListItem;
