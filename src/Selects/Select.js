import React from "react";

import styles from "./Select.module.css";

const Select = (props) => {
  const options = props.options
    ? props.options.map((field) => <option value={field}>{field}</option>)
    : [];

  const onChangeHanler = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div className={styles["sub-box"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} onChange={onChangeHanler}>
        <option value={props.header}>{props.header}</option>
        {options}
      </select>
    </div>
  );
};

export default Select;
