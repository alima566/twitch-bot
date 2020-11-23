const constants = require("@utils/constants");

const unlurk = [
  "Welcome back from your lurk <username>! Great to see you again!",
  "Welcome back <username>! Hope you enjoyed your lurk. You've missed absolutely nothing.",
  "<username> has exited lurk mode. Welcome back, we've missed you ʕっ•ᴥ•ʔっ",
];

module.exports = {
  commands: "unlurk",
  description: "Tells the chat you have returned from your lurk.",
  cooldown: 15,
  callback: (client, channel, message, userstate) => {
    const index = constants.getRandomElement(unlurk);
    var response = unlurk[index].replace("<username>", userstate.username);
    client.say(channel, `/me ${response}`);
    return;
  },
};
