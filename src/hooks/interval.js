import { useState, useEffect } from 'react';

/**
  Interval timer hook.
  <p>
    Takes as input args an interval in milliseconds, and a callback supplier
    which will be invoked on start and reset to fetch a callback function for
    the setInterval call.
  </p><p>
    Timer can be started, reset or stopped using the returned functions.
  </p>
*/
const useInterval = ({ interval = 3000, callbackSupplier }) => {
  const [ restarts, setRestarts ] = useState(null);

  useEffect(() => {
    if (restarts !== null) {
      const timerId = setInterval(callbackSupplier(), interval);
      console.log(`starting new timer ${timerId}`);
      return () => {
        console.log(`clearing timer ${timerId}`);
        clearInterval(timerId);
      }
    }
  }, [restarts]);

  return {
    startTimer: () => setRestarts(0),
    restartTimer: () => setRestarts(restarts + 1),
    stopTimer: () => setRestarts(null)
  };
};

export default useInterval;
