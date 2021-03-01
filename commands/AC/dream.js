module.exports = {
  name: "dream",
  category: "AC",
  description: "KelleeLuna's ACNH dream address.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    return client.say(
      channel,
      `/me Kellee's AC Island's dream address is: DA-9394-6234-2828`
    );
  },
};
