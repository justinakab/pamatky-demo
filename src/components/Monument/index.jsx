import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Orloj } from './Orloj';
import { Rudolfinum } from './Rudolfinum';
import { TanciciDum } from '../Monument/TanciciDum';
import { NarodniDivadlo } from '../Monument/NarodniDivadlo';

const monumentSvgs = {
  orloj: Orloj,
  rudolfinum: Rudolfinum,
  tanciciDum: TanciciDum,
  narodniDivadlo: NarodniDivadlo,
};

export const Monument = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const MonumentSvg = monumentSvgs[props.id];

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <MonumentSvg></MonumentSvg>
    </div>
  );
};
