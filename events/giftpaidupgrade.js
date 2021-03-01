module.exports = (client, channel, username, sender, userstate) => {
  return client.say(
    channel,
    `/me Thank you @${username} for continuing your gifted sub from ${userstate["msg-param-sender-name"]}!`
  );
};
