module.exports = {
  name: "pw",
  category: "Misc",
  description: "Tetris password lobby password.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    return client.say(channel, `/me Password: 108523`);
  },
};
