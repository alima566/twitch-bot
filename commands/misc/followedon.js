const fetch = require("node-fetch");
const { replaceChars } = require("@utils/functions");
const { log } = require("@utils/utils");

module.exports = {
  name: "followedon",
  category: "Misc",
  description: "Tells you when you started following KelleeLuna.",
  cooldown: 15,
  execute: ({ client, channel, userstate }) => {
    fetch(
      `https://beta.decapi.me/twitch/followed/${process.env.CHANNEL_NAME}/${
        userstate.username
      }?tz=America/New_York&format=${encodeURIComponent("d/m/Y g:i:s A T")}`
    )
      .then((resp) => resp.text())
      .then((data) => {
        if (replaceChars(data) === "a user cannot follow themself") {
          return client.say(channel, `/me ${data}`);
        }

        return client.say(
          channel,
          `/me ${userstate.username} followed ${process.env.CHANNEL_NAME} on ${data}.`
        );
      })
      .catch((e) => {
        log("ERROR", "./command/misc/followedon.js", e.message);
      });
  },
};
