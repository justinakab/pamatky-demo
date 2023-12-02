import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { DropBox } from '../../components/DropBox';
import './style.css';
import { useState } from 'react';
import { Monument } from '../../components/Monument';
import { monuments } from '../../../lib/data';
import { Map } from './map';
import { MessageBox } from '../../components/MessageBox';

const dropBoxData = [
  { position: 'orloj-position', id: 'orloj' },
  { position: 'rudolfinum-position', id: 'rudolfinum' },
  { position: 'narodni-divadlo-position', id: 'narodniDivadlo' },
  { position: 'tancici-dum-position', id: 'tanciciDum' },
  { position: 'tancici-dum-position', id: 'chramSvVita' },
  { position: 'tancici-dum-position', id: 'chramSvMikulase' },
  { position: 'tancici-dum-position', id: 'petrin' },
  { position: 'tancici-dum-position', id: 'karluvMost' },
  { position: 'tancici-dum-position', id: 'narodniMuzeum' },
  { position: 'tancici-dum-position', id: 'obecniDum' },
];

export const GamePage = () => {
  const [activeId, setActiveId] = useState(null);
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
    }

    setActiveId(null);
  };

  return (
    <div className="container">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="left-column">
          <MessageBox></MessageBox>

          {/* <img className="left-column--map" src="map.png"></img> */}
          <Map></Map>
          {dropBoxData.map((dropBox) => (
            <DropBox
              isSolved={isSolved}
              boxClass={dropBox.position}
              id={dropBox.id}
              key={dropBox.id}
            ></DropBox>
          ))}
        </div>
        <div className="right-column">
          <div className="top-menu">
            <button className="btn btn-menu">Jak hrát?</button>
            <button className="btn btn-menu">Domů</button>
          </div>

          <div className="message-box">
            <p className="message-box--text">Začni hrát!</p>
          </div>
          <div className="monuments-box">
            <div className="monuments-box--list">
              {monuments.map((monument) => (
                <Monument key={monument.id} id={monument.id}></Monument>
              ))}
            </div>
            <DragOverlay>
              {activeId ? <Monument id={activeId} /> : null}
            </DragOverlay>
          </div>
        </div>
      </DndContext>
    </div>
  );
};
