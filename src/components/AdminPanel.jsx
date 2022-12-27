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
    return uniqueArray.map((obj) => obj.field);
  }

  const getData = async (ref, setData) => {
    const docRef = doc(db, "სექტორი", ref);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data().fields);
    } else {
      console.log("No such document!");
    }
  };

  const onSectorClick = (string) => {
    getData(string, setFields);
  };

  const onFieldClick = (string) => {
    const temp = fields.filter((fieldObj) => fieldObj.field === string);
    console.log(fields, string, temp);
    setSubFields(fields.filter((fieldObj) => fieldObj.field === string));
  };

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
        data={removeDuplicateObjects(fields)}
        onClickHandler={onFieldClick}
      />
      <Import />
    </Fragment>
  );
};

export default AdminPanel;
