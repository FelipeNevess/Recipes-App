import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { shareMealHelper } from '../services/helpers';
import shareIcon from '../images/shareIcon.svg';
import '../styles/DoneMealCard.css';

function DoneMealCard({ recipe, index }) {
  const { id, area, category,
    name, image, doneDate, tags } = recipe;
  const MAX_TAGS = 2;
  const filteredTags = tags.slice(0, MAX_TAGS);
  const [messageAlert, setMessageAlert] = useState('');
  const history = useHistory();

  const shareRecipe = () => {
    shareMealHelper(id, setMessageAlert);
  };

  const sendToDetailsPage = () => {
    history.push(`/comidas/${id}`);
  };

  return (
    <div className="recipe-container">
      <p>{messageAlert}</p>

      <button
        type="button"
        onClick={ sendToDetailsPage }
        className="image-btn"
      >
        <img
          src={ image }
          alt={ `foto de ${name}` }
          data-testid={ `${index}-horizontal-image` }
          width="80px"
        />
      </button>

      <button
        type="button"
        onClick={ sendToDetailsPage }
        className="recipe-name-btn"
      >
        <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
      </button>

      <button
        type="button"
        onClick={ shareRecipe }
        className="share-btn"
      >
        <img
          src={ shareIcon }
          alt="Share Icon"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>

      <p data-testid={ `${index}-horizontal-top-text` }>{`${area} - ${category}`}</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{`Feita em ${doneDate}`}</p>

      {
        tags && filteredTags.map((tagName, tagIndex) => (
          <span key={ tagIndex } data-testid={ `${index}-${tagName}-horizontal-tag` }>
            {tagName}
          </span>))
      }
    </div>
  );
}

export default DoneMealCard;
