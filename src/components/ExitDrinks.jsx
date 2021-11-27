import { useHistory } from 'react-router';
import '../styles/ExitDrinks.css';

function Exit({ bebidas }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${bebidas}`);
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
