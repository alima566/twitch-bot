const constants = require("@utils/constants");
module.exports = {
  commands: "botcolor",
  description: "Changes the bot color.",
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<The bot's colour>",
  isModOnly: true,
  callback: (client, channel, message, userstate, args) => {
    //if (userstate.mod || constants.isBroadcaster(userstate.username)) {
    const color = args;
    client
      .color(process.env.BOT_USERNAME, color)
      .then((data) => {
        client.say(channel, `/me My color has been changed to ${color}.`);
      })
      .catch((err) => {
        client.say(
          channel,
          `/me Color must be one of the following: Blue, BlueViolet, CadetBlue, Chocolate, Coral, DodgerBlue, Firebrick, GoldenRod, Green, HotPink, OrangeRed, Red, SeaGreen, SpringGreen, YellowGreen.`
        );
        console.log(err);
      });
    return;
    //}
  },
};
