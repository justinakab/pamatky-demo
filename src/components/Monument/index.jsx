import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Orloj } from './Orloj';
import { Rudolfinum } from './Rudolfinum';
import { TanciciDum } from './TanciciDum';
import { NarodniDivadlo } from './NarodniDivadlo';
import { ChramSvVita } from './ChramSvVita';
import { ChramSvMikulase } from './ChramSvMikulase';
import { Petrin } from './Petrin';
import { KarluvMost } from './KarluvMost';
import { NarodniMuzeum } from './NarodniMuzeum';
import { ObecniDum } from './ObecniDum';

const monumentSvgs = {
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

export const Monument = (props) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id: props.id,
    });

  const style = {
    cursor: 'grab',
    opacity: 1,
  };
  if (isDragging) {
    style.opacity = 0.5;
  }
  if (props.overlay) {
    style.cursor = 'grabbing';
    style.transform = `scale(${100 / 156})`;
  }

  const MonumentSvg = monumentSvgs[props.id];

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="156"
        height="156"
        viewBox="0 0 156 156"
        fill="none"
      >
        <MonumentSvg />
      </svg>
    </div>
  );
};
