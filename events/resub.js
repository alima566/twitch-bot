module.exports = (
  client,
  channel,
  username,
  months,
  message,
  userstate,
  methods
) => {
  const cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
  return client.say(
    channel,
    `/me Thank you @${username} for the ${cumulativeMonths} month${
      cumulativeMonths != 1 ? "s" : ""
    } sub! PrideRise`
  );
};
