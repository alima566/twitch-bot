const constants = require("@utils/constants");
const countdown = require("@utils/countdown");
module.exports = {
  commands: "cd",
  minArgs: 0,
  maxArgs: 1,
  description: "Starts a countdown in chat.",
  isModOnly: true,
  callback: (client, channel, message, userstate, args) => {
    //if (userstate.mod || constants.isBroadcaster(userstate.username)) {
    if (!countdown.cd.cdStarted) {
      if (!args.length) {
        countdown.cd.cdStarted = true;
        countdown.countdown(client, channel, 6);
        return;
      }

      if (!args.startsWith("20") && args !== "10") return;

      if (args.toLowerCase().startsWith("20")) {
        const color = args.slice(2);
        if (!color) {
          countdown.cd.cdStarted = true;
          countdown.countdown(client, channel, 20);
          return;
        }

        if (color === "r" || color === "y" || color === "b" || color === "g") {
          countdown.cd.cdStarted = true;
          countdown.countdownTeams(client, channel, color);
        } else {
          client.say(channel, `/me Unknown team color`);
          return;
        }
      }

      if (args.toLowerCase() === "10") {
        countdown.cd.cdStarted = true;
        countdown.countdown(client, channel, 10);
        return;
      }
    } else {
      client.say(
        channel,
        `/me I can only do one countdown at a time kellee1Glare`
      );
      return;
    }
    //}
  },
};
