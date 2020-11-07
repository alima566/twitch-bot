const fetch = require("node-fetch");
const constants = require("@utils/constants");
module.exports = {
  commands: "followage",
  description: "Tells you how long you've been following KelleeLuna for.",
  cooldown: 15,
  callback: (client, channel, message, userstate) => {
    fetch(
      `https://beta.decapi.me/twitch/followage/${process.env.CHANNEL_NAME}/${userstate.username}?precision=7`
    )
      .then((resp) => resp.text())
      .then((data) => {
        if (constants.replaceChars(data) === "a user cannot follow themself") {
          client.say(channel, `/me ${data}`);
          return;
        } else {
          client.say(
            channel,
            `/me ${userstate.username} has been following ${process.env.CHANNEL_NAME} for ${data}.`
          );
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
