import React from "React";
import { useState } from "react";

const useCalculate = (
  sector,
  field,
  subField,
  min,
  max,
  exp,
  val1,
  val2,
  val3,
  val4,
  val5
) => {
  const [netProfit, setNetProfit] = useState("");

  const minProfit = min * val1;
  const maxProfit = max * val1;

  const checkRes = (res) => {
    if (minProfit <= res <= maxProfit) {
      setNetProfit(res);
    } else {
      setNetProfit("მოგება სცდება დასაშვებ რეინჯს");
    }
  };

  let result = null;

  switch (sector) {
    case "სოფლის მეურნეობა":
      result = (val1 * val2 * val3 * val4 * val5 * ((100 - exp) / 100)) / 12;
      checkRes(result);
      break;
    case "ვაჭრობა":
      if (
        field === "ენერგომატარებლები " &&
        subField !== "შეშით, ბრიკეტით, ქვანახშირითა და კოქსით ვაჭრობა"
      ) {
        result =
          (val1 * val2 * val4 - (val1 * val2 * val4 * 100) / (100 + val3)) *
          ((100 - exp) / 100);
      } else {
        result =
          val1 * val2 -
          ((val1 * val2 * 100) / (100 + val3)) * ((100 - exp) / 100);
      }
      checkRes(result);
    default:
  }

  return {
    result,
  };
};
