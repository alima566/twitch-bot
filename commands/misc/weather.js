const weather = require("weather-js");
const { convert } = require("convert");

module.exports = {
  name: "weather",
  category: "Misc",
  description: "Tells you KelleeLuna's current weather.",
  cooldown: 15,
  globalCooldown: true,
  execute: ({ client, channel }) => {
    weather.find(
      { search: "New York City, NY", degreeType: "C" },
      (err, result) => {
        if (err) {
          return console.log(err);
        }

        if (!result) {
          return client.say(channel, `/me No results found.`);
        }

        const localArr = result[0];
        if (localArr.length === 0) {
          return client.say(channel, `/me No results found.`);
        }

        if (localArr === undefined) {
          return;
        }

        const location = localArr.location;
        const current = localArr.current;
        const direction = current.winddisplay.split(" ").splice(-1)[0];
        const fahrenheit = convert(current.temperature)
          .from("celsius")
          .to("fahrenheit")
          .toFixed(1);
        const miles = convert(current.windspeed.split(" ")[0])
          .from("kilometers")
          .to("miles")
          .toFixed(1);

        const text = `Weather for ${location.name}: ${current.skytext} with a temperature of ${current.temperature}°C (${fahrenheit}°F). Wind is blowing from the ${direction} at ${current.windspeed} (${miles} m/h) and the humidity is ${current.humidity}%.`;

        return client.say(channel, `/me ${text}`);
      }
    );
  },
};
