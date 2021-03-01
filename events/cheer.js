module.exports = (client, channel, userstate, message) => {
  return client.say(
    channel,
    `/me Thank you @${
      userstate.username
    } for the ${userstate.bits.toLocaleString()} bit${
      userstate.bits !== 1 ? "s" : "bit"
    }!`
  );
};
