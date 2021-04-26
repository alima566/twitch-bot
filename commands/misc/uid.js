module.exports = {
  name: "uid",
  category: "Misc",
  description: "KelleeLuna's UID for Genshin.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    return client.say(channel, `/me Kellee's UID: 612811444`);
  },
};
