import React from "React";

const useCalculate = (
  sector,
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
  const [result, setResult] = useState("");

  const minProfit = minProfit * val1;
  const maxProfit = maxProfit * val1;

  switch (sector) {
    case "სოფლის მეურნეობა":
      const res = (val1 * val2 * val3 * val4 * val5 * ((100 - exp) / 100)) / 12;
      setResult(res);
      break;
    case "ვაჭრობა":
      const res = 
    
    default:
  }

  return {
    result,
  };
};
