import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles["sub-box"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} />
    </div>
  );
};

export default Input;
