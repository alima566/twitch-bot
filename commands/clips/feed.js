module.exports = {
  name: "feed",
  category: "clips",
  description:
    "A Twitch clip of Kellee forgetting to feed her animals when she played Stardew Valley.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Feed ur animals SCRUB https://www.twitch.tv/kelleelu/clip/CrispyBreakableWolverineSeemsGood`
    );
  },
};
