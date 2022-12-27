import React, { useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { array } from "yup";

function Reader() {
  const [setor, setSector] = useState([]);
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      setData(sheetData);
    };

    reader.readAsArrayBuffer(file);
  };

  const uploadHandler = async () => {
    const getSector = (array, sector) => {
      return array.filter(
        (obj) => obj.sector === sector && typeof obj.field == "string"
      );
    };

    function removeDuplicateObjects(array) {
      const uniqueArray = array.filter((obj, index, self) => {
        return self.map((obj) => obj.sector).indexOf(obj.sector) === index;
      });
      return uniqueArray;
    }

    // Add a new document in collection "cities"
    await setDoc(doc(db, "სექტორი", "სოფლის მეურნეობა"), {
      fields: getSector(data, "სოფლის მეურნეობა"),
    });
    await setDoc(doc(db, "სექტორი", "ვაჭრობა"), {
      fields: getSector(data, "ვაჭრობა"),
    });
    await setDoc(doc(db, "სექტორი", "წარმოება"), {
      fields: getSector(data, "წარმოება"),
    });
    await setDoc(doc(db, "სექტორი", "მომსახურება"), {
      fields: getSector(data, "მომსახურება"),
    });

    /* try {
      const docRef = await addDoc(collection(db, "data"), {
        agroCulture: getSector(data, "სოფლის მეურნეობა"),
        trading: getSector(data, "ვაჭრობა"),
        servise: getSector(data, "მომსახურება"),
        production: getSector(data, "წარმოება"),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } */
  };
  /*     function combineFieldProperties(array) {
  const combinedArray = array.reduce((acc, obj) => {
    const sector = obj.sector;
    if (acc[sector]) {
      acc[sector].field.push(obj.field);
    } else {
      acc[sector] = {};
      acc[sector].sector = obj.sector
      acc[sector].field = [obj.field];
    }
    return acc;
  }, {});
  return Object.values(combinedArray);
}
  console.log(combineFieldProperties(data))  
  }; */

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button
        type="button"
        onClick={uploadHandler}
        className="bg-orange-300 cursor-pointer p-2"
      >
        Send data to database
      </button>
    </div>
  );
}

export default Reader;
