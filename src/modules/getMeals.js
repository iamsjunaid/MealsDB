const getMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await response.json();
  return data;
};

export default getMeals;