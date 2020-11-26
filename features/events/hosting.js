module.exports = (client, channel, target, viewers) => {
  client.say(
    channel,
    `/me We are now hosting ${target} with ${viewers} viewers!`
  );
  return;
};
