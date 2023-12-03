const restrictToParentImpl = (
  x,
  y,
  { active, containerNodeRect, draggingNodeRect, transform },
) => {
  if (!active || active.id !== 'map' || !draggingNodeRect) {
    return transform;
  }

  const currentRect = {
    left: draggingNodeRect.left + transform.x + x,
    top: draggingNodeRect.top + transform.y + y,
    right: draggingNodeRect.right + transform.x + x,
    bottom: draggingNodeRect.bottom + transform.y + y,
    width: draggingNodeRect.width,
    height: draggingNodeRect.height,
  };
  const boundingRect = {
    left: containerNodeRect.left,
    top: containerNodeRect.top,
    right: containerNodeRect.right,
    bottom: containerNodeRect.bottom,
    width: containerNodeRect.width,
    height: containerNodeRect.height,
  };

  const newTransform = {
    ...transform,
  };

  if (currentRect.width <= boundingRect.width) {
    if (currentRect.left < boundingRect.left) {
      newTransform.x = boundingRect.left - (draggingNodeRect.left + x);
    }
    if (currentRect.right > boundingRect.right) {
      newTransform.x = boundingRect.right - (draggingNodeRect.right + x);
    }
  } else {
    console.log(currentRect.left, boundingRect.left);
    if (currentRect.left > boundingRect.left) {
      newTransform.x = boundingRect.left - (draggingNodeRect.left + x);
    }
    if (currentRect.right < boundingRect.right) {
      newTransform.x = boundingRect.right - (draggingNodeRect.right + x);
    }
  }
  if (currentRect.height <= boundingRect.height) {
    if (currentRect.top < boundingRect.top) {
      newTransform.y = boundingRect.top - (draggingNodeRect.top + y);
    }
    if (currentRect.bottom > boundingRect.bottom) {
      newTransform.y = boundingRect.bottom - (draggingNodeRect.bottom + y);
    }
  } else {
    if (currentRect.top > boundingRect.top) {
      newTransform.y = boundingRect.top - (draggingNodeRect.top + y);
    }
    if (currentRect.bottom < boundingRect.bottom) {
      newTransform.y = boundingRect.bottom - (draggingNodeRect.bottom + y);
    }
  }

  return newTransform;
};

export const restrictToParent = (x, y) => {
  return (params) => restrictToParentImpl(x, y, params);
};
