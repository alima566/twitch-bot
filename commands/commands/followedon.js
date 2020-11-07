const fetch = require("node-fetch");
const constants = require("@utils/constants");
module.exports = {
  commands: "followedon",
  description: "Tells you when you started following KelleeLuna.",
  cooldown: 15,
  callback: (client, channel, message, userstate) => {
    fetch(
      `https://beta.decapi.me/twitch/followed/${process.env.CHANNEL_NAME}/${
        userstate.username
      }?tz=America/New_York&format=${encodeURIComponent("d/m/yy g:i:s A T")}`
    )
      .then((response) => response.text())
      .then((data) => {
        if (constants.replaceChars(data) === "a user cannot follow themself") {
          client.say(channel, `/me ${data}`);
        } else {
          client.say(
            channel,
            `/me ${userstate.username} followed ${process.env.CHANNEL_NAME} on ${data}.`
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
