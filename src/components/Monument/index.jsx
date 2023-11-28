import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Orloj2 } from './Orloj2';
import { Rudolfinum2 } from './Rudolfinum2';

const monumentSvgs = {
  orloj: Orloj2,
  rudolfinum: Rudolfinum2,
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
