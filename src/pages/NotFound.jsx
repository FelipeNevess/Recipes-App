import React from 'react';
import { useHistory } from 'react-router';

import '../styles/NotFound.css';

function NotFound() {
  const history = useHistory();

  const handleClik = () => {
    history.push('/comidas')
  }

  return (
    <div className="cont_notFound_page">
      <h2>Erro 404</h2>
      <p>Page not Found</p>
      <button type="button" onClick={ handleClik }>Voltar</button>
    </div>
  )
};

export default NotFound;
