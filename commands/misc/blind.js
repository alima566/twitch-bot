const fetch = require("node-fetch");

module.exports = {
  commands: "blind",
  description:
    "Tells viewers that Kellee is doing a blind run-through of the game.",
  cooldown: 15,
  callback: async (client, channel) => {
    const game = await getGame(channel);
    return client.say(
      channel,
      `/me Kellee is doing a blind playthrough of ${game}! We ask that you PLEASE don't give Kellee hints, tips, tricks, or spoilers whatsoever unless asked and let her figure stuff out on her own! Thank you!`
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
      console.log(e);
    }
  });
};
