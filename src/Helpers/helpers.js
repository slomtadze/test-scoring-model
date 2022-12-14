export const calculate = (
  setNetProfit,
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
  const value1 = val1 ? +val1 : 1;
  const value2 = val2 ? +val2 : 1;
  const value3 = val3 ? +val3 : 1;
  const value4 = val4 ? +val4 : 1;
  const value5 = val5 ? +val5 : 1;

  const checkRes = (res, minProfit, maxProfit) => {
    console.log(minProfit, res, maxProfit);
    if (minProfit <= res && res <= maxProfit) {
      setNetProfit(res.toFixed(0));
    } else {
      setNetProfit("მოგება სცდება დასაშვებ რეინჯს");
    }
  };
  let result = null;
  switch (sector) {
    case "სოფლის მეურნეობა":
      const minProfit = min * val1;
      const maxProfit = max * val1;

      result =
        (value1 * value2 * value3 * value4 * value5 * ((100 - exp) / 100)) / 12;
      checkRes(result, minProfit, maxProfit);
      break;
    case "ვაჭრობა ":
      if (
        field === "ენერგომატარებლები " &&
        subField !== "შეშით, ბრიკეტით, ქვანახშირითა და კოქსით ვაჭრობა"
      ) {
        console.log(typeof +val1);
        result =
          (value1 * value2 * value4 -
            (value1 * value2 * value4 * 100) / (100 + value3)) *
          ((100 - exp) / 100);
      } else {
        console.log(typeof val1);
        result =
          value1 * value2 -
          ((value1 * value2 * 100) / (100 + value3)) * ((100 - exp) / 100);
      }
      checkRes(result, min, max);
      break;
    default:
  }
};
