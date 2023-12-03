// import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
// import { DropBox } from '../../components/DropBox';
// import './style.css';
// import { useState } from 'react';
// import { Monument } from '../../components/Monument';
// import { monuments } from '../../../lib/data';
// import { Map } from './map';
// import { ModalBox } from '../../components/ModalBox';
// import { MessageBox } from '../../components/MessageBox';
// import { Link } from 'react-router-dom';
// import { WinnerBox } from '../../components/WinnerBox';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { HomeIcon } from '../../components/HomeIcon';
// import { QuestionIcon } from '../../components/QuestionIcon';

// const dropBoxData = [
//   { x: 651.545, y: 322.019, id: 'orloj' },
//   { x: 506.545, y: 224.019, id: 'rudolfinum' },
//   { x: 488.545, y: 586.019, id: 'narodniDivadlo' },
//   { x: 483.545, y: 730.019, id: 'tanciciDum' }, //
//   { x: 231.545, y: 146.019, id: 'chramSvVita' },
//   { x: 223.545, y: 307.019, id: 'chramSvMikulase' },
//   { x: 75.5447, y: 461.019, id: 'petrin' },
//   { x: 414.545, y: 359.019, id: 'karluvMost' },
//   { x: 867.545, y: 606.019, id: 'narodniMuzeum' },
//   { x: 829.545, y: 295.019, id: 'obecniDum' },
// ];

// export const GamePage = () => {
//   // konstanty
//   const [activeId, setActiveId] = useState(null);

//   const [colorClass, setColorClass] = useState('color-answer-neutral');

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [isWinnerBoxOpen, setIsWinnerBoxOpen] = useState(false);

//   const [message, setMessage] = useState('Začni hrát!');

//   const [{ x, y }, setCoordinates] = useState({ x: 0, y: 0 });

//   const [isSolved, setIsSolved] = useState({
//     orloj: false,
//     rudolfinum: false,
//     narodniDivadlo: false,
//     tanciciDum: false,
//     chramSvVita: false,
//     chramSvMikulase: false,
//     petrin: false,
//     karluvMost: false,
//     narodniMuzeum: false,
//     obecniDum: false,
//   });

//   const checkAllSolved = () => {
//     return Object.values(isSolved).every((solved) => solved);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (checkAllSolved()) {
//         setIsWinnerBoxOpen(true);
//       }
//     }, 500);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [isSolved]);

//   const handleDragStart = (event) => {
//     console.log('Drag start called', event);

//     setActiveId(event.active.id);
//   };

//   const handleDragEnd = (event) => {
//     console.log('Drag end called');
//     const { active, over, delta } = event;

//     if (active.id === 'map') {
//       console.log('handle');
//       setCoordinates(({ x, y }) => {
//         return {
//           x: x + delta.x,
//           y: y + delta.y,
//         };
//       });
//       return;
//     }

//     console.log('ACTIVE :' + active.id);
//     console.log('OVER :' + over.id);

//     if (active.id === over.id) {
//       const newIsSolved = { ...isSolved, [active.id]: true };

//       setIsSolved(newIsSolved);
//       setMessage('Správně!');
//       setColorClass('color-answer-right');
//     } else if (active.id !== over.id) {
//       setMessage('Zkus to ještě jednou!');
//       setColorClass('color-answer-neutral');
//     }

//     setActiveId(null);
//   };

//   const handleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleConfirm = (event) => {
//     const confirmed = window.confirm('Opravdu si přeješ opustit hru?');

//     if (!confirmed) {
//       event.preventDefault();
//     }
//   };

//   return (
//     <div className="container">
//       <DndContext
//         collisionDetection={closestCenter}
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//       >
//         <div className="left-column">
//           {isWinnerBoxOpen && <WinnerBox />}
//           {isModalOpen && <ModalBox onIsModalOpen={handleModal} />}
//           <div className="viewport">
//             <Map top={y} left={x}>
//               {dropBoxData.map((dropBox) => (
//                 <DropBox
//                   x={dropBox.x}
//                   y={dropBox.y}
//                   isSolved={isSolved}
//                   id={dropBox.id}
//                   key={dropBox.id}
//                   disabled={activeId === 'map'}
//                 ></DropBox>
//               ))}
//             </Map>
//           </div>
//         </div>
//         <div className="right-column">
//           <div className="top-menu">
//             <motion.button
//               onClick={handleModal}
//               className="btn btn-menu"
//               whileHover={{
//                 scale: 1.1,
//                 transition: { duration: 0.6 },
//               }}
//               animate={{
//                 scale: 1,
//                 transition: { duration: 0.6 },
//               }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Jak hrát?
//             </motion.button>
//             <QuestionIcon
//               onClick={handleModal}
//               className="question-icon"
//             ></QuestionIcon>

//             <Link to="/">
//               <HomeIcon className="home-icon"></HomeIcon>

//               <motion.button
//                 onClick={handleConfirm}
//                 className="btn btn-menu"
//                 whileHover={{
//                   scale: 1.1,
//                   transition: { duration: 0.6 },
//                 }}
//                 animate={{
//                   scale: 1,
//                   transition: { duration: 0.6 },
//                 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Domů
//               </motion.button>
//             </Link>
//           </div>

//           <div className={`${colorClass} message-box`}>
//             <MessageBox message={message}></MessageBox>
//           </div>
//           <div className="monuments-box">
//             <div className="monuments-box--list">
//               {monuments
//                 .filter((monument) => !isSolved[monument.id])
//                 .map((monument) => (
//                   <Monument
//                     overlay={false}
//                     key={monument.id}
//                     id={monument.id}
//                   ></Monument>
//                 ))}
//             </div>
//             {activeId !== 'map' && (
//               <DragOverlay>
//                 {activeId && <Monument overlay={true} id={activeId} />}
//               </DragOverlay>
//             )}
//           </div>
//         </div>
//       </DndContext>
//     </div>
//   );
// };

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
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HomeIcon } from '../../components/HomeIcon';
import { QuestionIcon } from '../../components/QuestionIcon';

const dropBoxData = [
  { x: 651.545, y: 322.019, id: 'orloj' },
  { x: 506.545, y: 224.019, id: 'rudolfinum' },
  { x: 488.545, y: 586.019, id: 'narodniDivadlo' },
  { x: 483.545, y: 730.019, id: 'tanciciDum' },
  { x: 231.545, y: 146.019, id: 'chramSvVita' },
  { x: 223.545, y: 307.019, id: 'chramSvMikulase' },
  { x: 75.5447, y: 461.019, id: 'petrin' },
  { x: 414.545, y: 359.019, id: 'karluvMost' },
  { x: 867.545, y: 606.019, id: 'narodniMuzeum' },
  { x: 829.545, y: 295.019, id: 'obecniDum' },
];

const defaultValues = {
  orloj: false,
  rudolfinum: false,
  narodniDivadlo: false,
  tanciciDum: false,
  chramSvVita: false,
  chramSvMikulase: false,
  petrin: false,
  karluvMost: false,
  narodniMuzeum: false,
  obecniDum: false,
};

export const GamePage = () => {
  // konstanty
  const [activeId, setActiveId] = useState(null);

  const [colorClass, setColorClass] = useState('color-answer-neutral');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isWinnerBoxOpen, setIsWinnerBoxOpen] = useState(false);

  const [message, setMessage] = useState(() => {
    const savedMessage = sessionStorage.getItem('messageText');
    return savedMessage || 'Začni hrát!';
  });

  const [{ x, y }, setCoordinates] = useState({ x: 0, y: 0 });

  const [isSolved, setIsSolved] = useState(() => {
    const savedIsSolved = sessionStorage.getItem('isSolved');
    return savedIsSolved ? JSON.parse(savedIsSolved) : defaultValues;
  });
  const [isGameCompleted, setIsGameCompleted] = useState(() => {
    const savedIsGameCompleted = sessionStorage.getItem('isGameCompleted');
    return savedIsGameCompleted === 'true';
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isGameCompleted) {
        setIsWinnerBoxOpen(true);
        setMessage('Konec hry');
        sessionStorage.setItem('messageText', 'Konec hry');
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isSolved]);

  useEffect(() => {
    sessionStorage.setItem('isGameCompleted', isGameCompleted);
  }, [isGameCompleted]);

  useEffect(() => {
    sessionStorage.setItem('messageText', message);
  }, [message]);

  useEffect(() => {
    sessionStorage.setItem('colorClass', colorClass);
  }, [colorClass]);

  useEffect(() => {
    sessionStorage.setItem('isSolved', JSON.stringify(isSolved));
  }, [isSolved]);

  useEffect(() => {
    const savedIsSolved = sessionStorage.getItem('isSolved');
    if (savedIsSolved) {
      setIsSolved(JSON.parse(savedIsSolved));
    }

    const savedMessage = sessionStorage.getItem('messageText');
    if (savedMessage) {
      setMessage(savedMessage);
    }

    const savedColorClass = sessionStorage.getItem('colorClass');
    if (savedColorClass) {
      setColorClass(savedColorClass);
    }

    const savedIsGameCompleted = sessionStorage.getItem('isGameCompleted');
    if (savedIsGameCompleted) {
      setIsGameCompleted(savedIsGameCompleted === 'true');
    }
  }, []);

  const handleDragStart = (event) => {
    console.log('Drag start called', event);

    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    console.log('Drag end called');
    const { active, over, delta } = event;

    if (active.id === 'map') {
      console.log('handle');
      setCoordinates(({ x, y }) => {
        return {
          x: x + delta.x,
          y: y + delta.y,
        };
      });
      return;
    }

    console.log('ACTIVE :' + active.id);
    console.log('OVER :' + over.id);

    if (active.id === over.id) {
      const newIsSolved = { ...isSolved, [active.id]: true };
      setIsSolved(newIsSolved);
      setMessage('Správně!');
      setColorClass('color-answer-right');

      if (Object.values(newIsSolved).every((solved) => solved)) {
        setIsGameCompleted(true);
        setColorClass('color-answer-right');
      } else {
        setTimeout(() => {
          if (!isGameCompleted) {
            setMessage('Pokračuj');
            setColorClass('color-answer-neutral');
          }
        }, 800);
      }
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
    if (confirmed) {
      resetGame();
    } else {
      event.preventDefault();
    }
  };

  const resetGame = () => {
    setIsSolved(defaultValues);
    sessionStorage.removeItem('isSolved');
    setMessage('Začni hrát!');
    sessionStorage.removeItem('messageText');
    setColorClass('color-answer-neutral');
    sessionStorage.removeItem('colorClass');
    setIsGameCompleted(false);
    sessionStorage.removeItem('isGameCompleted');
  };

  return (
    <div className="container">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="left-column">
          {isGameCompleted && (
            <WinnerBox
              onResetGame={resetGame}
              onIsGameCompleted={setIsGameCompleted}
            />
          )}
          {isModalOpen && <ModalBox onIsModalOpen={handleModal} />}
          <Map top={y} left={x}>
            {dropBoxData.map((dropBox) => (
              <DropBox
                x={dropBox.x}
                y={dropBox.y}
                isSolved={isSolved}
                id={dropBox.id}
                key={dropBox.id}
                disabled={activeId === 'map'}
              ></DropBox>
            ))}
          </Map>
        </div>
        <div className="right-column">
          <div className="top-menu">
            <motion.button
              onClick={handleModal}
              className="btn btn-menu"
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
              Jak hrát?
            </motion.button>
            <QuestionIcon
              onClick={handleModal}
              className="question-icon"
            ></QuestionIcon>

            <Link to="/">
              <HomeIcon className="home-icon"></HomeIcon>
              <motion.button
                onClick={handleConfirm}
                className="btn btn-menu"
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
                Domů
              </motion.button>
            </Link>
          </div>

          <div className={`${colorClass} message-box`}>
            <MessageBox message={message}></MessageBox>
          </div>
          <div className="monuments-box">
            <div className="monuments-box--list">
              {monuments
                .filter((monument) => !isSolved[monument.id])
                .map((monument) => (
                  <Monument
                    overlay={false}
                    key={monument.id}
                    id={monument.id}
                  ></Monument>
                ))}
            </div>
            {activeId !== 'map' && (
              <DragOverlay>
                {activeId && <Monument overlay={true} id={activeId} />}
              </DragOverlay>
            )}
          </div>
        </div>
      </DndContext>
    </div>
  );
};
