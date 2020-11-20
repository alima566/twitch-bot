module.exports = {
  commands: "discord",
  description: "A link to Kéllee's Discord server.",
  callback: (client, channel, message, userstate, args) => {
    if (userstate.mod || constants.isBroadcaster(userstate.username)) {
      client.say(
        channel,
        `/me Come join the Lunar Circle! https://discord.gg/M8fxKXq`
      );
      return;
    }
  },
};
