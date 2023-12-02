import './style.css';
import { Link } from 'react-router-dom';

export const DesktopMenu = () => {
  return (
    <div className="menuDesktop">
      <nav>
        <ul>
          <li>
            <Link to="/monument-list">památky</Link>
          </li>
          <li>
            <Link to="/game">hry & testy</Link>
          </li>
          <li><Link to="/AboutProject">O projektu</Link></li>
        </ul>
      </nav>
    </div>
  );
};
