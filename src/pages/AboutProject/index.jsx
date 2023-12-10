import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const AboutProject = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about--left">
          <h1 className="about-h1">O projektu</h1>
          <div className="about--text">
            <p>
              V našem závěrečném projektu jsme si dali za cíl vytvořit{' '}
              <span className="highlight">
                interaktivního webového průvodce pražskými památkami,
              </span>{' '}
              který je určen pro děti od 10 let. <br></br> <br />
              Cílem naší iniciativy není pouze přiblížit mladším generacím
              bohatou historii Prahy, ale také{' '}
              <span className="highlight">
                nabídnout inovativní a zábavný způsob, jak poznat architekturu a
                kulturní dědictví tohoto města.
              </span>{' '}
              Zároveň klademe důraz na vizuální stránku, neboť se tímto
              projektem chceme prezentovat i v budoucnu. Také jsme si vědomy, že
              ilustrace a fotografie poskytnou dětem vizuálně poutavý zážitek.{' '}
              <br></br> <br />
              Rovněž jsme odhodlány rozšířit hranice běžných akademických
              projektů a{' '}
              <span className="highlight">
                vyzkoušet si nové funkcionality.
              </span>{' '}
              Například jsme implementovaly prvky nad standardní rámec Digitální
              akademie – funkci drag&drop.{' '}
              <span className="highlight">
                A také jsme si vzaly pod palec veškerý design památek!
              </span>
            </p>
            <br></br>
            <h3>
              <span className="highlight">Autorky:</span> Justina Kabelková a
              Ema Šturmová
            </h3>
            <h3>
              <span className="highlight">Mentoři:</span> Filip Jirsák a Nela
              Letochová
            </h3>
          </div>
        </div>
        <div className="about--right">
          <div className="image--orloj"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
