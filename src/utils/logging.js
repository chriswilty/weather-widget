const notProduction = process.env.NODE_ENV !== 'production';

const pad = len => input => `${input}`.padStart(len, '0');
const twoPad = pad(2);
const threePad = pad(3);

const debug = message => {
  if (notProduction) {
    const now = new Date();
    const hours = twoPad(now.getHours());
    const mins = twoPad(now.getMinutes());
    const secs = twoPad(now.getSeconds());
    const millis = threePad(now.getMilliseconds());

    console.log(`${hours}:${mins}:${secs}.${millis} ${message}`);
  }
};

export { debug };
