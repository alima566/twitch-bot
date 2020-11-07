module.exports = {
  replaceChars: function (string) {
    return string
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_'""`~()]/g, "")
      .replace(/\s{2,}/g, " ");
  },
  isBroadcaster: function (user) {
    return user.toLowerCase() === process.env.CHANNEL_NAME.toLowerCase();
  },
  getRandomElement: function (array) {
    return Math.floor(Math.random() * array.length);
  },
};
