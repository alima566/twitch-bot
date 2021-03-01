module.exports = (client, channel, username, sender, userstate) => {
  return client.say(
    channel,
    `/me Thank you @${username} for subscribing! kellee1Love`
  );
};
