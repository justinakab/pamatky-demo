import './style.css';
import { Link } from 'react-router-dom';

export const WinnerBox = ({ onResetGame, onIsGameCompleted }) => {
  const handlePlayAgain = () => {
    onResetGame();
    onIsGameCompleted(false);
  };

  return (
    <>
      <div className="backdrop"></div>
      <div className="winner-box">
        <h1 className="winner-heading">Jsi mistrem pražských památek!</h1>
        <div className="winner-about-box">
          <p>
            Úspěšně jsi umístil všechny památky. Nyní se o nich můžeš dozvědět
            se něco víc!
          </p>
          <div className="winner--btns">
            <Link to="/monuments">
              <button className="btn btn-winner">
                Přejít na seznam památek
              </button>
            </Link>
            <button className="btn btn-winner" onClick={handlePlayAgain}>
              Hrát znovu!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
