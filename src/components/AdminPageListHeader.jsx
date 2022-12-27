import React, { useContext } from "react";
import AuthContext from "../store/AuthContext";

const AdminPageListHeader = () => {
  const { logout } = useContext(AuthContext);

  const logOutHandler = () => {
    logout();
  };
  return (
    <div className="mb-4 flex justify-between">
      <div>
        <h1 className="font-semibold">
          user: <span className="italic">saba@test.com</span>
        </h1>
        <h1 className="font-semibold">
          status: <span className="italic">admin</span>
        </h1>
      </div>
      <button
        className="bg-orange-300 px-4 py-[2px] h-1/2 font-white hover:bg-orange-500 duration-150 rounded-lg"
        type="button"
        onClick={logOutHandler}
      >
        გასვლა
      </button>
    </div>
  );
};

export default AdminPageListHeader;
