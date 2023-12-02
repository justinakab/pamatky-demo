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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="modal-box-gif"></div>
        </div>
      </div>
    </>
  );
};
