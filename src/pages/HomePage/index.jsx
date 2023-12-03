import './style.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HomePage = () => {
  return (
    <>
      <Header></Header>

      <div className="hero--col">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <h1>Interaktivně za památkami</h1>
        <div className="homepage-about">
          <div className="about--text">
            <p className="about--description">
              <span className="highlight">
                Interaktivní hra drag and drop a průvodce pražskými památkami.{' '}
                <br />
                Inovativní a zábavný způsob, jak poznat architekturu a kulturní
                dědictví tohoto města.
              </span>{' '}
            </p>
            {/* tlačítka */}
            <div className="btns-container">
              <Link to="/monuments">
                <motion.button
                  className="button bth--monuments"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.6 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Chci se učit{' '}
                </motion.button>{' '}
              </Link>

              <Link to="/game">
                <motion.button
                  className="button bth--about-us"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.6 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Chci se otestovat
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
