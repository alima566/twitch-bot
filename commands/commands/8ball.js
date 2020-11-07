const constants = require("@utils/constants");
module.exports = {
  commands: "8ball",
  expectedArgs: "<Question>",
  minArgs: 1,
  description: "Ask KelleeBot a question.",
  cooldown: 15,
  callback: (client, channel) => {
    let replies = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes, definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Very doubtful.",
    ];
    let index = constants.getRandomElement(replies);
    let response = replies[index];
    client.say(channel, `/me ${response}`);
    return;
  },
};
