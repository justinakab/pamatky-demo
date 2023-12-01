import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { monuments } from "../../../lib/data";

export const MonumentListPage = () => {
  return (
    <>
      <Header></Header>
      <div className="list">
        <div className="list__left--col">
          <ul className="monuments-list"></ul>
          {monuments.map((monument) => (
            <li key={monument.id}>
              <Link to={`/monument-list/${monument.id}`}>{monument.name}</Link>
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
