import weatherData from 'src/data/weatherData';

const pause = millisecs => {
  let cancel = () => null;
  const promise = new Promise((resolve, reject) => {
    const timerId = setTimeout(resolve, millisecs);
    cancel = () => {
      console.log(`cancelling timer ${timerId}`);
      clearTimeout(timerId);
      reject(new Error(`cancelled timer ${timerId}`));
    };
  });
  return { promise, cancel };
};

const fetchData = () => {
  console.log('faking a data fetch ...');
  const { promise, cancel } = pause(1000);
  return {
    dataPromise: promise.then(() => weatherData.slice()),
    cancel
  };
};

export default fetchData;
