module.exports = {
  commands: "grouphug",
  description: "Gives a group hug to everyone.",
  cooldown: 15,
  callback: (client, channel, message, userstate, args) => {
    return client.say(
      channel,
      `/me ${userstate.username} gives everyone a group hug! I love you ʕっ•ᴥ•ʔっ kellee1Love`
    );
  },
};
