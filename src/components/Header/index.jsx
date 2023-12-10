import { Menu } from '../Menu';
import { Link } from 'react-router-dom';
import './style.css';
import { DesktopMenu } from '../DesktopMenu';

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo__header"></div>
      </Link>
      <div className="container--hamburger-menu">
        <Menu />
        <DesktopMenu />
      </div>
    </header>
  );
};
