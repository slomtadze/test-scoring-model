import React from "react";
import { useSelector } from "react-redux";
import Input from "./Input";

import styles from "./Inputs.module.css";

const Inputs = (props) => {
  const questions = useSelector((state) => state.business.details.questions);

  return (
    <div className={styles.box}>
      {questions &&
        questions.map((question) => {
          if (question.q) {
            return <Input label={question.q} />;
          }
        })}
    </div>
  );
};

export default Inputs;
