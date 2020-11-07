module.exports = (client) => {
  client.on("hosted", (channel, username, method, message, userstate) => {
    client.say(
      channel,
      `/me Thank you @${username} for hosting the stream! kellee1Love`
    );
    return;
  });
};
