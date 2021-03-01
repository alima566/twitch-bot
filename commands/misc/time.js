const moment = require("moment-timezone");

module.exports = {
  name: "time",
  category: "Misc",
  description: "Tells you Kellee's current time.",
  cooldown: 15,
  globalCooldown: false,
  execute: ({ client, channel }) => {
    const time = moment.tz("America_New_York").format("DD/MM/YYYY h:mm:ss A z");
    return client.say(channel, `/me Kéllee's current time is ${time}.`);
  },
};
