import { useRef } from 'react';

import useForceUpdate from './forceUpdate';

/**
 * Hook to store a count for looping over, from zero to a given
 * ceiling.
 *
 * Returns current value, plus functions for initialising with a
 * rollover value, incrementing the current count, and overriding with a given
 * count.
 */
const useRolloverCount = () => {
  const update = useForceUpdate();
  const ceilingRef = useRef(null);
  const countRef = useRef(null);

  const setCountSafely = value => {
    if (ceilingRef.current) {
      countRef.current = Math.max(value, 0) % ceilingRef.current; // ensure non-negative
      update(); // useRefs do not trigger updates, so must force one
    }
  }
  const initialise = rolloverAt => {
    ceilingRef.current = rolloverAt;
    setCountSafely(0);
  };
  const increment = () => {
    setCountSafely((countRef.current === null ? -1 : countRef.current) + 1);
  };

  return {
    count: countRef.current,
    initialise,
    increment,
    setCount: setCountSafely
  };
};
export default useRolloverCount;