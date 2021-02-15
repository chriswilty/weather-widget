import { useEffect } from 'react';

import useInterval from './interval';
import useRolloverCount from './rolloverCount';

/**
 * Hook for continuously looping through an array of items on a timer, returning
 * to the start when reaching the end.
 *
 * @param interval milliseconds pause before progressing to the next item
 * @returns [itemIndex: number, initialise: (number) => void, setItemIndex: (number) => void]
 */
const useIntervalCount = (interval) => {
  const {
    count: item,
    initialise: initialiseRollover,
    increment: incrementItem,
    setCount: setSelectedItem
  } = useRolloverCount();
  const { startTimer, stopTimer, restartTimer } = useInterval(() => incrementItem, interval);

  useEffect(() => stopTimer, []);

  // Set number of items
  const initialise = size => {
    initialiseRollover(size);
    startTimer();
  };

  // Manually set the item (e.g. user-triggered action)
  const setItem = index => {
    restartTimer();
    setSelectedItem(index);
  };

  return [item, initialise, setItem];
};

export default useIntervalCount;