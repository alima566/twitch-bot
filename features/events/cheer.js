const numeral = require("numeral");

module.exports = (client, channel, userstate, message) => {
  const numBits = numeral(userstate.bits).format("0,0");
  client.say(
    channel,
    `/me Thank you @${userstate.username} for the ${numBits} ${
      userstate.bits > 1 ? "bits" : "bit"
    }!`
  );
  return;
};
