module.exports = (client) => {
  client.on(
    "resub",
    (channel, username, months, message, userstate, methods) => {
      const cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
      client.say(
        channel,
        `/me Thank you @${username} for the ${cumulativeMonths} sub! PogChamp`
      );
      return;
    }
  );
};
