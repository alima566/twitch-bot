module.exports = {
  commands: "sonic",
  description: 'A Twitch clip of Kellee taking the "sonic" route.',
  cooldown: 15,
  callback: (client, channel) => {
    client.say(
      channel,
      `/me Let's take the sonic route! https://clips.twitch.tv/ResoluteGracefulPlumageFailFish`
    );
    return;
  },
};
