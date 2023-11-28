import { useParams } from 'react-router-dom';
import { monuments } from '../../../lib/data';

export const MonumentPage = () => {
  const { idMonument } = useParams();
  const monumentData = monuments.find((monument) => monument.id === idMonument);

  return (
    // tvoje struktura stránky s jednou památkou

    // příklad:
    <>
      <h1>{monumentData.name}</h1>
      <p>{monumentData.description}</p>
    </>
  );
};
