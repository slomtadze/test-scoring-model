import React, { useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";

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
  console.log(data);

  const uploadHandler = () => {
    const removeDuplicateObjects = (array) => {
      const uniqueArray = array.filter((obj, index, self) => {
        return self.map((obj) => obj.sector).indexOf(obj.sector) === index;
      });
      return uniqueArray.map((uniq) => uniq.sector);
    };

    console.log(removeDuplicateObjects(data));
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
