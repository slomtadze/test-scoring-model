import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import AdminPageList from "./AdminPageList";
import AdminPageListHeader from "./AdminPageListHeader";
import Import from "../pages/Import";
import GetData from "../Helpers/Hooks/GetData";
const { Fragment, useState } = require("react");

const AdminPanel = () => {
  const [sectors, setSectors] = useState([
    "სოფლის მეურნეობა",
    "ვაჭრობა",
    "მომსახურება",
    "წარმოება",
  ]);
  const [fields, setFields] = useState([]);

  const getData = async (ref, setData) => {
    const docRef = doc(db, "სექტორები", ref);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const onSectorClick = (string) => {
    console.log(string);
    getData(string, setFields);
  };

  return (
    <Fragment>
      <AdminPageListHeader />
      <AdminPageList
        title="სექტორი"
        data={sectors}
        onClickHandler={onSectorClick}
      />
      <AdminPageList title="დარგი" data={fields} />
      <Import />
    </Fragment>
  );
};

export default AdminPanel;
