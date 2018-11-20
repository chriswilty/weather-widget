import React from 'react';

import './Dots.css';

const Dots = ({ count, currentIndex, onSelected }) => {
  const dots = [];
  for (let d = 0; d < count; d++) {
    dots.push(
      <Dot
        key={d}
        index={d}
        selected={d === currentIndex}
        clickHandler={onSelected}
      />
    );
  }
  return (
    <div className="dots">{dots}</div>
  )
};

const Dot = ({ index, selected, clickHandler }) => {
  const handleClick = e => clickHandler(index);
  const classNames = 'dot-box' + (selected ? ' selected' : '');
  return (
    <div className={classNames} onClick={handleClick}>
      <div className={"dot"} />
    </div>
  )
};

export default Dots;
