module.exports = (client, channel, username, method, message, userstat) => {
  client.say(
    channel,
    `/me Thank you @${username} for hosting the stream! kellee1Love`
  );
  return;
};
