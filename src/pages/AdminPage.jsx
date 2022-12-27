import AdminPanel from "../components/AdminPanel";
import AdminPageMain from "../components/AdminPageMain";

import { useEffect } from "react";

const AdminPage = () => {




  return (
    <div className="h-screen w-screen bg-slate-50 flex">
      <div className="h-full w-[30%] min-w-min bg-slate-300 py-2 px-2">
        <AdminPanel />
      </div>
      <div className="h-full w-full bg-slate-100">
        <AdminPageMain />
      </div>
    </div>
  );
};

export default AdminPage;
