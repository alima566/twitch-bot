const comp = require("@utils/compliments");
const constants = require("@utils/constants");
module.exports = {
  commands: "ty",
  minArgs: 0,
  description: "KelleeBot gives you or another user a random compliment.",
  cooldown: 15,
  callback: (client, channel, message, userstate, args) => {
    var index = constants.getRandomElement(comp.COMPLIMENTS);
    var compliment = comp.COMPLIMENTS[index];
    if (args.length === 0) {
      client.say(
        channel,
        `/me ${compliment.replace("<user>", userstate.username)} KPOPheart`
      );
      return;
    } else {
      const user = args.startsWith("@") ? args.replace("@", "") : args;
      client.say(
        channel,
        `/me ${compliment.replace("<user>", user)} KPOPheart`
      );
      return;
    }
  },
};
