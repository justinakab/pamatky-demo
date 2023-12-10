import './style.css';
import { useParams } from 'react-router-dom';
import { monuments } from '../../lib/data';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { camelToKebabCase } from '../MonumentListPage';
import { Link } from 'react-router-dom';

export const MonumentPage = () => {
  const { idMonument } = useParams();

  const monumentData = monuments.find(
    (monument) => camelToKebabCase(monument.id) === idMonument,
  );

  return (
    <>
      <Header />
      <div className="monument__container">
        <h1 className="monument__header">{monumentData.name}</h1>

        <img
          className="monument__foto"
          src={monumentData.photos}
          alt="fotografie"
        ></img>

        <p
          dangerouslySetInnerHTML={{ __html: monumentData.description }}
          className="monument__description"
        ></p>
        <img
          className="monument__vector"
          src={monumentData.vectors}
          alt="památka ve vectorové grafice"
        ></img>
        <Link to="/monuments" className="monument__link">
          Zpět na seznam památek
        </Link>
      </div>

      <Footer />
    </>
  );
};
