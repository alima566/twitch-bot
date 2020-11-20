module.exports = {
  commands: "feed",
  description:
    "A Twitch clip of Kellee forgetting to feed her animals when she played Stardew Valley.",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(
      channel,
      `/me Feed ur animals SCRUB https://www.twitch.tv/kelleelu/clip/CrispyBreakableWolverineSeemsGood`
    );
    return;
  },
};
