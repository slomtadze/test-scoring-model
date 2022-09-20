const agroCalculate = (
  name,
  minProfit,
  maxProfit,
  exp,
  val1,
  val2,
  val3,
  val4,
  val5
) => {
  const minProfit = minProfit * val1;
  const maxProfit = maxProfit * val1;
  const totalProfit = val1 * val2 * val3 * val4 * val5 * ((100 - exp) / 100);

  if (minProfit <= totalProfit <= maxProfit) {
    return totalProfit;
  } else {
    return null;
  }
};
