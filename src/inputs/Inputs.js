import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { calculate } from "../Helpers/helpers";
import Input from "./Input";

import styles from "./Inputs.module.css";

const Inputs = (props) => {
  const [netProfit, setNetProfit] = useState("");
  const { sector, field, subField } = useSelector((state) => state.business);
  const question4 = subField.questions[3] ? subField.questions[3].value : null;
  const question5 = subField.questions[4] ? subField.questions[4].value : null;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    calculate(
      setNetProfit,
      sector,
      field,
      subField.name,
      subField.minProfit,
      subField.maxProfit,
      subField.exp,
      subField.questions[0].value,
      subField.questions[1].value,
      subField.questions[2].value,
      question4,
      question5
    );
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.box}>
          {subField.questions &&
            subField.questions.map((question) => {
              if (question.q) {
                return (
                  <Input
                    label={question.q}
                    id={question.id}
                    key={question.id}
                  />
                );
              }
            })}
        </div>
        {subField.questions && <button className={styles.btn}>გამოთვლა</button>}
      </form>
      {netProfit.length < 10 ? (
        <p className={styles["paragraph-valid"]}>
          <span>ყოველთვიური მოგება:</span>
          {` ${netProfit} ლარი`}
        </p>
      ) : (
        <p className={styles["paragraph-invalid"]}>{netProfit}</p>
      )}
    </Fragment>
  );
};

export default Inputs;
