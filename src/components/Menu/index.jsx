import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburgerMenu">
      <button
        className={!isOpen ? 'hamburger' : 'hamburger hamburger--otevrene'}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen ? (
        <nav className="hamburger-nav">
          <ul>
            <li>
              <Link to="/monuments">památky</Link>
            </li>
            <li>
              <Link to="/game">hra</Link>
            </li>
            <li>
              <Link to="/aboutproject">O projektu</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
