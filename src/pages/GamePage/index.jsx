import { DndContext, closestCenter } from '@dnd-kit/core';
import { DropBox } from '../../components/DropBox';
import './style.css';
import { useState } from 'react';
import { Monument } from '../../components/Monument';
import { monuments } from '../../../lib/data';

const dropBoxData = [
  { position: 'orloj-position', id: 'orloj' },
  { position: 'rudolfinum-position', id: 'rudolfinum' },
];

export const GamePage = () => {
  const [isSolved, setIsSolved] = useState({
    orloj: false,
    rudolfinum: false,
  });

  // const [activeID, setActiveId] = useState('');
  const handleDragStart = (event) => {
    console.log('Drag start called', event);
    const { active } = event;

    // setActiveId(active.id);
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
  };

  return (
    <div className="container">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="left-column">
          <img className="left-column--map" src="map.png"></img>
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
            <button className="btn">Jak hrát?</button>
            <button className="btn">Domů</button>
          </div>

          <div className="message-box">
            <p className="message-box--text">Začni hrát!</p>
          </div>
          <div className="monuments-box">
            <button className="btn">up</button>
            <div className="monuments-box--list">
              {monuments.map((monument) => (
                <Monument key={monument.id} id={monument.id}></Monument>
              ))}
            </div>
            <button className="btn">down</button>
          </div>
        </div>
      </DndContext>
    </div>
  );
};
