const { getRandomElement } = require("@utils/functions");

const unlurk = [
  "Welcome back from your lurk <username>! Great to see you again!",
  "Welcome back <username>! Hope you enjoyed your lurk. You've missed absolutely nothing.",
  "<username> has exited lurk mode. Welcome back, we've missed you ʕっ•ᴥ•ʔっ",
];

module.exports = {
  name: "unlurk",
  category: "Misc",
  description: "Tells the chat you have returned from your lurk.",
  cooldown: 15,
  execute: ({ client, channel, userstate }) => {
    const index = getRandomElement(unlurk);
    const response = unlurk[index].replace(
      /<username>/g,
      userstate["display-name"]
    );
    return client.say(channel, `/me ${response}`);
  },
};
