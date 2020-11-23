const fetch = require("node-fetch");
const constants = require("@utils/constants");
module.exports = {
  commands: ["so", "shoutout"],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<The user to shout out>",
  description: "Shouts out a fellow streamer.",
  isModOnly: true,
  callback: (client, channel, message, userstate, args) => {
    //if (userstate.mod || constants.isBroadcaster(userstate.username)) {
    const user = args.startsWith("@") ? args.replace("@", "") : args;
    fetch(`https://beta.decapi.me/twitch/game/${user.toLowerCase()}`)
      .then((resp) => resp.text())
      .then((data) => {
        if (user.toLowerCase() === userstate.username.toLowerCase()) {
          client.say(channel, `/me You can't shout yourself out. Kappa`);
          return;
        } else if (
          user.toLowerCase() === process.env.CHANNEL_NAME.toLowerCase()
        ) {
          client.say(
            channel,
            `/me You can't shout the streamer out on their own channel. Kappa`
          );
          return;
        } else if (
          user.toLowerCase() === process.env.BOT_USERNAME.toLowerCase()
        ) {
          client.say(
            channel,
            `/me Don't shout me out please, I don't like the attention.`
          );
          return;
        }

        if (typeof data === "undefined" || data === "") {
          client.say(
            channel,
            `/me ${user} doesn't stream :( but you should still go give them a follow anyways! https://www.twitch.tv/${user}`
          );
          return;
        } else if (
          data.toLowerCase().includes("no user") ||
          data.toLowerCase() === "404 page not found"
        ) {
          client.say(channel, `/me I couldn't find that user kellee1Cry`);
          return;
        } else {
          client.say(
            channel,
            `/me kellee1Love Be sure to show ${user} some love and follow them at https://www.twitch.tv/${user.toLowerCase()} They were last playing ${data} kellee1Love`
          );
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //}
  },
};
