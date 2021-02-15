import weatherData from 'data/weatherData';

const pause = async millisecs => new Promise(resolve =>
  setTimeout(resolve, millisecs)
);

const fetchData = async () => {
  console.log('fetching data ...');
  await pause(1000);
  return weatherData.slice();
};

export { fetchData }
