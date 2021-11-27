import React from 'react';
import '../styles/RecomendationCard.css';

function RecomendationCard({ recipe, page, idx }) {
  return (
    <div data-testid={ `${idx}-recomendation-card` } className="recomendation-card">
      <img
        src={ (page === 'meals') ? recipe.strDrinkThumb : recipe.strMealThumb }
        alt="Imagem da receita"
        width="100%"
      />

      <p
        data-testid={ `${idx}-recomendation-title` }
      >
        { (page === 'meals') ? recipe.strDrink : recipe.strMeal }
      </p>
    </div>
  );
}

export default RecomendationCard;
