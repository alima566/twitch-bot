module.exports = {
  name: "sonic",
  category: "clips",
  description: 'A Twitch clip of Kellee taking the "sonic" route.',
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Let's take the sonic route! https://clips.twitch.tv/ResoluteGracefulPlumageFailFish`
    );
  },
};
