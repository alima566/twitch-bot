module.exports = {
  name: "fc",
  category: "Misc",
  description: "KelleeLuna's Nintendo Switch friend code.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Kellee's Switch friend code: SW-1603-0974-7504`
    );
  },
};
