import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { monuments } from '../../../lib/data';

export const MonumentListPage = () => {
  return (
    <>
      <Header></Header>
      <div className="list">
        <div className="list__left--col">
          <ul className="monuments-pages"></ul>
          {monuments.map((monument) => (
            <li className="monument__id" key={monument.id}>
              <Link className="menu__link" to={`/monuments/${monument.id}`}>
                {monument.name}
              </Link>
            </li>
          ))}
        </div>
        <div className="list__right--col">
          <div className="orloj--img"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
