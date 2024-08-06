getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
}

getBudgetForCurrentYear = (income, gdp, capita) =>  {
  const budget = {income, gdp, capita};
  return budget;
}
