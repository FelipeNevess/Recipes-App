import { useHistory } from 'react-router';
import '../styles/ExitDrinks.css';

function Exit({ comidas }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${comidas}`);
  }

  return (
    <div
      className="exit"
      onClick={ handleClick }
    >
      Voltar
    </div>
  );
}

export default Exit;
