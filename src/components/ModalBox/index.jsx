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
          <div className="modal-box--text">
            <span className="highlight highlight--bigger">
              Cíl: Umísti všechny pražské památky správně do mapy.
            </span>{' '}
            <br></br> <br />
            <span className="highlight--bigger">Jak na to?</span>
            <br />
            <p>
              Vpravo na stránce najdeš celou řadu pražských památek. <br></br>{' '}
              <br></br>
              Postupně zkus každou památku přetáhnou na jedno ze žlutých míst na
              mapě. <br></br> <br></br>
              Pokud ji umístíš správně, památka ti v mapě zůstane.
              <br></br> <br />
              Nakonec si každou památku můžeš rozkliknout a přečíst si o ní
              zajímavé informace. <br></br> <br />
              <span className="highlight--bigger">Užij si to!</span>
            </p>
          </div>
          <div className="modal-box-gif"></div>
        </div>
      </div>
    </>
  );
};
