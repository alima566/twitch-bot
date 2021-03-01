const fetch = require("node-fetch");
const { log } = require("@utils/utils");

module.exports = {
  name: "dadjoke",
  category: "Misc",
  description: "KelleeBot tells you a random dad joke.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    fetch(`https://icanhazdadjoke.com/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        return client.say(channel, `/me ${data.joke}`);
      })
      .catch((e) => {
        log("ERROR", "./command/misc/dadjoke.js", e.message);
      });
  },
};
