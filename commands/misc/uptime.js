const fetch = require("node-fetch");
module.exports = {
  commands: "uptime",
  description: "Tells you how long Kellee has been live for.",
  cooldown: 15,
  callback: (client, channel) => {
    fetch(`https://beta.decapi.me/twitch/uptime/${process.env.CHANNEL_NAME}`)
      .then((resp) => resp.text())
      .then((data) => {
        if (data.toLowerCase().includes("offline")) {
          client.say(channel, `/me ${data}`);
          return;
        } else {
          client.say(
            channel,
            `/me ${process.env.CHANNEL_NAME} has been live for ${data}.`
          );
          return;
        }
      });
  },
};
