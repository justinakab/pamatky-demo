import { Orloj } from '../../components/Monument/Orloj';
import { Rudolfinum } from '../../components/Monument/Rudolfinum';
import { TanciciDum } from '../../components/Monument/TanciciDum';
import { NarodniDivadlo } from '../../components/Monument/NarodniDivadlo';
import { ChramSvVita } from '../../components/Monument/ChramSvVita';
import { ChramSvMikulase } from '../../components/Monument/ChramSvMikulase';
import { Petrin } from '../../components/Monument/Petrin';
import { KarluvMost } from '../../components/Monument/KarluvMost';
import { NarodniMuzeum } from '../../components/Monument/NarodniMuzeum';
import { ObecniDum } from '../../components/Monument/ObecniDum';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { MapSVG } from './mapasvg';
import { memo } from 'react';

const dropBoxSvgs = {
  orloj: Orloj,
  rudolfinum: Rudolfinum,
  tanciciDum: TanciciDum,
  narodniDivadlo: NarodniDivadlo,
  chramSvVita: ChramSvVita,
  chramSvMikulase: ChramSvMikulase,
  petrin: Petrin,
  karluvMost: KarluvMost,
  narodniMuzeum: NarodniMuzeum,
  obecniDum: ObecniDum,
};

export const Map = ({ top, left, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'map',
  });

  const MemoMapSvg = memo(MapSVG);
  const finalTransform = transform ?? { x: 0, y: 0, scaleX: 1, scaleY: 1 };
  finalTransform.x += left;
  finalTransform.y += top;

  const style = {
    transform: CSS.Translate.toString(finalTransform),
  };

  return (
    <svg
      width="1030"
      height="836"
      viewBox="0 0 1030 836"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="left-column--map"
    >
      <defs>
        {Object.entries(dropBoxSvgs).map(([id, Monument]) => (
          <symbol
            key={id}
            id={id}
            width="154"
            height="154"
            viewBox="0 0 154 154"
            fill="none"
          >
            <Monument />
          </symbol>
        ))}
      </defs>
      <MemoMapSvg />
      {children}
    </svg>
  );
};
