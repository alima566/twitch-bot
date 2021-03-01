const fetch = require("node-fetch");
const numeral = require("numeral");
const { getRandomElement } = require("@utils/functions");
const { log } = require("@utils/utils");

module.exports = {
  name: "numb3rs",
  category: "Misc",
  description: "KelleeBot tells you a random number fact.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    const numAPI = ["trivia", "math"];
    const index = getRandomElement(numAPI);
    const api = numAPI[index];
    fetch(`http://numbersapi.com/random/${encodeURIComponent(api)}`)
      .then((resp) => resp.text())
      .then((data) => {
        const num = data.match(/\d+/g);
        const formattedNum = numeral(num[0]).format("0,0");
        return client.say(channel, `/me ${data.replace(num[0], formattedNum)}`);
      })
      .catch((e) => {
        log("ERROR", "./commands/misc/numb3rs.js", e.message);
      });
  },
};
