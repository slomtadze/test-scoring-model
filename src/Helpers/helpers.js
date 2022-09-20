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
  console.log(sector, field, subField, min, max, exp);
  console.log(
    field === "ენერგომატარებლები " &&
      subField !== "შეშით, ბრიკეტით, ქვანახშირითა და კოქსით ვაჭრობა"
  );
  const minProfit = min * val1;
  const maxProfit = max * val1;
  const checkRes = (res) => {
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
      const value4 = val4 ? val4 : 1;
      const value5 = val5 ? +val5 : 1;
      result =
        (parseInt(val1) *
          parseInt(val2) *
          parseInt(val3) *
          value4 *
          value5 *
          ((100 - exp) / 100)) /
        12;
      checkRes(result);
      break;
    case "ვაჭრობა ":
      if (
        field === "ენერგომატარებლები " &&
        subField !== "შეშით, ბრიკეტით, ქვანახშირითა და კოქსით ვაჭრობა"
      ) {
        console.log(typeof +val1);
        result =
          (val1 * val2 * val4 - (val1 * val2 * val4 * 100) / (100 + val3)) *
          ((100 - exp) / 100);
      } else {
        console.log(typeof val1);
        result =
          val1 * val2 -
          ((val1 * val2 * 100) / (100 + val3)) * ((100 - exp) / 100);
      }
      checkRes(result);
    default:
  }
};
