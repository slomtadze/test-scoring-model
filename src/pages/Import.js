import React, { useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

function Reader() {
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
  };
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
