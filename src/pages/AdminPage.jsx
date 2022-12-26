import AdminPageList from "../components/AdminPageList";
import AdminPageListHeader from "../components/AdminPageListHeader";
import Import from "./Import";

const AdminPage = () => {
  return (
    <div className="h-screen w-screen bg-slate-50 flex">
      <div className="h-full w-[30%] min-w-min bg-slate-300 py-2 px-2">
        <AdminPageListHeader />
        <AdminPageList />
      </div>
      <div className="h-full w-full bg-slate-600">
        <Import />
      </div>
    </div>
  );
};

export default AdminPage;
