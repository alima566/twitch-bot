module.exports = {
  commands: "fc",
  description: "KelleeLuna's Nintendo Switch friend code.",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(channel, `/me Kellee's Switch friend code: SW-1603-0974-7504`);
    return;
  },
};
