import './style.css';
import { Link } from 'react-router-dom';

export const DesktopMenu = () => {
  return (
    <div className="menuDesktop">
      <nav>
        <ul>
          <li>
            <Link to="/monuments">památky</Link>
          </li>
          <li>
            <Link to="/game">hra</Link>
          </li>
          <li>
            <Link to="/AboutProject">o projektu</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
