import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { shareMealHelper } from '../services/helpers';
import shareIcon from '../images/shareIcon.svg';

import '../styles/RecipeCard.css';
import '../styles/DoneMealCard.css';

function DoneDrinkCard({ recipe, index }) {
  const { id, alcoholicOrNot, name, image, doneDate } = recipe;
  const [messageAlert, setMessageAlert] = useState('');
  const history = useHistory();

  const shareRecipe = () => {
    shareMealHelper(id, setMessageAlert);
  };

  const sendToDetailsPage = () => {
    history.push(`/bebidas/${id}`);
  };

  return (
    <div className="recipe-container drink_done">
      <button
        type="button"
        onClick={ sendToDetailsPage }
        className="image-btn img-drink-button"
      >
        <img
          src={ image }
          alt={ `foto de ${name}` }
          data-testid={ `${index}-horizontal-image` }
          width="80px"
        />
      </button>
      <button
        className="recipe-name-btn"
        type="button"
        onClick={ sendToDetailsPage }
      >
        <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
      </button>
      <p>{messageAlert}</p>
      <button
        className="share-btn"
        type="button"
        onClick={ shareRecipe }
      >
        <img
          src={ shareIcon }
          alt="Share Icon"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{`Feita em ${doneDate}`}</p>
    </div>
  );
}

DoneDrinkCard.propTypes = {
  recipe: PropTypes.object,
  index: PropTypes.number,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  doneDate: PropTypes.string,
}.isRequired;

export default DoneDrinkCard;