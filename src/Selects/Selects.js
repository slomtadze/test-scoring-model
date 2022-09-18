import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, addSubField } from "../store/Question-slice";
import Select from "./Select";

import styles from "./Selects.module.css";
import { fieldArray, sectorArray, subFieldArray } from "./SelectsSrc";

const Selects = (props) => {
  const [subFieldOptions, setSubFieldOptions] = useState([]);
  const [sectorOptions, setSectorOptions] = useState([]);

  const dispatch = useDispatch();

  const selectedSubField = useSelector((state) => state.business.subField);

  const fieldChangeHandler = (value) => {
    setSubFieldOptions(subFieldArray[value]);
  };

  const subFieldChangeHandler = (value) => {
    setSectorOptions(sectorArray[value].map((sector) => sector.name));
    dispatch(addSubField(value));
  };

  const sectorChangeHandler = (value) => {
    dispatch(
      addDetails(
        sectorArray[selectedSubField].find((item) => item.name === value)
      )
    );
  };

  return (
    <div className={styles.box}>
      <Select
        label="დარგი"
        header="--აირჩიეთ დარგი--"
        options={fieldArray}
        onChange={fieldChangeHandler}
      />
      <Select
        label="ქვედარგი"
        header="--აირჩიეთ ქვედარგი--"
        options={subFieldOptions}
        onChange={subFieldChangeHandler}
      />
      <Select
        label="სექტორი"
        header="--აირჩიეთ სექტორი--"
        options={sectorOptions}
        onChange={sectorChangeHandler}
      />
    </div>
  );
};

export default Selects;