import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";

const useGetData = ({ sector }) => {
  const [data, setData] = useState();

  const getData = async () => {
    const docRef = doc(db, "სექტორი", sector);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
  };
};

export default useGetData;
