const fetch = require("node-fetch");
module.exports = {
  commands: "dadjoke",
  description: "KelleeBot tells you a random dad joke.",
  cooldown: 15,
  callback: (client, channel) => {
    fetch(`https://icanhazdadjoke.com/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        client.say(channel, `/me ${data.joke}`);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

/*fetch(`https://dad-jokes.p.rapidapi.com/random/joke`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
        "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        client.say(
          channel,
          `/me ${data.body[0].setup} ${data.body[0].punchline}`
        );
      })
      .catch(err => {
        console.log(err);
      });*/
