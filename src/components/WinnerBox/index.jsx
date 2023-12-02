import './style.css';
import { Link } from 'react-router-dom';

export const WinnerBox = () => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="winner-box">
        <h1 className="winner-heading">Jsi mistrem pražských památek!</h1>
        <div className="winner-about-box">
          <p>
            Úspěšně jsi umístil všechny památky. Nyní si je můžeš rozkliknout a
            dozvědět se o nich něco víc!
          </p>
          <div className="winner--btns">
            <Link to="/monument-list">
              <button className="btn btn-winner">
                Přejít na seznam památek
              </button>
            </Link>
            <button className="btn btn-winner">Hrát znovu!</button>
          </div>
        </div>
      </div>
    </>
  );
};
