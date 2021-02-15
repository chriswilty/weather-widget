import { useState, useEffect } from 'react';

const logWithTime = message => console.log(`${new Date().toLocaleTimeString()} ${message}`);

/**
  Interval timer hook.
  <p>
    Takes as input args an interval in milliseconds, and a callback supplier
    which will be invoked on start and reset to fetch a callback function for
    the setInterval call. The latter allows the actual callback to be changed
    when resetting the timer, e.g. to use some existing state in a value
    calculation.
  </p><p>
    Timer can be started, reset or stopped using the returned functions.
  </p>
*/
const useInterval = (callbackSupplier, interval) => {
  const [ restarts, setRestarts ] = useState(null);

  useEffect(() => {
    if (restarts !== null) {
      const timerId = setInterval(callbackSupplier(), interval);
      logWithTime(`starting new timer ${timerId}`);
      return () => {
        logWithTime(`clearing timer ${timerId}`);
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
