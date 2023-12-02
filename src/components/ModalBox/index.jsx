import './style.css';

export const ModalBox = ({ onIsModalOpen }) => {
  return (
    <>
      <div
        onClick={() => {
          onIsModalOpen(false);
        }}
        className="backdrop"
      ></div>
      <div className="modal-box">
        <div className="modal-box--top">
          <h1 className="top--heading">Jak hrát?</h1>
          <svg
            onClick={() => {
              onIsModalOpen(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="45"
            className="top-cross"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="modal-box-about--container">
          <p className="modal-box--text">
            Cíl:{' '}
            <span className="highlight">
              Umísti všechny pražské památky správně do mapy.
            </span>{' '}
            <br></br> <br />
            Jak na to? <br />
            <ol>
              <li>Vpravo na stránce najdeš celou řadu pražských památek.</li>
              <li>
                Postupně zkus každou památku přetáhnou na jedno ze žlutých míst
                na mapě.
              </li>
              <li>Pokud ji umístíš správně, památka ti v mapě zůstane.</li>
            </ol>
            Nakonec si každou památku můžeš rozkliknout a přečíst si o ní
            zajímavé informace. Užij si to!
          </p>
          <div className="modal-box-gif"></div>
        </div>
      </div>
    </>
  );
};
