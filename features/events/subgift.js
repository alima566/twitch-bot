module.exports = (
  client,
  channel,
  username,
  streakMonths,
  recipient,
  methods,
  userstate
) => {
  if (
    userstate["msg-param-recipient-display-name"].toLowerCase() ===
    process.env.BOT_USERNAME.toLowerCase()
  ) {
    client.say(
      channel,
      `/me Thank you @${username} for gifting a sub to me. I really appreciate it. kellee1Love`
    );
    return;
  } else {
    client.say(
      channel,
      `/me Thank you @${username} for gifting a sub to ${userstate["msg-param-recipient-display-name"]}! PogChamp`
    );
    return;
  }
};
