import classNames from 'classnames';
import { memo, useMemo } from 'react';
import './Dots.css';

const Dots = ({ locations, currentIndex, onSelected }) => {
  const locsAndCallbacks = useMemo(() => locations.map((loc, index) => ({
    index,
    location: loc.location,
    onClick: () => onSelected(index)
  })), [locations, onSelected]);

  const dots = locsAndCallbacks.map(({ index, location, onClick }) => (
    <Dot
      key={location}
      title={location}
      selected={index === currentIndex}
      clickHandler={onClick}
    />
  ));

  return (
    <div className="dots" role="group" aria-label="location selector">{dots}</div>
  );
};

const Dot = memo(({ selected, title, clickHandler }) => (
  <button
    className={classNames('dot-box', selected && 'selected')}
    title={title}
    onClick={clickHandler}
    type="button"
  >
    <div className="dot" />
  </button>
));

export default Dots;
