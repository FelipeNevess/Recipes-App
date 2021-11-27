import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeCard.css';

function DrinkCard({ index, recipe }) {
  const { strDrink, idDrink, strDrinkThumb } = recipe;

  return (
    <Link to={ `/bebidas/${idDrink}` } className="link">
      <div data-testid={ `${index}-recipe-card` } className="content">
        <div className="content-individual">
          <img
            src={ strDrinkThumb }
            data-testid={ `${index}-card-img` }
            alt="Imagem da receita"
            width="50"
          />
          <p data-testid={ `${index}-card-name` }>
            { strDrink }
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DrinkCard;
