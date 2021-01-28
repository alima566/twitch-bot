module.exports = {
  commands: "gg",
  description: "GGs",
  cooldown: 15,
  includeInCommands: false,
  callback: (client, channel) => {
    client.say(channel, `kellee1GG`);
    return;
  },
};
