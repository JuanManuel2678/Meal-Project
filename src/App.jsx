
import React, { useState, useEffect } from 'react';
import MealDetail from './components/MealDetail/MealDetail';
import RightSide from "./components/RightSide"



function App() {
  const [meals, setMeals] = useState([]);

  async function getData() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const data = await response.json();
    const filteredData = data.meals.map(meal => ({
      id: meal.idMeal,
      strMeal: meal.strMeal,
      strInstructions: meal.strInstructions,
      strArea: meal.strArea,
      strCategory: meal.strCategory,
      strMealThumb: meal.strMealThumb,
      ingredients: Array.from({ length: 20 }, (_, i) => ({
        ingredient: meal[`strIngredient${i + 1}`],
        measure: meal[`strMeasure${i + 1}`]
      })).filter(item => item.ingredient),
      strYoutube: meal.strYoutube
    }));
    setMeals(filteredData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      {meals && meals.map((meal, index) => (
        <MealDetail key={index} meal={meal} />
      ))}

    <RightSide/>


    </>
  );
}

export default App;

