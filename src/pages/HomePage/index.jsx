import "./style.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Header></Header>

      
      <div className="hero--left-col">
      <Link to="/">
        <div className="logo"></div>
      </Link>
        <h1>Interaktivně za památkami</h1>
        <div className="about">
          <div className="about--text">
            <p>
              <span className="highlight">
                Interaktivní hra drag and drop a průvodce pražskými památkami. <br />
                Inovativní a zábavný způsob, jak poznat architekturu a kulturní
                dědictví tohoto města.
              </span>{" "}
            </p>
            {/* tlačítka */}
            <div className="btns-container">
              <Link to="/monument-list">
                <button className="btn bth--monuments">Chci se učit </button>{" "}
              </Link>

              <Link to="/game">
                <button className="btn bth--about-us">Chci se otestovat</button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </>
    
  );
};
