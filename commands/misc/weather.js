const fetch = require("node-fetch");
module.exports = {
  commands: "weather",
  description: "Tells you KelleeLuna's current weather.",
  cooldown: 15,
  callback: (client, channel) => {
    fetch(
      `https://api.scorpstuff.com/weather.php?unit=imperial&city=${encodeURIComponent(
        "New York City, New York"
      )}`
    )
      .then((response) => response.text())
      .then((data) => {
        if (
          data.toUpperCase() !==
          "[ERROR: MANDATORY COOLDOWN IN EFFECT DUE TO EXCESSIVE USAGE.]"
        ) {
          client.say(channel, `/me ${data}.`);
          return;
        }
      })
      .catch((data) => {
        console.log(data);
      });
  },
};
