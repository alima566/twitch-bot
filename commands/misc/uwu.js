module.exports = {
  commands: "uwu",
  description: "GGs",
  cooldown: 15,
  includeInCommands: false,
  callback: (client, channel) => {
    client.say(channel, `PrideUwu`);
    return;
  },
};
