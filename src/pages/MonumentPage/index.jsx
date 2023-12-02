import { useParams } from 'react-router-dom';
import { monuments } from '../../../lib/data';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const MonumentPage = () => {
  const { idMonument } = useParams();
  const monumentData = monuments.find((monument) => monument.id === idMonument);

  return (
    <>
    <Header></Header>
      <h1 className='monument__header'>{monumentData.name}</h1>
      <img src={monumentData.image}></img>
      <p className='monument__description'>{monumentData.description}</p>

      <Footer></Footer>
    </>
  );
};
