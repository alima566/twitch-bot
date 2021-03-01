const fetch = require("node-fetch");
const { log } = require("@utils/utils");

module.exports = {
  name: "dadadvice",
  category: "Misc",
  description: "KelleeBot gives you a random dad advice.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    fetch(`https://api.adviceslip.com/advice`) //`https://api.scorpstuff.com/advice.php`)
      .then((resp) => resp.json())
      .then((data) => {
        return client.say(channel, `/me ${data["slip"]["advice"]}`);
      })
      .catch((e) => {
        log("ERROR", "./command/misc/dadadvice.js", e.message);
      });
  },
};
