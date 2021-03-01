module.exports = {
  name: "grouphug",
  category: "Misc",
  description: "Gives a group hug to everyone.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel, userstate }) => {
    return client.say(
      channel,
      `/me ${userstate.username} gives everyone a group hug! I love you ʕっ•ᴥ•ʔっ kellee1Love`
    );
  },
};
