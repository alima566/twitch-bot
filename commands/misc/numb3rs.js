const fetch = require("node-fetch");
const numeral = require("numeral");
const constants = require("@utils/constants");
module.exports = {
  commands: ["numb3rs", "numbers"],
  description: "KelleeBot tells you a random number fact.",
  cooldown: 15,
  callback: (client, channel) => {
    const numAPI = ["trivia", "math"];
    const index = constants.getRandomElement(numAPI);
    const api = numAPI[index];
    fetch(`http://numbersapi.com/random/${api}`)
      .then((response) => response.text())
      .then((data) => {
        const num = data.match(/\d+/g);
        const formattedNum = numeral(num[0]).format("0,0");
        client.say(channel, `/me ${data.replace(num[0], formattedNum)}`);
        return;
      })
      .catch((data) => {
        console.log(data);
      });
  },
};
