module.exports = {
  commands: "uwu",
  description: "GGs",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(channel, `PrideUwu`);
    return;
  },
};
