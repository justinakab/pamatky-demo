import { Link } from 'react-router-dom';
import { monuments } from '../../../lib/data';

export const MonumentListPage = () => {
  return (
    <>
      {monuments.map((monument) => (
        <li key={monument.id}>
          <Link to={`/monument-list/${monument.id}`}>{monument.name}</Link>
        </li>
      ))}
    </>
  );
};
