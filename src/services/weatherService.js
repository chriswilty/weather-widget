import weatherData from 'src/data/weatherData';
import { debug } from 'src/utils';

const pause = millisecs => {
  let cancel = () => null;
  const promise = new Promise((resolve, reject) => {
    const timerId = setTimeout(resolve, millisecs);
    cancel = () => {
      debug(`cancelling timer ${timerId}`);
      clearTimeout(timerId);
      reject(new Error(`cancelled timer ${timerId}`));
    };
  });
  return { promise, cancel };
};

const fetchData = () => {
  debug('faking a data fetch ...');
  const { promise, cancel } = pause(1000);
  return {
    dataPromise: promise.then(() => weatherData.slice()),
    cancel
  };
};

export default fetchData;
