module.exports = {
  name: "raid",
  category: "Misc",
  description: "Raid message",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    return client.say(channel, `/me Raiding with love kellee1Love kellee1Love`);
  },
};
