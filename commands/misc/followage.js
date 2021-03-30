const fetch = require("node-fetch");
const { replaceChars } = require("@utils/functions");
const { log } = require("@utils/utils");

module.exports = {
  name: "followage",
  category: "Misc",
  description: "Tells you how long you've been following KelleeLuna for.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel, userstate }) => {
    fetch(
      `https://beta.decapi.me/twitch/followage/${process.env.CHANNEL_NAME}/${userstate.username}?precision=7`
    )
      .then((resp) => resp.text())
      .then((data) => {
        if (replaceChars(data) === "a user cannot follow themself") {
          return client.say(channel, `/me ${data}`);
        }

        return client.say(
          channel,
          `/me ${userstate["display-name"]} has been following ${process.env.CHANNEL_NAME} for ${data}.`
        );
      })
      .catch((e) => {
        log("ERROR", "./command/misc/followage.js", e.message);
      });
  },
};
