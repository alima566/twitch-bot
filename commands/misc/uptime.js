const fetch = require("node-fetch");
const { log } = require("@utils/utils");

module.exports = {
  name: "uptime",
  category: "Misc",
  description: "Tells you how long Kellee has been live for.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    fetch(
      `https://beta.decapi.me/twitch/uptime/${encodeURIComponent(
        channel.slice(1)
      )}`
    )
      .then((resp) => resp.text())
      .then((data) => {
        if (data.toLowerCase().includes("offline")) {
          return client.say(channel, `/me ${data}`);
        }

        return client.say(
          channel,
          `/me ${channel.slice(1)} has been live for ${data}.`
        );
      })
      .catch((e) => {
        log("ERROR", "./commands/misc/uptime.js", e.message);
      });
  },
};
