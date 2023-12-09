const centerOfRectangle = (rect, left = rect.left, top = rect.top) => {
  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5,
  };
};

const distanceBetween = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

const sortCollisionsAsc = ({ data: { value: a } }, { data: { value: b } }) => {
  return a - b;
};

const maxVzdalenostPrichyceni = 150;

export const closestCenterLimited = ({
  collisionRect,
  droppableRects,
  droppableContainers,
}) => {
  const centerRect = centerOfRectangle(
    collisionRect,
    collisionRect.left,
    collisionRect.top,
  );
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const { id } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);

      if (distBetween < maxVzdalenostPrichyceni) {
        collisions.push({
          id,
          data: { droppableContainer, value: distBetween },
        });
      }
    }
  }

  return collisions.sort(sortCollisionsAsc);
};
