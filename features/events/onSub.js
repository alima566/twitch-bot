module.exports = (client) => {
  client.on("subscription", (channel, username, sender, userstate) => {
    client.say(
      channel,
      `/me Thank you @${username} for subscribing! kellee1Love`
    );
    return;
  });
};