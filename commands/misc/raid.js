module.exports = {
  commands: "raid",
  description: "Raid message",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(channel, `/me Raiding with love kellee1Love kellee1Love`);
    return;
  },
};
