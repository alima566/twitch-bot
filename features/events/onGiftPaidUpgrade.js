module.exports = (client) => {
  client.on("giftpaidupgrade", (channel, username, sender, userstate) => {
    client.say(
      channel,
      `/me Thank you @${username} for continuing your gifted sub from ${userstate["msg-param-sender-name"]}!`
    );
    return;
  });
};
