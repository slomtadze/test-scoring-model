import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addField, addSector, addSubField } from "../store/Question-slice";
import Select from "./Select";

import styles from "./Selects.module.css";
import { fieldArray, sectorArray, subFieldArray } from "./SelectsSrc";

const Selects = (props) => {
  const [fieldOptions, setfieldOptions] = useState([]);
  const [subFieldOptions, setsubFieldOptions] = useState([]);

  const dispatch = useDispatch();

  const selectedField = useSelector((state) => state.business.field);

  const sectorChangeHandler = (value) => {
    setfieldOptions(fieldArray[value]);
    dispatch(addSector(value));
  };

  const fieldChangeHandler = (value) => {
    if (!value) {
      return;
    } else if (!subFieldArray[value]) {
      setsubFieldOptions([]);
    } else {
      setsubFieldOptions(subFieldArray[value].map((subField) => subField.name));
      dispatch(addField(value));
    }
  };

  const subFieldChangeHandler = (value) => {
    if (!value) {
      return;
    } else {
      dispatch(
        addSubField(
          subFieldArray[selectedField].find((item) => item.name === value)
        )
      );
    }
  };

  return (
    <div className={styles.box}>
      <Select
        label="სექტორი"
        header="--აირჩიეთ სექტორი--"
        options={sectorArray}
        onChange={sectorChangeHandler}
      />
      <Select
        label="დარგი"
        header="--აირჩიეთ დარგი--"
        options={fieldOptions}
        onChange={fieldChangeHandler}
      />
      <Select
        label="ქვედარგი"
        header="--აირჩიეთ ქვედარგი--"
        options={subFieldOptions}
        onChange={subFieldChangeHandler}
      />
    </div>
  );
};

export default Selects;
