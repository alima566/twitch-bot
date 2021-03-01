module.exports = {
  name: "discord",
  category: "Mod",
  description: "A link to Kéllee's Discord server.",
  isModOnly: true,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Come join the Lunar Circle! https://discord.gg/M8fxKXq`
    );
  },
};
