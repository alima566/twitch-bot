const replaceChars = (string) => {
  return string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_'""`~()]/g, "")
    .replace(/\s{2,}/g, " ");
};

const isBroadcaster = (user) => {
  return user.toLowerCase() === process.env.CHANNEL_NAME.toLowerCase();
};

const getRandomElement = (array) => {
  return Math.floor(Math.random() * array.length);
};

module.exports = {
  replaceChars,
  isBroadcaster,
  getRandomElement,
};
