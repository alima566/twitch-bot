const { countdown, countdownTeams, cd } = require("@utils/countdown");

module.exports = {
  name: "cd",
  aliases: ["countdown"],
  category: "Mod",
  description: "Starts a countdown in chat.",
  isModOnly: true,
  execute: async ({ client, channel, text }) => {
    if (cd.cdStarted) {
      return client.say(
        channel,
        `/me I can only do one countdown at a time kellee1Glare`
      );
    }

    if (!text.length) {
      cd.cdStarted = true;
      return countdown(client, channel, 6);
    }

    let duration = text;
    if (duration.length == 2) {
      if (isNaN(duration)) return;

      duration = parseInt(duration);
      if (duration == 20 || duration == 10) {
        cd.cdStarted = true;
        return countdown(client, channel, duration);
      }
    }

    if (duration.length == 3) {
      const color = duration.slice(2).toLowerCase();
      duration = duration.substr(0, 2);

      if (isNaN(duration)) return;

      if (color === "r" || color === "y" || color === "b" || color === "g") {
        cd.cdStarted = true;

        countdownTeams(client, channel, duration, color);
      } else {
        return client.say(channel, `/me Unknown color.`);
      }
    }
  },
};
