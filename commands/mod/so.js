const fetch = require("node-fetch");
const { log } = require("@utils/utils");

module.exports = {
  name: "so",
  aliases: ["shoutout"],
  category: "Mod",
  description: "Shouts a fellow streamer out.",
  cooldown: 3,
  globalCooldown: true,
  isModOnly: true,
  execute: ({ client, channel, userstate, args }) => {
    if (args.length === 0) {
      return client.say(channel, `/me Please specifiy someone to shoutout.`);
    }

    let user = args[0].startsWith("@")
      ? args[0].replace("@", "").trim()
      : args[0].trim();

    fetch(`https://beta.decapi.me/twitch/game/${encodeURIComponent(user)}`)
      .then((resp) => resp.text())
      .then((data) => {
        if (user === userstate.username.toLowerCase()) {
          return client.say(channel, `/me You can't shout yourself out. Kappa`);
        }

        if (user === process.env.CHANNEL_NAME.toLowerCase()) {
          return client.say(
            channel,
            `/me You can't shout the streamer out on their own channel. Kappa`
          );
        }

        if (user === process.env.BOT_USERNAME.toLowerCase()) {
          return client.say(
            channel,
            `/me Don't shout me out please, I don't like the attention.`
          );
        }

        if (typeof data === "undefined" || data === "") {
          return client.say(
            channel,
            `/me ${user} doesn't stream :( but you should still go give them a follow anyways! https://www.twitch.tv/${user}`
          );
        }

        if (
          data.toLowerCase().includes("no user") ||
          data.toLowerCase() === "404 page not found"
        ) {
          return client.say(
            channel,
            `/me I couldn't find that user kellee1Cry`
          );
        }

        return client.say(
          channel,
          `/me kellee1Love Be sure to show ${user} some love and follow them at https://www.twitch.tv/${user} They were last playing ${data} kellee1Love`
        );
      })
      .catch((e) => {
        log("ERROR", "./commands/mod/so.js", e.message);
        return client.say(channel, `/me An error occurred. Please try again.`);
      });
  },
};
