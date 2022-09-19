import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuestionValues } from "../store/Question-slice";
import styles from "./Input.module.css";

const Input = (props) => {
  const [value, setValue] = useState({ id: "", value: "" });
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    dispatch(getQuestionValues({ id: props.id, value: e.target.value }));
    console.log({ id: props.id, value: e.target.value });
    /* setValue({ id: props.id, value: e.target.value }); */
  };

  return (
    <div className={styles["sub-box"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} onChange={inputChangeHandler} />
    </div>
  );
};

export default Input;
