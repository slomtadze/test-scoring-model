import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import AdminPageList from "../components/AdminPageList";
import Import from "./Import";

const AdminPage = () => {
  const { logout } = useContext(AuthContext);

  const logOutHandler = () => {
    logout();
  };
  return (
    <div className="h-screen w-screen bg-slate-50 flex">
      <div className="h-full w-[30%] min-w-min bg-slate-300 pt-2 px-2">
        <div className="mb-4">
          <h1 className="font-semibold">
            user: <span className="italic">saba@test.com</span>
          </h1>
          <h1 className="font-semibold">
            status: <span className="italic">admin</span>
          </h1>
        </div>
        <AdminPageList />
        <button
          className="bg-orange-300 w-full py-[2px] font-white hover:bg-orange-500 duration-150"
          type="button"
          onClick={logOutHandler}
        >
          Log out
        </button>
      </div>
      <div className="h-full w-full bg-slate-600">
        <Import />
      </div>
    </div>
  );
};

export default AdminPage;
