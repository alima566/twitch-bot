module.exports = {
  commands: "pw",
  description: "Tetris password lobby password.",
  cooldown: 15,
  includeInCommands: false,
  callback: (client, channel) => {
    client.say(channel, `/me Password: 108523`);
    return;
  },
};
