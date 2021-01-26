const fetch = require("node-fetch");
module.exports = {
  commands: "villager",
  minArgs: 1,
  expectedArgs: "<villager_name>",
  description: "Retrieves information about the specified AC villager.",
  cooldown: 15,
  callback: (client, channel, message, userstate, args) => {
    let query = args.join(" ");
    if (query.includes(" ")) {
      query = query.replace(/ +/g, "_");
    }
    fetch(
      `https://api.nookipedia.com/villagers?name=${query.toLowerCase()}&nhdetails=true`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": process.env.NOOK_API_KEY,
          "Accept-Version": "2.0.0",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        client.say(
          channel,
          `/me ${
            data[0].name
          } is a ${data[0].personality.toLowerCase()} ${data[0].species.toLowerCase()}, ${
            data[0].phrase
          }! More info: ${data[0].url}`
        );
      })
      .catch((err) => {
        client.say(channel, `/me I couldn't find that villager kellee1Cry`);
        console.log(err);
      });
  },
};
