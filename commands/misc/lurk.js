const constants = require("@utils/constants");

const lurk = [
  "<username> has entered lurk mode! Enjoy your lurk.",
  "Have a good lurk, <username>! I'll be seeing you in the shadows of stream ヾ(･ω･｡)ｼ",
  "Hope you have a great lurk, <username>. See you later!",
  "Enjoy your lurk <username>! Take care and we hope to see you again (ノ^∀^)ノ*",
];

module.exports = {
  commands: "lurk",
  description: "Tells the chat you are entering lurk mode.",
  cooldown: 15,
  callback: (client, channel) => {
    const index = constants.getRandomElement(lurk);
    var response = lurk[index].replace("<username>", userstate.username);
    client.say(channel, `/me ${response}`);
    return;
  },
};
