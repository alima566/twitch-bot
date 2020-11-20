module.exports = {
  commands: "dream",
  description: "KelleeLuna's ACNH dream address.",
  cooldown: 15,
  callback: (client, channel) => {
    client.say(
      channel,
      `/me Kellee's AC Island's dream address is: DA-9394-6234-2828`
    );
    return;
  },
};
