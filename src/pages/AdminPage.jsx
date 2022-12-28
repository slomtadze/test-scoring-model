import AdminPanel from "../components/AdminPanel";
import AdminPageMain from "../components/AdminPageMain";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const AdminPage = () => {
  const [sectors, setSectors] = useState([
    "სოფლის მეურნეობა",
    "ვაჭრობა",
    "მომსახურება",
    "წარმოება",
  ]);
  const [fields, setFields] = useState([]);
  const [subFields, setSubFields] = useState([]);

  const uploadSubFieldHandler = (modifedSubFieldObj) => {
    const existingObj = fields.find(
      (existing) => existing.subField === modifedSubFieldObj.subField
    );
    const updatedData = { ...fields, modifedSubFieldObj };
    console.log(modifedSubFieldObj);
    /* await setDoc(doc(db, "სექტორი", modifedSubFieldObj.field), {
      fields: getSector(data, "სოფლის მეურნეობა"),
    }); */
  };

  return (
    <div className="h-screen w-screen bg-slate-50 flex">
      <div className="h-full w-[30%] min-w-min bg-slate-300 py-2 px-2">
        <AdminPanel
          sectors={sectors}
          fields={fields}
          setFields={setFields}
          setSubFields={setSubFields}
        />
      </div>
      <div className="h-full w-full bg-slate-100">
        {subFields.length > 0 ? (
          <AdminPageMain
            subFields={subFields}
            uploadSubFieldHandler={uploadSubFieldHandler}
          />
        ) : (
          <h1 className="text-center mt-8 text-xl">დარგი არ არის არჩეული</h1>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
