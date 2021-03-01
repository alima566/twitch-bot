const fetch = require("node-fetch");
const { log } = require("@utils/utils");

module.exports = {
  name: "blind",
  category: "Misc",
  description:
    "Tells viewers that Kellee is doing a blind run-through of the game.",
  cooldown: 15,
  globalCooldown: true,
  execute: async ({ client, channel }) => {
    const game = await getGame(channel);
    return client.say(
      channel,
      `/me Kellee is doing a blind playthrough of ${game}! We ask that you PLEASE don't give Kellee any hints, tips, tricks, or spoilers whatsoever unless asked and let her figure stuff out on her own! Thank you!`
    );
  },
};

const getGame = (channel) => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await fetch(
        `https://beta.decapi.me/twitch/game/${channel.slice(1).toLowerCase()}`
      );
      const result = await body.text();
      if (result) {
        resolve(result);
      } else {
        reject("There was a problem retrieving game data.");
      }
    } catch (e) {
      log("ERROR", "./command/misc/blind.js", e.message);
    }
  });
};
