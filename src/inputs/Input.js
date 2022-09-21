import React from "react";
import { useDispatch } from "react-redux";
import { getQuestionValues } from "../store/Question-slice";

import styles from "./Input.module.css";

const Input = (props) => {
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    dispatch(getQuestionValues({ id: props.id, value: e.target.value }));
  };
  return (
    <div className={styles["sub-box"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} onChange={inputChangeHandler} />
    </div>
  );
};

export default Input;
