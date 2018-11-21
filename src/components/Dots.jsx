import React from 'react';

import './Dots.css';

const Dots = ({ locations, currentIndex, onSelected }) => {
  const dots = locations.map((loc, index) =>
    <Dot
      key={loc.location}
      index={index}
      title={loc.location}
      selected={index === currentIndex}
      clickHandler={onSelected}
    />
  );

  return (
    <div className="dots">{dots}</div>
  )
};

const Dot = ({ index, selected, title, clickHandler }) => {
  const handleClick = e => clickHandler(index);
  const classNames = 'dot-box' + (selected ? ' selected' : '');
  return (
    <div className={classNames} title={title} onClick={handleClick}>
      <div className={"dot"} />
    </div>
  )
};

export default Dots;
