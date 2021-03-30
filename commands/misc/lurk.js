const { getRandomElement } = require("@utils/functions");

const lurk = [
  "<username> has entered lurk mode! Enjoy your lurk.",
  "Have a good lurk, <username>! I'll be seeing you in the shadows of stream ヾ(･ω･｡)ｼ",
  "Hope you have a great lurk, <username>. See you later!",
  "Enjoy your lurk <username>! Take care and we hope to see you again (ノ^∀^)ノ*",
];

module.exports = {
  name: "lurk",
  category: "Misc",
  description: "Tells the chat you are entering lurk mode.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel, userstate }) => {
    const index = getRandomElement(lurk);
    const response = lurk[index].replace(
      /<username>/g,
      userstate["display-name"]
    );
    return client.say(channel, `/me ${response}`);
  },
};
