const numeral = require("numeral");

module.exports = (client, channel, userstate, message) => {
  const numBits = numeral(userstate.bits).format("0,0");
  return client.say(
    channel,
    `/me Thank you @${userstate["display-name"]} for the ${numBits} bit${
      userstate.bits !== 1 ? "s" : ""
    }!`
  );
};
