import React from 'react';
import './MealDetail.css'
function MealDetail({ meal: { strMealThumb, strMeal, strCategory, strArea, strInstructions, ingredients, strYoutube } }) {
  return (
    <div className="container">
      <div className="meal-image">
        <img src={strMealThumb} alt="Meal" />
      </div>

      <div className="meal-title">
        <h1> <img src="/src/components/MealDetail/svg-MealDetail/libro.svg" alt="libro SVG"/> {strMeal}</h1>
        <div className="title-right">
          <h3><img src="/src/components/MealDetail/svg-MealDetail/category.svg" alt="category SVG"/> {strCategory}</h3>
          <h3><img src="/src/components/MealDetail/svg-MealDetail/culinarias.svg" alt="culinarias SVG"/> {strArea}</h3>
        </div>
      </div>

      <div className="informaciones">
        <div className="instructions">
          <div className="instructions-header">
            <h2> <img src="/src/components/MealDetail/svg-MealDetail/intrucciones.svg" alt="intrucciones SVG"/> Instrucciones</h2>
          </div>
          <p>{strInstructions}</p>
          <p><img src="/src/components/MealDetail/svg-MealDetail/question.svg" alt="question SVG"style={{position:'relative', bottom:'-7px'}} /><a href={strYoutube} target="_blank" style={{ color: 'black', textDecoration: 'none', borderBottom: '1px solid transparent' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>¿No entendiste la preparación? Ve este video</a></p>
          </div>

        <div className="ingredients">
          <h2><img src="/src/components/MealDetail/svg-MealDetail/ingredientes.svg" alt="ingredientes SVG" target="_blank"/> Ingredientes</h2>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>- {item.measure} {item.ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
