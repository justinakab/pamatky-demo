import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { DropBox } from '../../components/DropBox';
import './style.css';
import { useState } from 'react';
import { Monument } from '../../components/Monument';
import { monuments } from '../../../lib/data';
import { Map } from './map';
import { ModalBox } from '../../components/ModalBox';
import { MessageBox } from '../../components/MessageBox';
import { Link } from 'react-router-dom';
import { WinnerBox } from '../../components/WinnerBox';

const dropBoxData = [
  { x: 651.545, y: 322.019, id: 'orloj' },
  { x: 506.545, y: 224.019, id: 'rudolfinum' },
  { x: 488.545, y: 586.019, id: 'narodniDivadlo' },
  { x: 473.545, y: 819.019, id: 'tanciciDum' },
  { x: 231.545, y: 146.019, id: 'chramSvVita' },
  { x: 223.545, y: 307.019, id: 'chramSvMikulase' },
  { x: 27.5447, y: 461.019, id: 'petrin' },
  { x: 414.545, y: 359.019, id: 'karluvMost' },
  { x: 867.545, y: 606.019, id: 'narodniMuzeum' },
  { x: 829.545, y: 295.019, id: 'obecniDum' },
];

export const GamePage = () => {
  // konstanty
  const [activeId, setActiveId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isWinnerBoxOpen, setIsWinnerBoxOpen] = useState(false);

  const [message, setMessage] = useState('Začni hrát!');

  const [isSolved, setIsSolved] = useState({
    orloj: false,
    rudolfinum: false,
    narodniDivadlo: false,
    tanciciDum: false,
  });

  const handleDragStart = (event) => {
    console.log('Drag start called', event);

    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    console.log('Drag end called');
    const { active, over } = event;

    console.log('ACTIVE :' + active.id);
    console.log('OVER :' + over.id);

    if (active.id === over.id) {
      const newIsSolved = { ...isSolved, [active.id]: true };

      setIsSolved(newIsSolved);
      setMessage('Správně!');
    } else if (active.id !== over.id) {
      setMessage('Zkus to ještě jednou!');
    }

    setActiveId(null);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleConfirm = (event) => {
    const confirmed = window.confirm('Opravdu si přeješ opustit hru?');

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <div className="container">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="left-column">
          {/* <WinnerBox /> */}
          {isModalOpen && <ModalBox onIsModalOpen={handleModal} />}

          <Map>
            {dropBoxData
              .filter((dropBox) => dropBox.x && dropBox.y)
              .map((dropBox) => (
                <DropBox
                  x={dropBox.x}
                  y={dropBox.y}
                  isSolved={isSolved}
                  id={dropBox.id}
                  key={dropBox.id}
                ></DropBox>
              ))}
          </Map>
        </div>
        <div className="right-column">
          <div className="top-menu">
            <button onClick={handleModal} className="btn btn-menu">
              Jak hrát?
            </button>
            <Link to="/">
              {' '}
              <button onClick={handleConfirm} className="btn btn-menu">
                Domů
              </button>
            </Link>
          </div>

          <div className="message-box">
            <MessageBox message={message}></MessageBox>
          </div>
          <div className="monuments-box">
            <div className="monuments-box--list">
              {monuments.map((monument) => (
                <Monument
                  overlay={false}
                  key={monument.id}
                  id={monument.id}
                ></Monument>
              ))}
            </div>
            <DragOverlay>
              {activeId ? <Monument overlay={true} id={activeId} /> : null}
            </DragOverlay>
          </div>
        </div>
      </DndContext>
    </div>
  );
};
