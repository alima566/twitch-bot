const { getRandomElement } = require("@utils/functions");

const replies = [
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

module.exports = {
  name: "8ball",
  description: "Ask KelleeBot a question.",
  category: "Misc",
  cooldown: 15,
  execute: ({ client, channel, text }) => {
    if (text.length === 0) {
      return client.say(channel, `/me Please ask a question.`);
    }
    const index = getRandomElement(replies);
    const response = replies[index];
    return client.say(channel, `/me ${response}`);
  },
};
