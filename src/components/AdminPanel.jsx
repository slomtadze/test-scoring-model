import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import AdminPageList from "./AdminPageList";
import AdminPageListHeader from "./AdminPageListHeader";
import Import from "../pages/Import";
import GetData from "../Helpers/Hooks/GetData";
const { Fragment, useState } = require("react");

const AdminPanel = ({ setSubFields }) => {
  const [sectors, setSectors] = useState([
    "სოფლის მეურნეობა",
    "ვაჭრობა",
    "მომსახურება",
    "წარმოება",
  ]);
  const [fields, setFields] = useState([]);

  function removeDuplicateObjects(array) {
    const uniqueArray = array.filter((obj, index, self) => {
      return self.map((obj) => obj.field).indexOf(obj.field) === index;
    });
    return uniqueArray;
  }

  const getData = async (ref, setData) => {
    const docRef = doc(db, "სექტორი", ref);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = removeDuplicateObjects(docSnap.data().fields);
      setData(data);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const onSectorClick = (string) => {
    getData(string, setFields);
  };

  const onFieldClick = (string) => {};

  return (
    <Fragment>
      <AdminPageListHeader />
      <AdminPageList
        title="სექტორი"
        data={sectors}
        onClickHandler={onSectorClick}
      />
      <AdminPageList
        title="დარგი"
        data={fields}
        onClickHandler={onFieldClick}
      />
      <Import />
    </Fragment>
  );
};

export default AdminPanel;
