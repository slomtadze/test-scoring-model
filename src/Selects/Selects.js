import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addField,
  addSector,
  addSubField,
  manageInputsAreShown,
} from "../store/Question-slice";
import Select from "./Select";

import styles from "./Selects.module.css";
//import { fieldArray, sectorArray, subFieldArray } from "./SelectsSrc";
import { srcArray } from "../Helpers/src";

const Selects = (props) => {
  const [selectedSector, setSelectedSector] = useState({});
  const [selectedField, setSelectedField] = useState({});
  const [fieldOptions, setfieldOptions] = useState([]);
  const [subFieldOptions, setsubFieldOptions] = useState([]);
  const dispatch = useDispatch();

  const sectorArray = srcArray.map((item) => item.sector);

  const sectorChangeHandler = (value) => {
    const sector = srcArray.find((sector) => sector.sector === value);
    const fields = sector.field.map((field) => field.title);
    setSelectedSector(sector);
    setfieldOptions(fields);
    dispatch(addSector(value));
  };

  const fieldChangeHandler = (value) => {
    const field = selectedSector.field.find((field) => field.title === value);
    const subFieldArray = field.value.map((subField) => subField.name);
    if (!value) {
      return;
    } else {
      setSelectedField(field);
      setsubFieldOptions(subFieldArray);
      dispatch(addField(value));
    }
  };

  const subFieldChangeHandler = (value) => {
    const subField = selectedField.value.find(
      (subField) => subField.name === value
    );
    if (!value) {
      dispatch(manageInputsAreShown(false));
      return;
    } else {
      dispatch(manageInputsAreShown(true));
      dispatch(addSubField(subField));
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
