module.exports.replaceChars = (string) => {
  return string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_'""`~()]/g, "")
    .replace(/\s{2,}/g, " ");
};

module.exports.isBroadcaster = (user) => {
  return user.toLowerCase() === process.env.CHANNEL_NAME.toLowerCase();
};

module.exports.getRandomElement = (array) => {
  return Math.floor(Math.random() * array.length);
};
