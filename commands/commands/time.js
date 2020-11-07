const moment = require("moment-timezone");
module.exports = {
  commands: "time",
  description: "Tells you Kellee's current time.",
  cooldown: 15,
  callback: (client, channel) => {
    const time = moment.tz("America_New_York").format("DD/MM/YYYY h:mm:ss A z");
    client.say(channel, `/me Kéllee's current time is ${time}.`);
    return;
  },
};
