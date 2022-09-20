import React from "react";
import { useSelector } from "react-redux";
import Input from "./Input";

import styles from "./Inputs.module.css";

const Inputs = (props) => {
  const questions = useSelector((state) => state.business.subField.questions);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(questions);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.box}>
        {questions &&
          questions.map((question) => {
            if (question.q) {
              return (
                <Input label={question.q} id={question.id} key={question.id} />
              );
            }
          })}
      </div>
      {questions && <button className={styles.btn}>გამოთვლა</button>}
    </form>
  );
};

export default Inputs;
